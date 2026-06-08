import { ArrowUpRight, GitPullRequest, Link } from "lucide-react";
import { profile } from "../../data/profile";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../../data/navLinks";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      backdrop-blur-md
      border-b
      border-white/10
      bg-[#050816]/70
      "
    >
      <nav
        className="
        max-w-7xl
        mx-auto
        px-6
        py-5
        flex
        items-center
        justify-between
        "
      >
        <h2
          className="
          text-xl
          font-bold
          text-white
          tracking-wide
          "
        >
          <a href="/">
            <img
              src="/favicon.svg"
              alt="My logo"
              className="lg:w-10 lg:h-10 w-8 h-8 cursor-pointer"
            />
          </a>
        </h2>
        <MobileMenu />

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              px-8
              py-4
              rounded-full
              border
              border-white/10
              "
          >
            <GitPullRequest size={18} />
            GitHub
            <ArrowUpRight size={16} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              px-8
              py-4
              rounded-full
              border
              border-white/10
              "
          >
            <Link size={18} />
            LinkedIn
            <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
