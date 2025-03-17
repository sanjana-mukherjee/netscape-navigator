export default function Container({
  variant = "normal",
  children,
}: {
  variant?: "normal" | "large";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${
        variant === "normal" ? "px-16" : "max-w-[110rem]"
      } mx-auto max-w-[95rem]`}
    >
      {children}
    </div>
  );
}
