import { GitPullRequest, Mail, ArrowUpRight, Link } from "lucide-react";

import { profile } from "../../data/profile";
import GithubIcon from "../../icons/github-icon";
import LinkedInIcon from "../../icons/linkedin-icon";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      py-32
      relative
      "
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="
          contact-card
          rounded-[40px]
          border
          border-white/10
          bg-slate-900/60
          backdrop-blur-xl
          p-10
          md:p-16
          text-center
          "
        >
          <p
            className="
            text-blue-400
            uppercase
            tracking-[0.3em]
            text-sm
            "
          >
            Let's Connect
          </p>

          <h2
            className="
            mt-6
            text-4xl
            md:text-6xl
            font-black
            "
          >
            Let's Build Something Amazing
          </h2>

          <p
            className="
            mt-6
            text-slate-400
            max-w-2xl
            mx-auto
            text-lg
            "
          >
            I'm always interested in discussing frontend engineering, product
            ideas, enterprise applications and exciting opportunities.
          </p>

          <div
            className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-5
            "
          >
            <a
              href="mailto:netochukwu89@gmail.com"
              className="
              flex
              items-center
              gap-2
              px-8
              py-4
              rounded-full
              bg-white
              text-black
              font-semibold
              "
            >
              <Mail size={18} />
              Email Me
            </a>

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
              <GithubIcon className="w-5 h-5" />
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
              <LinkedInIcon className="w-5 h-5" />
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
