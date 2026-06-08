import { type ReactNode, useRef } from "react";

import gsap from "gsap";

interface Props {
  children: ReactNode;
}

export default function MagneticButton({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(ref.current, {
      x: x * 0.2,
      y: y * 0.2,
    });
  };

  const leave = () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
    });
  };

  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </div>
  );
}
