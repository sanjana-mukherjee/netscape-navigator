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
        variant === "normal" ? "px-5 sm:px-10 md:px-16" : "md:max-w-[110rem]"
      } mx-auto md:max-w-[95rem]`}
    >
      {children}
    </div>
  );
}
