import SubSection, {
  SubSectionContent,
  SubSectionHeader,
  SubSectionHeading,
  SubSectionTimelineContainer,
} from "../SubSection";
import Paragraph from "../Paragraph";
import Section from "../Section";
import { Timeline, TimelineItem } from "../Timeline";
import Image from "../Image";

export default function TheRiseOfNetscape() {
  return (
    <Section heading="The Rise of Netscape">
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>The Internet Revolution</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1994}>
                <strong>Netscape Navigator 1.0</strong> launches.
              </TimelineItem>
              <TimelineItem year={1995}>
                Netscape became the most popular browser.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            By the mid-1990s, the World Wide Web had become a cultural
            phenomenon. As more people came online, they needed a browser that
            was both fast and easy to use.
          </Paragraph>
          <Paragraph>
            <strong>Netscape Navigator</strong> emerged as the browser of
            choice, offering the right mix of features. <strong>Free</strong>{" "}
            for individuals, it quickly became the{" "}
            <strong>most popular browser</strong>, especially on{" "}
            <strong>Windows</strong> computers.
          </Paragraph>
          <Image
            src="./assets/Netscape_Navigator_1.png"
            alt="Screen shot of the Netscape Navigator 1.0 browser"
          />
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>A Faster Web Experience</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1994}>
                Netscape’s on-the-fly page loading makes web browsing smoother
                for users.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            In 1994, Netscape changed how people browsed the web.
          </Paragraph>
          <Paragraph>
            Before, web browsers waited for{" "}
            <strong>all graphics to load</strong> before showing anything. This
            meant users often stared at a blank screen for minutes.
          </Paragraph>
          <Paragraph>
            Netscape introduced <strong>on-the-fly page loading</strong>.
            Instead of waiting for everything to load at once, Navigator
            displayed text almost immediately while images continued to load in
            the background. This made browsing much faster and more seamless.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>Innovating the Web</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1995}>
                <strong>Netscape 2.0</strong> released, introducing{" "}
                <strong>frames</strong>, <strong>JavaScript</strong>, and{" "}
                <strong>Java</strong> support.
              </TimelineItem>
              <TimelineItem year={1996}>
                <strong>Netscape 3.0</strong> released, adding{" "}
                <strong>LiveAudio</strong>, <strong>LiveVideo</strong>,{" "}
                <strong>QuickTime</strong>, and <strong>HTML 3.2</strong>{" "}
                support.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
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
        </SubSectionContent>
      </SubSection>
    </Section>
  );
}
