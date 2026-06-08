type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <p
        className="
        text-blue-400
        uppercase
        tracking-[0.3em]
        text-sm
        mb-3
        "
      >
        {subtitle}
      </p>

      <h2
        className="
        text-4xl
        md:text-[clamp(2rem,5vw,4rem)]
        font-black
        text-white
        "
      >
        {title}
      </h2>
    </div>
  );
}
