import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

// Utility function to convert a hex color string to a normalized RGB array
const hexToRgbNormalized = (hex) => {
  let r = 0, g = 0, b = 0;

  // Remove the # if present
  const cleanHex = hex.startsWith("#") ? hex.slice(1) : hex;

  if (cleanHex.length === 3) {
    // Handle shorthand hex codes (e.g., #00F -> #0000FF)
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  } else if (cleanHex.length === 6) {
    // Handle full hex codes (e.g., #RRGGBB)
    r = parseInt(cleanHex.substring(0, 2), 16);
    g = parseInt(cleanHex.substring(2, 4), 16);
    b = parseInt(cleanHex.substring(4, 6), 16);
  } else {
    // Fallback for invalid hex
    console.warn(`Invalid hex color: ${hex}. Falling back to black.`);
    return [0, 0, 0];
  }

  // Normalize to 0-1 range
  return [r / 255, g / 255, b / 255];
};

const Globe = ({
  className = "",
  theta = 0.25,
  dark = 0.3,
  scale = 0.8,
  diffuse = 1.2,
  mapSamples = 60000,
  mapBrightness = 10,
  baseColor = "#00ff88",
  markerColor = "#ffffff",
  glowColor = "#00ff88",
}) => {
  const canvasRef = useRef(null);
  const globeRef = useRef(null);

  // Refs for interactive rotation and dragging state
  const phiRef = useRef(0);
  const thetaRef = useRef(theta);
  const isDragging = useRef(false);
  const lastMouseX = useRef(0);
  const lastMouseY = useRef(0);
  const autoRotateSpeed = 0.003;
  const initTimeout = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Clear any pending initialization
    if (initTimeout.current) {
      clearTimeout(initTimeout.current);
    }

    // Resolve color props to the [R, G, B] format required by cobe
    const resolvedBaseColor = 
      typeof baseColor === "string"
        ? hexToRgbNormalized(baseColor)
        : baseColor || [0, 1, 0.5];

    const resolvedMarkerColor = 
      typeof markerColor === "string"
        ? hexToRgbNormalized(markerColor)
        : markerColor || [1, 1, 1];

    const resolvedGlowColor = 
      typeof glowColor === "string"
        ? hexToRgbNormalized(glowColor)
        : glowColor || [0, 1, 0.5];

    const initGlobe = () => {
      // Destroy existing globe instance if it exists
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }

      const rect = canvas.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height) || 240; // Fallback size
      const devicePixelRatio = window.devicePixelRatio || 1;
      const internalWidth = size * devicePixelRatio;
      const internalHeight = size * devicePixelRatio;

      // Set canvas size immediately to prevent flickering
      canvas.width = internalWidth;
      canvas.height = internalHeight;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;

      globeRef.current = createGlobe(canvas, {
        devicePixelRatio: devicePixelRatio,
        width: internalWidth,
        height: internalHeight,
        phi: phiRef.current,
        theta: thetaRef.current,
        dark: dark,
        scale: scale,
        diffuse: diffuse,
        mapSamples: mapSamples,
        mapBrightness: mapBrightness,
        baseColor: resolvedBaseColor,
        markerColor: resolvedMarkerColor,
        glowColor: resolvedGlowColor,
        opacity: 1,
        offset: [0, 0],
        markers: [],
        onRender: (state) => {
          if (!isDragging.current) {
            phiRef.current += autoRotateSpeed;
          }
          state.phi = phiRef.current;
          state.theta = thetaRef.current;
        },
      });
    };

    // Mouse and Touch Interaction Handlers
    const getClientPosition = (e) => {
      if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX, y: e.clientY };
    };

    const onPointerDown = (e) => {
      isDragging.current = true;
      const pos = getClientPosition(e);
      lastMouseX.current = pos.x;
      lastMouseY.current = pos.y;
      canvas.style.cursor = "grabbing";
      e.preventDefault();
    };

    const onPointerMove = (e) => {
      if (isDragging.current) {
        const pos = getClientPosition(e);
        const deltaX = pos.x - lastMouseX.current;
        const deltaY = pos.y - lastMouseY.current;

        const rotationSpeed = 0.005;

        phiRef.current += deltaX * rotationSpeed;
        thetaRef.current = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 2, thetaRef.current - deltaY * rotationSpeed)
        );

        lastMouseX.current = pos.x;
        lastMouseY.current = pos.y;
        e.preventDefault();
      }
    };

    const onPointerUp = () => {
      isDragging.current = false;
      canvas.style.cursor = "grab";
    };

    const onPointerLeave = () => {
      if (isDragging.current) {
        isDragging.current = false;
        canvas.style.cursor = "grab";
      }
    };

    initGlobe();

    // Mouse events
    canvas.addEventListener("mousedown", onPointerDown);
    canvas.addEventListener("mousemove", onPointerMove);
    canvas.addEventListener("mouseup", onPointerUp);
    canvas.addEventListener("mouseleave", onPointerLeave);
    
    // Touch events
    canvas.addEventListener("touchstart", onPointerDown, { passive: false });
    canvas.addEventListener("touchmove", onPointerMove, { passive: false });
    canvas.addEventListener("touchend", onPointerUp);
    canvas.addEventListener("touchcancel", onPointerUp);

    const handleResize = () => {
      if (initTimeout.current) {
        clearTimeout(initTimeout.current);
      }
      // Debounce resize to prevent too many re-initializations
      initTimeout.current = setTimeout(() => {
        initGlobe();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (initTimeout.current) {
        clearTimeout(initTimeout.current);
      }
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousedown", onPointerDown);
        canvas.removeEventListener("mousemove", onPointerMove);
        canvas.removeEventListener("mouseup", onPointerUp);
        canvas.removeEventListener("mouseleave", onPointerLeave);
        canvas.removeEventListener("touchstart", onPointerDown);
        canvas.removeEventListener("touchmove", onPointerMove);
        canvas.removeEventListener("touchend", onPointerUp);
        canvas.removeEventListener("touchcancel", onPointerUp);
      }
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
    };
  }, [theta, dark, scale, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor]);

  return (
    <div
      className={`globe-container ${className}`}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "800px",
          maxHeight: "800px",
          aspectRatio: "1",
          display: "block",
          cursor: "grab",
          touchAction: "none",
        }}
      />
    </div>
  );
};

export default Globe;