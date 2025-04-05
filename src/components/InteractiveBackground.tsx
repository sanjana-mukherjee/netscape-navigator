import { useRef } from "react";

export default function InteractiveBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (overlayRef.current) {
      const rect = overlayRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      overlayRef.current.style.setProperty("--x", `${x}px`);
      overlayRef.current.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <div className="bg-wave relative h-full" onMouseMove={handleMouseMove}>
      <div
        ref={overlayRef}
        className="overlay absolute inset-0 bg-white/85"
      ></div>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
