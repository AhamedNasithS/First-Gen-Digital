import { useRef, useCallback, useState, useEffect } from "react";

function parseHSL(hslStr) {
    const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);

    if (!match) {
        return { h: 210, s: 100, l: 60 };
    }

    return {
        h: parseFloat(match[1]),
        s: parseFloat(match[2]),
        l: parseFloat(match[3]),
    };
}

function buildBoxShadow(glowColor, intensity) {
    const { h, s, l } = parseHSL(glowColor);
    const base = `${h}deg ${s}% ${l}%`;

    const layers = [
        [0, 0, 4, 0, 35],
        [0, 0, 10, 0, 25],
        [0, 0, 20, 0, 18],
        [0, 0, 35, 2, 12],
    ];

    return layers
        .map(([x, y, blur, spread, alpha]) => {
            const opacity = Math.min(alpha * intensity, 100);

            return `${x}px ${y}px ${blur}px ${spread}px hsl(${base} / ${opacity}%)`;
        })
        .join(", ");
}

function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}

function easeInCubic(x) {
    return x * x * x;
}

function animateValue({
    start = 0,
    end = 100,
    duration = 1000,
    delay = 0,
    ease = easeOutCubic,
    onUpdate,
    onEnd,
}) {
    const startTime = performance.now() + delay;

    function tick() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        onUpdate(start + (end - start) * ease(progress));

        if (progress < 1) {
            requestAnimationFrame(tick);
        } else if (onEnd) {
            onEnd();
        }
    }

    setTimeout(() => requestAnimationFrame(tick), delay);
}

const GRADIENT_POSITIONS = [
    "80% 55%",
    "69% 34%",
    "8% 6%",
    "41% 38%",
    "86% 85%",
    "82% 18%",
    "51% 4%",
];

const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildMeshGradients(colors) {
    const gradients = [];

    for (let i = 0; i < 7; i++) {
        const color = colors[Math.min(COLOR_MAP[i], colors.length - 1)];

        gradients.push(
            `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${color} 0px, transparent 50%)`
        );
    }

    gradients.push(`linear-gradient(${colors[0]} 0 100%)`);

    return gradients;
}

const BorderGlow = ({
    children,
    className = "",

    // Sensitivity
    edgeSensitivity = 35,

    // FirstGen Digital blue glow
    glowColor = "210 100 60",

    // Card background
    backgroundColor = "#0F172A",

    // Border
    borderRadius = 8,

    // Glow
    glowRadius = 20,
    glowIntensity = 0.7,

    // Cursor cone
    coneSpread = 20,

    // Animation
    animated = false,

    // FirstGen Digital colors
    colors = ["#0371E4", "#05AFFF", "#1D4F7A"],

    fillOpacity = 0.2,
}) => {
    const cardRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false);
    const [cursorAngle, setCursorAngle] = useState(45);
    const [edgeProximity, setEdgeProximity] = useState(0);
    const [sweepActive, setSweepActive] = useState(false);

    const getCenterOfElement = useCallback((element) => {
        const { width, height } = element.getBoundingClientRect();

        return [width / 2, height / 2];
    }, []);

    const getEdgeProximity = useCallback(
        (element, x, y) => {
            const [centerX, centerY] = getCenterOfElement(element);

            const dx = x - centerX;
            const dy = y - centerY;

            let kx = Infinity;
            let ky = Infinity;

            if (dx !== 0) {
                kx = centerX / Math.abs(dx);
            }

            if (dy !== 0) {
                ky = centerY / Math.abs(dy);
            }

            return Math.min(
                Math.max(1 / Math.min(kx, ky), 0),
                1
            );
        },
        [getCenterOfElement]
    );

    const getCursorAngle = useCallback(
        (element, x, y) => {
            const [centerX, centerY] = getCenterOfElement(element);

            const dx = x - centerX;
            const dy = y - centerY;

            if (dx === 0 && dy === 0) {
                return 0;
            }

            const radians = Math.atan2(dy, dx);

            let degrees =
                radians * (180 / Math.PI) + 90;

            if (degrees < 0) {
                degrees += 360;
            }

            return degrees;
        },
        [getCenterOfElement]
    );

    const handlePointerMove = useCallback(
        (event) => {
            const card = cardRef.current;

            if (!card) return;

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            setEdgeProximity(
                getEdgeProximity(card, x, y)
            );

            setCursorAngle(
                getCursorAngle(card, x, y)
            );
        },
        [getEdgeProximity, getCursorAngle]
    );

    useEffect(() => {
        if (!animated) return;

        const angleStart = 110;
        const angleEnd = 465;

        setSweepActive(true);
        setCursorAngle(angleStart);

        animateValue({
            duration: 500,
            onUpdate: (value) => {
                setEdgeProximity(value / 100);
            },
        });

        animateValue({
            ease: easeInCubic,
            duration: 1500,
            end: 50,
            onUpdate: (value) => {
                setCursorAngle(
                    (angleEnd - angleStart) *
                        (value / 100) +
                        angleStart
                );
            },
        });

        animateValue({
            ease: easeOutCubic,
            delay: 1500,
            duration: 2250,
            start: 50,
            end: 100,
            onUpdate: (value) => {
                setCursorAngle(
                    (angleEnd - angleStart) *
                        (value / 100) +
                        angleStart
                );
            },
        });

        animateValue({
            ease: easeInCubic,
            delay: 2500,
            duration: 1500,
            start: 100,
            end: 0,
            onUpdate: (value) => {
                setEdgeProximity(value / 100);
            },
            onEnd: () => {
                setSweepActive(false);
            },
        });
    }, [animated]);

    const colorSensitivity =
        edgeSensitivity + 20;

    const isVisible =
        isHovered || sweepActive;

    const borderOpacity = isVisible
        ? Math.max(
              0,
              (edgeProximity * 100 -
                  colorSensitivity) /
                  (100 - colorSensitivity)
          )
        : 0;

    const glowOpacity = isVisible
        ? Math.max(
              0,
              (edgeProximity * 100 -
                  edgeSensitivity) /
                  (100 - edgeSensitivity)
          )
        : 0;

    const meshGradients =
        buildMeshGradients(colors);

    const borderBg = meshGradients.map(
        (gradient) => `${gradient} border-box`
    );

    const fillBg = meshGradients.map(
        (gradient) => `${gradient} padding-box`
    );

    const angleDeg =
        `${cursorAngle.toFixed(3)}deg`;

    return (
        <div
            ref={cardRef}
            onPointerMove={handlePointerMove}
            onPointerEnter={() =>
                setIsHovered(true)
            }
            onPointerLeave={() =>
                setIsHovered(false)
            }
            className={`relative isolate border border-[#FFFFFF1A] ${className}`}
            style={{
                background: backgroundColor,
                borderRadius: `${borderRadius}px`,
                transform:
                    "translate3d(0, 0, 0.01px)",
                boxShadow:
                    "4px 6px 25px 0px #00000024",
            }}
        >
            {/* Animated gradient border */}
            <div
                className="
                    absolute
                    inset-0
                    rounded-[inherit]
                    pointer-events-none
                "
                style={{
                    border:
                        "1px solid transparent",

                    background: [
                        `linear-gradient(${backgroundColor} 0 100%) padding-box`,
                        "linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box",
                        ...borderBg,
                    ].join(","),

                    opacity: borderOpacity,

                    maskImage: `
                        conic-gradient(
                            from ${angleDeg}
                            at center,
                            black ${coneSpread}%,
                            transparent ${coneSpread + 15}%,
                            transparent ${100 - coneSpread - 15}%,
                            black ${100 - coneSpread}%
                        )
                    `,

                    WebkitMaskImage: `
                        conic-gradient(
                            from ${angleDeg}
                            at center,
                            black ${coneSpread}%,
                            transparent ${coneSpread + 15}%,
                            transparent ${100 - coneSpread - 15}%,
                            black ${100 - coneSpread}%
                        )
                    `,

                    transition: isVisible
                        ? "opacity 0.25s ease-out"
                        : "opacity 0.75s ease-in-out",
                }}
            />

            {/* Subtle gradient fill */}
            <div
                className="
                    absolute
                    inset-0
                    rounded-[inherit]
                    pointer-events-none
                "
                style={{
                    border:
                        "1px solid transparent",

                    background:
                        fillBg.join(","),

                    maskImage: `
                        conic-gradient(
                            from ${angleDeg}
                            at center,
                            transparent 5%,
                            black 15%,
                            black 85%,
                            transparent 95%
                        )
                    `,

                    WebkitMaskImage: `
                        conic-gradient(
                            from ${angleDeg}
                            at center,
                            transparent 5%,
                            black 15%,
                            black 85%,
                            transparent 95%
                        )
                    `,

                    opacity:
                        borderOpacity *
                        fillOpacity,

                    mixBlendMode:
                        "soft-light",

                    transition: isVisible
                        ? "opacity 0.25s ease-out"
                        : "opacity 0.75s ease-in-out",
                }}
            />

            {/* Outer blue glow */}
            <span
                className="
                    absolute
                    pointer-events-none
                    rounded-[inherit]
                "
                style={{
                    inset: `${-glowRadius}px`,

                    maskImage: `
                        conic-gradient(
                            from ${angleDeg}
                            at center,
                            black 2.5%,
                            transparent 10%,
                            transparent 90%,
                            black 97.5%
                        )
                    `,

                    WebkitMaskImage: `
                        conic-gradient(
                            from ${angleDeg}
                            at center,
                            black 2.5%,
                            transparent 10%,
                            transparent 90%,
                            black 97.5%
                        )
                    `,

                    opacity: glowOpacity,

                    mixBlendMode:
                        "plus-lighter",

                    transition: isVisible
                        ? "opacity 0.25s ease-out"
                        : "opacity 0.75s ease-in-out",
                }}
            >
                <span
                    className="
                        absolute
                        rounded-[inherit]
                    "
                    style={{
                        inset: `${glowRadius}px`,

                        boxShadow:
                            buildBoxShadow(
                                glowColor,
                                glowIntensity
                            ),
                    }}
                />
            </span>

            {/* Content */}
            <div className="relative z-[1] h-full">
                {children}
            </div>
        </div>
    );
};

export default BorderGlow;