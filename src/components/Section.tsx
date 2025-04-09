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
              <h2 className="font-melodrama max-w-sm bg-radial from-white/70 via-white/50 to-transparent text-6xl font-semibold text-pretty uppercase sm:max-w-xl sm:text-8xl md:max-w-3xl md:text-9xl">
                <div className="text-gradient">{heading}</div>
              </h2>
            </div>
          </Container>
        </InteractiveBackground>
      </Container>
      <Container>
        <div className="relative mt-10 space-y-20 pb-10 before:absolute before:inset-y-0 before:left-0 before:border-l before:border-gray-300 sm:mt-20 sm:pb-18 lg:before:left-4 lg:before:border-gray-400">
          {children}
        </div>
      </Container>
    </section>
  );
}
