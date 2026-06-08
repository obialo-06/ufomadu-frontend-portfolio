import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useGSAPAnimations() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // HERO
      const heroTimeline = gsap.timeline();

      heroTimeline
        .from(".hero-image-wrapper", {
          scale: 0.7,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".hero-content",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.6",
        );

      // STATS
      const counters = document.querySelectorAll<HTMLElement>(".stat-number");

      counters.forEach((counter) => {
        const value = Number(counter.dataset.value);

        const obj = { value: 0 };

        gsap.to(obj, {
          value,
          duration: 2,

          snap: {
            value: 1,
          },

          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
          },

          onUpdate: () => {
            counter.textContent = `${Math.round(obj.value)}+`;
          },
        });
      });

      // EXPERIENCE
      gsap.from(".experience-card", {
        scrollTrigger: {
          trigger: "#experience",
          start: "top 75%",
        },

        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      // EXPERTISE
      gsap.from(".expertise-card", {
        scrollTrigger: {
          trigger: "#expertise",
          start: "top 75%",
        },

        opacity: 0,
        y: 80,
        stagger: 0.15,
        duration: 1,
      });

      // CASE STUDY
      gsap.from(".case-study-card", {
        scrollTrigger: {
          trigger: "#case-study",
          start: "top 75%",
        },

        opacity: 0,
        y: 100,
        duration: 1,
      });

      // PROJECTS
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: "#projects",
          start: "top 75%",
        },

        opacity: 0,
        y: 100,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
      });

      // CONTACT
      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
        },

        opacity: 0,
        scale: 0.9,
        duration: 1,
      });

      // RESUME CTA
      gsap.from(".resume-cta", {
        scrollTrigger: {
          trigger: ".resume-cta",
          start: "top 80%",
        },

        opacity: 0,
        scale: 0.95,
        duration: 1,
      });

      // ORBS
      gsap.to(".orb", {
        y: 60,
        repeat: -1,
        yoyo: true,
        duration: 8,
        ease: "sine.inOut",
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
