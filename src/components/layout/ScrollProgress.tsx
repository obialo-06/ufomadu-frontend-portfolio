import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / documentHeight) * 100;

      setWidth(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
      fixed
      top-0
      left-0
      z-[9999]
      h-[3px]
      bg-gradient-to-r
      from-blue-500
      via-cyan-400
      to-violet-500
      "
      style={{
        width: `${width}%`,
      }}
    />
  );
}
