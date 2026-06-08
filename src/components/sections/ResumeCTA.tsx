import { Download } from "lucide-react";

export default function ResumeCTA() {
  return (
    <section
      className="
      resume-cta
      py-24
      "
    >
      <div
        className="
        max-w-5xl
        mx-auto
        px-6
        "
      >
        <div
          className="
          rounded-[32px]
          bg-gradient-to-r
          from-blue-600/20
          to-violet-600/20
          border
          border-white/10
          p-10
          text-center
          "
        >
          <h2
            className="
            text-4xl
            font-black
            "
          >
            Interested In Working Together?
          </h2>

          <p
            className="
            mt-4
            text-slate-400
            "
          >
            Download my resume and learn more about my experience and projects.
          </p>

          <a
            href="/resume.pdf"
            download
            className="
            inline-flex
            items-center
            gap-2
            mt-8
            px-8
            py-4
            rounded-full
            bg-white
            text-black
            "
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
