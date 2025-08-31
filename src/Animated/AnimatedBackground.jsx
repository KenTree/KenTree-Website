import React, { useEffect, useRef, useState } from "react";

const AnimatedBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
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
    <>
      <div
        ref={vantaRef}
        className="animated-background"
        style={{ zIndex: 0 }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        {children}
      </div>
    </>
  );
};

export default AnimatedBackground;
