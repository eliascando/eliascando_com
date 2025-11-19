import { useEffect, useRef } from "react";

export default function useSectionObserver(setLocation) {
  const observer = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLocation(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      if (observer.current) {
        sections.forEach((section) => observer.current.unobserve(section));
      }
    };
  }, [setLocation]);
}
