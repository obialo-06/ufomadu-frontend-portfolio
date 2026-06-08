export default function BackgroundOrbs() {
  return (
    <>
      <div
        className="
        orb
        fixed
        top-[-150px]
        left-[-100px]
        w-[450px]
        h-[450px]
        rounded-full
        bg-blue-500/15
        blur-[120px]
        pointer-events-none
        -z-10
        "
      />

      <div
        className="
        orb
        fixed
        bottom-[-150px]
        right-[-100px]
        w-[450px]
        h-[450px]
        rounded-full
        bg-violet-500/15
        blur-[120px]
        pointer-events-none
        -z-10
        "
      />
    </>
  );
}
