import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { navLinks } from "../../data/navLinks";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      gsap.from(".mobile-menu", {
        y: -100,
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} className="md:hidden">
        <Menu />
      </button>

      {open && (
        <div
          className="
          fixed
          top-0
          left-0
          w-screen
          h-screen
          flex
          flex-col
          mobile-menu
          z-[100]
          !bg-[#050816]
          "
        >
          {/* Top Bar */}
          <div className="p-6 flex justify-end">
            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          {/* Links Container */}
          <div
            className="
            flex
            flex-col
            items-center
            justify-center
            flex-1
            gap-10
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
