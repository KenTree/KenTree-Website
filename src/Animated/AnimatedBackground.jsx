import React, { useEffect, useRef, useState } from "react";

const AnimatedBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Use window.VANTA because it's loaded globally from the <script>
    if (!vantaEffect && window.VANTA?.WAVES) {
      setVantaEffect(
        window.VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x111111,
          shininess: 20,
          waveHeight: 40,
          waveSpeed: 0.4,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ height: "100vh", width: "100vw" }}>
      <div className="center-screen">{children}</div>
    </div>
  );
};

export default AnimatedBackground;