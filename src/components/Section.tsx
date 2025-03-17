import InteractiveBackground from "./InteractiveBackground";

export default function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="-mx-40">
        <InteractiveBackground>
          <div className="-my-15 py-15 px-40">
            <h2 className="text-pretty bg-radial from-white/70 via-white/50 to-transparent text-9xl uppercase font-semibold font-melodrama max-w-3xl -m-4 p-4">
              <div className="bg-radial from-black/65 to-black bg-clip-text text-transparent">
                {heading}
              </div>
            </h2>
          </div>
        </InteractiveBackground>
      </div>
      <div className="mt-36 pb-18 space-y-36 relative before:absolute before:inset-y-0 before:left-4 before:border-l before:border-l-black/20">
        {children}
      </div>
    </section>
  );
}
