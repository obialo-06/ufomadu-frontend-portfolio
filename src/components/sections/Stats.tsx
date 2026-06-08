const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 20,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Users Served",
  },
  {
    value: 3,
    suffix: "+",
    label: "Enterprise Platforms",
  },
];

export default function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
              stat-card
              bg-slate-900/50
              border
              border-white/10
              rounded-3xl
              p-8
              "
            >
              <h3
                className="stat-number text-4xl font-black"
                data-value={stat.value}
              >
                0{stat.suffix}
              </h3>

              <p className="mt-2 text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
