export default function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-wave -mx-20 px-20 -my-10 py-10">
        <h2 className="text-pretty bg-radial from-white/70 via-white/50 to-transparent text-9xl uppercase font-semibold font-melodrama max-w-3xl -m-4 p-4">
          <div className="bg-radial from-black/70 to-black bg-clip-text text-transparent">
            {heading}
          </div>
        </h2>
      </div>
      <div className="mt-36 pb-18 space-y-36 relative before:absolute before:inset-y-0 before:left-4 before:right-0 before:-z-10 before:border-l before:border-l-black/20">
        {children}
      </div>
    </section>
  );
}
