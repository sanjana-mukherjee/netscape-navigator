import { Linkedin, Twitter, SquarePlay } from "lucide-react";
import Container from "../Container";
import InteractiveBackground from "../InteractiveBackground";

export default function Footer() {
  return (
    <InteractiveBackground>
      <Container>
        <div className="mt-20 flex flex-col items-start justify-between gap-10 py-20 sm:flex-row">
          <div>
            <p className="font-melodrama text-gradient text-6xl font-semibold text-pretty uppercase">
              Thank You for Reading!
            </p>
            <p className="mt-6 max-w-prose">
              <span className="bg-white">
                Hey, I'm <strong>Sanjana</strong>! I'm a{" "}
                <strong>frontend developer</strong> who enjoys sharing cool
                stuff about the web through <strong>blog posts</strong> and{" "}
                <strong>videos</strong>.
              </span>
            </p>
          </div>
          <div className="flex space-x-2">
            <a
              href="https://x.com/__mukherjee"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-sky-100 bg-sky-50 p-1.5 text-black hover:border-sky-200"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mkhrj/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-sky-100 bg-sky-50 p-1.5 text-black hover:border-sky-200"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.youtube.com/@sanjana-mukherjee"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-sky-100 bg-sky-50 p-1.5 text-black hover:border-sky-200"
            >
              <SquarePlay />
            </a>
          </div>
        </div>
      </Container>
    </InteractiveBackground>
  );
}
