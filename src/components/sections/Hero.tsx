import { ArrowDown, ArrowRight, Download } from "lucide-react";
import PlaceholderImage from "../shared/PlaceholderImage";
import { profile } from "../../data/profile";
import useMouseParallax from "../../hooks/useMouseParallax";
import MagneticButton from "../shared/MagneticButton";

export default function Hero() {
  useMouseParallax();
  return (
    <section
      id="hero"
      className="
      min-h-screen
      relative
      flex
      items-center
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        w-full
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >
        <div
          className="
            hero-content
            order-2
            lg:order-1
            lg:mt-6
            "
        >
          {/* <p
              className="
          text-blue-400
          uppercase
          tracking-[0.3em]
          "
            >
              Available For Remote Opportunities
            </p> */}

          <p
            className="
              text-blue-400
              font-semibold
              tracking-widest
              uppercase
              "
          >
            Senior Frontend Engineer
          </p>

          <h1
            className="
              text-5xl
              md:text-[clamp(3rem,8vw,6rem)]
              font-black
              text-white
              leading-tight
              "
          >
            {profile.name}
          </h1>

          <p
            className="
              mt-8
              text-slate-400
              text-lg
              md:text-xl
              max-w-xl
              leading-relaxed
              "
          >
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold"
              >
                View Work
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/resume.pdf"
                download
                className="
            px-8
            py-4
            rounded-full
            border
            border-white/10
            flex
            items-center
            gap-2
            "
              >
                <Download size={18} />
                Resume
              </a>
            </MagneticButton>
          </div>
        </div>
        <div className="hero-image-wrapper flex justify-center order-1 lg:order-2 lg:mt-0 mt-14">
          <PlaceholderImage />
        </div>
      </div>
    </section>
  );
}
