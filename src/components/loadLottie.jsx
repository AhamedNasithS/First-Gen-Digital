// components/LottieAnimation.js
import React from "react";

// const LazyLottie = React.lazy(() => import("react-lottie"));
import LazyLottie from "react-lottie";

const LoadLottie = ({ animationData, loop }) => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <LazyLottie
      options={{
        loop: loop,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      isStopped={false}
      isPaused={false}
    />
    // </Suspense>
  );
};

export default LoadLottie;