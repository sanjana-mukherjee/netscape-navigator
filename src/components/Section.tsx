export default function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="sm:text-7xl text-5xl font-bold md:text-9xl uppercase md:font-semibold font-melodrama">
        {heading}
      </h2>
      <div className="mt-28 space-y-20">{children}</div>
    </section>
  );
}
