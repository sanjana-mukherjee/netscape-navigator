import { Rocket } from "lucide-react";
import SubSection from "../SubSection";
import Paragraph from "../Paragraph";
import Section from "../Section";

export default function TheRiseOfNetscape() {
  return (
    <Section heading="The Rise of Netscape" Icon={Rocket}>
      <SubSection heading="The Internet Revolution">
        <Paragraph>
          By the mid-1990s, the internet was going mainstream. More people were
          coming online, and they needed a browser that was easy to use and
          fast.
        </Paragraph>
        <Paragraph>
          Netscape Navigator had the right mix of features. It was free for
          individuals and quickly became the{" "}
          <strong>most popular browser</strong>, especially on{" "}
          <strong>Windows</strong> computers.
        </Paragraph>
      </SubSection>
      <SubSection heading="A Faster Web Experience">
        <Paragraph>
          In 1994, Netscape changed how people browsed the web.
        </Paragraph>
        <Paragraph>
          Before, web browsers waited for <strong>all graphics to load</strong>{" "}
          before showing anything. This meant users often stared at a blank
          screen for minutes.
        </Paragraph>
        <Paragraph>
          Netscape introduced <strong>on-the-fly page loading</strong>. Instead
          of waiting for everything to load at once, Navigator displayed text
          almost immediately while images continued to load in the background.
          This made browsing much faster and more seamless.
        </Paragraph>
      </SubSection>
      <SubSection heading="New Features, New Challenges">
        <Paragraph>
          Through the late 1990s, Netscape continued to lead in innovation. It
          introduced <strong>cookies</strong>, which allowed websites to
          remember user preferences, and <strong>JavaScript</strong>, which
          enabled interactive web pages.
        </Paragraph>
        <Paragraph>
          Although these features later became <strong>web standards</strong>,
          they were met with criticism. Some argued that Netscape prioritized
          shaping the web around its own technologies rather than adhering to
          established standards, sidelining competitors in the process. Others
          raised <strong>privacy concerns</strong> about cookies being used to
          track users.
        </Paragraph>
        <Paragraph>
          Despite these issues, Netscape remained the{" "}
          <strong>top web browser</strong> for a while—but competition was
          growing, and the <strong>browser wars</strong> were about to begin.
        </Paragraph>
      </SubSection>
    </Section>
  );
}
