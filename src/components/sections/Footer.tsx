export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      py-10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        text-center
        "
      >
        <p className="text-slate-500">
          © {new Date().getFullYear()} Joseph Ufomadu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
