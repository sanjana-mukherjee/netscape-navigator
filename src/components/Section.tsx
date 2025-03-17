import Container from "./Container";
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
      <Container variant="large">
        <InteractiveBackground>
          <Container>
            <div className="py-15">
              <h2 className="text-pretty bg-radial from-white/70 via-white/50 to-transparent text-9xl uppercase font-semibold font-melodrama max-w-3xl">
                <div className="bg-radial from-black/65 to-black bg-clip-text text-transparent">
                  {heading}
                </div>
              </h2>
            </div>
          </Container>
        </InteractiveBackground>
      </Container>
      <Container>
        <div className="mt-20 pb-18 space-y-36 relative before:absolute before:inset-y-0 before:left-4 before:border-l before:border-l-black/20">
          {children}
        </div>
      </Container>
    </section>
  );
}
