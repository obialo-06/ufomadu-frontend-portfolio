import { expertise } from "../../data/expertise";
import SectionHeading from "../shared/SectionHeading";

export default function Expertise() {
  return (
    <section id="expertise" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Expertise" subtitle="Technical Strengths" />

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          "
        >
          {expertise.map((group) => (
            <div
              key={group.category}
              className="
              expertise-card
              rounded-3xl
              border
              border-white/10
              bg-slate-900/50
              p-8
              backdrop-blur-xl
              "
            >
              <h3
                className="
                text-2xl
                font-bold
                mb-6
                "
              >
                {group.category}
              </h3>

              <div
                className="
                flex
                flex-wrap
                gap-3
                "
              >
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-slate-800
                    border
                    border-white/10
                    text-slate-300
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
