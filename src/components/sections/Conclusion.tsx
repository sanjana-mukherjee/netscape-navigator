import Paragraph from "../Paragraph";
import { SquareArrowOutUpRight } from "lucide-react";
import InteractiveBackground from "../InteractiveBackground";
import Container from "../Container";

export default function Conclusion() {
  return (
    <InteractiveBackground>
      <div className="mt-10 pb-20 sm:my-20 md:pb-0 xl:my-30">
        <div className="bg-white py-4 md:bg-transparent md:py-0">
          <Container>
            <div className="-mx-3 grid justify-between gap-8 bg-white px-3 sm:gap-10 md:grid-cols-[min-content_--spacing(52)] xl:grid-cols-[min-content_1fr_--spacing(52)] xl:gap-20">
              <h1 className="font-melodrama text-gradient text-lg font-semibold uppercase sm:text-2xl">
                <div className="leading-6 sm:leading-7">From</div>
                <div className="text-5xl leading-8 sm:text-6xl sm:leading-11">
                  Netscape
                </div>
                <div className="leading-6 sm:leading-7">To</div>
                <div className="text-5xl leading-8 sm:text-6xl sm:leading-11">
                  Now
                </div>
              </h1>
              <div className="self-end xl:col-start-3 xl:self-start">
                <a
                  href="#"
                  className="font-melodrama flex items-center justify-between gap-1 border border-sky-100 bg-sky-50/70 p-2 text-xl leading-6 uppercase sm:text-2xl md:text-3xl"
                >
                  <div>Watch on Youtube</div>
                  <SquareArrowOutUpRight
                    size={40}
                    absoluteStrokeWidth={true}
                    strokeWidth={1.35}
                    className="hidden md:block"
                  />
                  <SquareArrowOutUpRight
                    size={20}
                    absoluteStrokeWidth={true}
                    strokeWidth={0.5}
                    className="md:hidden"
                  />
                </a>
              </div>
              <div className="max-w-2xl space-y-4 text-justify md:col-span-2 md:flex-col xl:col-span-1 xl:col-start-2 xl:row-start-1">
                <Paragraph>
                  <strong>Netscape</strong> may be gone, but its impact is
                  everywhere. From the invention of <strong>cookies</strong> and{" "}
                  <strong>JavaScript</strong> to the push for{" "}
                  <strong>open standards</strong> and tools like{" "}
                  <strong>MDN</strong> and <strong>Rust</strong>, Netscape's
                  legacy shaped the tools and practices developers use every
                  day.
                </Paragraph>
                <Paragraph>
                  The next time you write <strong>JavaScript</strong>, look
                  something up on <strong>MDN</strong>, or use a feature from{" "}
                  <strong>HTML5</strong> — remember, it all started with a small
                  team trying to make the web a little more interactive.
                </Paragraph>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </InteractiveBackground>
  );
}
