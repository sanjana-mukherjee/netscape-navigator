import Paragraph from "../Paragraph";
import { SquareArrowOutUpRight } from "lucide-react";
import InteractiveBackground from "../InteractiveBackground";
import Container from "../Container";

export default function Introduction() {
  return (
    <InteractiveBackground>
      <div className="pt-20 md:mt-20 md:pt-0 xl:mt-30">
        <div className="bg-white py-4 md:bg-transparent md:py-0">
          <Container>
            <div className="-mx-3 grid justify-between gap-8 bg-white px-3 sm:gap-10 md:grid-cols-[min-content_--spacing(52)] xl:grid-cols-[min-content_1fr_--spacing(52)] xl:gap-20">
              <h1 className="font-melodrama text-gradient text-lg font-semibold uppercase sm:text-2xl">
                <div>Where</div>
                <div>
                  <span className="text-5xl leading-8 sm:text-6xl sm:leading-11">
                    JavaScript
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-5xl leading-8 sm:text-6xl sm:leading-11">
                    Cookies
                  </span>{" "}
                  &{" "}
                </div>
                <div>
                  <span className="text-5xl leading-8 sm:text-6xl sm:leading-11">
                    Firefox
                  </span>{" "}
                </div>
                <div className="-mt-2 sm:-mt-1">Began</div>
              </h1>
              <div className="flex flex-col justify-between gap-3 xl:col-start-3">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div>
                    <div className="text-xs text-gray-500">Last Updated:</div>
                    <div className="font-melodrama text-lg md:text-2xl">
                      13<sup>th</sup> April{" "}
                      <span className="text-sm text-gray-500 italic">2025</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-melodrama text-lg md:text-2xl">
                      12
                    </span>
                    <span className="text-sm text-gray-500 italic">
                      {" "}
                      mins read
                    </span>
                  </div>
                </div>
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
              <div className="flex flex-col-reverse gap-6 md:col-span-2 md:flex-col xl:col-span-1 xl:col-start-2 xl:row-start-1">
                <ul className="font-melodrama text-md flex flex-wrap gap-2 sm:gap-3 sm:text-xl">
                  <li className="border border-sky-100 bg-sky-50/70 px-4">
                    Netscape
                  </li>
                  <li className="border border-sky-100 bg-sky-50/70 px-4">
                    Firefox
                  </li>
                  <li className="border border-sky-100 bg-sky-50/70 px-4">
                    Web History
                  </li>
                  <li className="border border-sky-100 bg-sky-50/70 px-4">
                    Browser War I
                  </li>
                </ul>
                <div className="max-w-2xl space-y-4 text-justify">
                  <Paragraph>
                    Before Chrome ruled the web and Firefox won over developers,
                    there was <strong>Netscape</strong> — the browser that
                    helped shape the modern internet. It’s where{" "}
                    <strong>JavaScript</strong> was born, where{" "}
                    <strong>cookies</strong> were invented, and where the{" "}
                    <strong>future of web browsing</strong> first took off.
                  </Paragraph>
                  <Paragraph>
                    In this post, we’ll trace Netscape’s rise, its innovations,
                    and the fierce competition that led to its fall. More
                    importantly, we’ll look at the legacy it left behind — in
                    the web standards, technologies, and ideas that still power
                    the internet today.
                  </Paragraph>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </InteractiveBackground>
  );
}
