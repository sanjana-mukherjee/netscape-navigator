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
            <div className="py-10 md:py-15">
              <h2 className="text-pretty bg-radial from-white/70 via-white/50 to-transparent uppercase font-semibold font-melodrama text-6xl max-w-sm sm:text-8xl sm:max-w-xl md:text-9xl md:max-w-3xl">
                <div className="bg-radial from-black/65 to-black bg-clip-text text-transparent">
                  {heading}
                </div>
              </h2>
            </div>
          </Container>
        </InteractiveBackground>
      </Container>
      <Container>
        <div className="mt-10 sm:mt-20 pb-10 sm:pb-18 space-y-28 lg:space-y-36 relative before:absolute before:inset-y-0 before:left-0 lg:before:left-4 before:border-l before:border-l-gray-300">
          {children}
        </div>
      </Container>
    </section>
  );
}
