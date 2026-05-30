import { useEffect, useRef } from "react";
import "../css/CursorSpotlight.css";

/**
 * Spotlight that follows the cursor. The gradient is written straight to the
 * DOM node via a ref inside a requestAnimationFrame loop, so moving the mouse
 * never triggers a React re-render — it only repaints this single element, at
 * most once per frame.
 */
const CursorSpotlight = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = null;
    let x = 0;
    let y = 0;

    const paint = () => {
      el.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(100, 255, 218, 0.07), transparent 80%)`;
      rafId = null;
    };

    const onMouseMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (rafId === null) {
        rafId = requestAnimationFrame(paint);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="cursor-spotlight" ref={ref} />;
};

export default CursorSpotlight;
