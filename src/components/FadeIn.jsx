import { useEffect, useRef } from "react";

/**
 * Wraps its children in an element that fades into view the first time it
 * enters the viewport. Each instance owns its own IntersectionObserver, so it
 * keeps working after the node is remounted (e.g. on a language change) — unlike
 * a single global observer that only runs once on mount.
 *
 * @param {string} [as="div"] - The HTML tag to render.
 * @param {string} [className] - Extra classes appended to `fade-in-section`.
 */
function FadeIn({ as: Tag = "div", className = "", children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`fade-in-section ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}

export default FadeIn;
