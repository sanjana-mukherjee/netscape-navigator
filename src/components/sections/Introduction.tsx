import Paragraph from "../Paragraph";
import { SquareArrowOutUpRight } from "lucide-react";
import InteractiveBackground from "../InteractiveBackground";
import Container from "../Container";

export default function Introduction() {
  return (
    <InteractiveBackground>
      <Container>
        <div className="-mx-2 mt-20 flex gap-10 bg-white px-2">
          <h1 className="font-melodrama max-w-sm text-2xl font-medium uppercase">
            <div>Where</div>
            <div>
              <span className="text-6xl leading-11">JavaScript</span>,
            </div>
            <div>
              <span className="text-6xl leading-11">Cookies</span> &{" "}
            </div>
            <div>
              <span className="text-6xl leading-11">Firefox</span>{" "}
            </div>
            <div className="-mt-1">Began</div>
          </h1>
          <div className="flex flex-1 justify-between gap-10">
            <div>
              <ul className="font-melodrama flex gap-3 text-xl">
                <li className="border border-gray-100 bg-gray-50 px-4">
                  Netscape
                </li>
                <li className="border border-gray-100 bg-gray-50 px-4">
                  Firefox
                </li>
                <li className="border border-gray-100 bg-gray-50 px-4">
                  Web History
                </li>
                <li className="border border-gray-100 bg-gray-50 px-4">
                  Browser War I
                </li>
              </ul>
              <div className="mt-6 max-w-2xl space-y-4 text-justify">
                <Paragraph>
                  Before Chrome ruled the web and Firefox won over developers,
                  there was <strong>Netscape</strong> — the browser that helped
                  shape the modern internet. It’s where{" "}
                  <strong>JavaScript</strong> was born, where{" "}
                  <strong>cookies</strong> were invented, and where the{" "}
                  <strong>future of web browsing</strong> first took off.
                </Paragraph>
                <Paragraph>
                  In this post, we’ll trace Netscape’s rise, its innovations,
                  and the fierce competition that led to its fall. More
                  importantly, we’ll look at the legacy it left behind — in the
                  web standards, technologies, and ideas that still power the
                  internet today.
                </Paragraph>
              </div>
            </div>
            <div className="flex max-w-44 flex-col justify-between gap-3">
              <div className="flex flex-col gap-3">
                <div>
                  <div className="text-xs text-gray-500">Last Updated:</div>
                  <div className="font-melodrama text-2xl">
                    11<sup>th</sup> April{" "}
                    <span className="text-sm text-gray-500 italic">2025</span>
                  </div>
                </div>
                <div>
                  <span className="font-melodrama text-2xl">12</span>
                  <span className="text-sm text-gray-500 italic">
                    {" "}
                    mins read
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="font-melodrama flex items-center gap-1 bg-gray-50 p-2 text-3xl leading-6 uppercase"
              >
                <div>Watch on Youtube</div>
                <SquareArrowOutUpRight
                  size={40}
                  absoluteStrokeWidth={true}
                  strokeWidth={1.35}
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </InteractiveBackground>
  );
}
