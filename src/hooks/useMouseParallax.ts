import { useEffect } from "react";
import gsap from "gsap";

export default function useMouseParallax() {
  useEffect(() => {
    const image = document.querySelector(".hero-image-wrapper");

    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;

      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      gsap.to(image, {
        x,
        y,
        duration: 1,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);
}
