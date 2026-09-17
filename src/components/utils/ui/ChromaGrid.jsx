import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ChromaGrid = ({
    children,
    className = "",
    radius = 350,
    damping = 0.35,
    fadeOut = 0.5,
    ease = "power3.out",
}) => {
    const rootRef = useRef(null);
    const overlayRef = useRef(null);

    const pos = useRef({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const root = rootRef.current;

        if (!root) return;

        const rect = root.getBoundingClientRect();

        pos.current = {
            x: rect.width / 2,
            y: rect.height / 2,
        };

        root.style.setProperty("--x", `${pos.current.x}px`);
        root.style.setProperty("--y", `${pos.current.y}px`);
    }, []);

    const handleMove = (e) => {
        const root = rootRef.current;

        if (!root) return;

        const rect = root.getBoundingClientRect();

        const targetX = e.clientX - rect.left;
        const targetY = e.clientY - rect.top;

        gsap.to(pos.current, {
            x: targetX,
            y: targetY,
            duration: damping,
            ease,
            overwrite: true,

            onUpdate: () => {
                root.style.setProperty(
                    "--x",
                    `${pos.current.x}px`
                );

                root.style.setProperty(
                    "--y",
                    `${pos.current.y}px`
                );
            },
        });

        gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.2,
            overwrite: true,
        });
    };

    const handleLeave = () => {
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: fadeOut,
            overwrite: true,
        });
    };

    return (
        <div
            ref={rootRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className={`relative ${className}`}
            style={{
                "--x": "50%",
                "--y": "50%",
                "--radius": `${radius}px`,
            }}
        >
            {/* Your cards */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Spotlight effect */}
            <div
                ref={overlayRef}
                className="absolute inset-0 pointer-events-none z-20 transition-opacity"
                style={{
                    opacity: 0,

                    background: `
                        radial-gradient(
                            circle var(--radius) at var(--x) var(--y),
                            rgba(5, 175, 255, 0.12) 0%,
                            rgba(3, 113, 228, 0.08) 25%,
                            rgba(0, 0, 0, 0.15) 50%,
                            rgba(0, 0, 0, 0.65) 100%
                        )
                    `,

                    mixBlendMode: "screen",
                }}
            />

            {/* Dark outside cursor */}
            <div
                className="absolute inset-0 pointer-events-none z-30"
                style={{
                    background: `
                        radial-gradient(
                            circle var(--radius) at var(--x) var(--y),
                            transparent 0%,
                            transparent 25%,
                            rgba(0,0,0,0.15) 55%,
                            rgba(0,0,0,0.65) 100%
                        )
                    `,
                }}
            />
        </div>
    );
};

export default ChromaGrid;