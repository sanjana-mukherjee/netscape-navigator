import SubSection, {
  SubSectionContent,
  SubSectionHeader,
  SubSectionHeading,
  SubSectionTimelineContainer,
} from "../SubSection";
import Paragraph from "../Paragraph";
import Section from "../Section";
import { Timeline, TimelineItem } from "../Timeline";

export default function TheLegacyOfNetscape() {
  return (
    <Section heading="The Legacy of Netscape">
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>Remembering You Online</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1994}>
                HTTP cookies invented by Lou Montulli.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            A founding engineer of <strong>Netscape</strong>,{" "}
            <strong>Lou Montulli</strong>, created <strong>HTTP cookies</strong>{" "}
            to enable websites to{" "}
            <strong>store user data across sessions</strong>. This innovation
            became essential for user authentication, shopping carts, and
            personalized web experiences, and is still a fundamental part of web
            browsing today.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>The Web Gets Dynamic</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1995}>
                JavaScript created by Brendan Eich at Netscape.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            An early Netscape employee, <strong>Brendan Eich</strong>, created
            the <strong>JavaScript programming language</strong>, which became
            the most widely used language for <strong>client-side</strong>{" "}
            scripting of web pages. Initially developed in just ten days,
            JavaScript was introduced in Netscape Navigator 2.0 and later became
            a standard, shaping the modern web.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>Dividing Pages with Framesets</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1996}>
                Netscape popularized framesets for web layouts.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            <strong>Netscape</strong> popularized the use of{" "}
            <strong>framesets</strong> in web design, allowing developers to
            divide a webpage into <strong>multiple scrollable sections</strong>.
            While framesets have largely been replaced by modern CSS-based
            layouts, they were a defining feature of early web development.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>Pushing Web Standards Forward</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={2004}>
                WHATWG formed by Mozilla and Opera.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            The{" "}
            <strong>
              Web Hypertext Application Technology Working Group (WHATWG)
            </strong>{" "}
            is a <strong>community</strong> dedicated to evolving HTML and
            related technologies. Formed in <strong>April 2004</strong> through
            a collaboration between the <strong>Mozilla Foundation</strong> and{" "}
            <strong>Opera Software</strong>, it aimed to develop open-technology
            standards that improved functionality while maintaining backward
            compatibility.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>Where the Web Learns</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={2005}>
                Mozilla launched MDN Web Docs.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            MDN Web Docs, formerly known as{" "}
            <strong>Mozilla Developer Network</strong> and{" "}
            <strong>Mozilla Developer Center</strong>, is a comprehensive{" "}
            <strong>documentation repository</strong> and{" "}
            <strong>learning platform</strong> for web developers. Established
            by <strong>Mozilla</strong> in <strong>2005</strong>, it provides
            resources on open web standards, including HTML, CSS, JavaScript,
            and SVG.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>The New Language from Mozilla</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={2006}>
                Graydon Hoare began Rust development at Mozilla.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            Rust is a versatile <strong>programming language</strong> designed
            for high performance, type safety, and concurrency.{" "}
            <strong>Graydon Hoare</strong> began developing it as a personal
            project at <strong>Mozilla Research</strong> in{" "}
            <strong>2006</strong>, and Mozilla officially backed it in 2009.
            Since its stable release in 2015, Rust has been widely adopted by
            major tech companies.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
    </Section>
  );
}
