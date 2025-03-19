import SubSection, {
  SubSectionContent,
  SubSectionHeader,
  SubSectionHeading,
  SubSectionTimelineContainer,
} from "../SubSection";
import Paragraph from "../Paragraph";
import Section from "../Section";
import Quote from "../Quote";
import Image from "../Image";
import { Timeline, TimelineItem } from "../Timeline";

export default function BirthOfNetscape() {
  return (
    <Section heading="The Birth of Netscape">
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>The Early Days of the Web</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1989}>
                Tim Berners-Lee creates the <strong>World Wide Web</strong>.
              </TimelineItem>
              <TimelineItem year={1990}>
                Develops the first web browser, <strong>Nexus</strong>{" "}
                (originally <strong>WorldWideWeb</strong>
                ).
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            In 1989, Tim Berners-Lee and his colleagues at CERN created the{" "}
            <strong>World Wide Web</strong>. They developed{" "}
            <strong>HTTP</strong>, a set of rules that allowed computers to
            communicate and share information over the internet.
          </Paragraph>
          <Paragraph>
            In 1990, Berners-Lee built the <strong>first web browser</strong>,
            called <strong>WorldWideWeb</strong>. To avoid confusion between the
            program and the broader web, it was later renamed{" "}
            <strong>Nexus</strong>. However, this browser only worked on{" "}
            <strong>NeXT computers</strong>, high-end workstations developed by{" "}
            <strong>NeXT Inc.</strong>, a company founded by{" "}
            <strong>Steve Jobs</strong> in 1985.
          </Paragraph>
          <Image
            src="./assets/Nexus.png"
            alt="Screen shot of the Nexus browser"
          />
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>The Rise of Mosaic</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1993}>
                Browsers like <strong>Lynx</strong>, <strong>Cello</strong>,{" "}
                <strong>tkWWW</strong> and <strong>Mosaic</strong> emerge.
              </TimelineItem>
              <TimelineItem year={1994}>
                <strong>Mosaic</strong> becomes the leading internet browser.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            By 1993, more browsers started appearing, including{" "}
            <strong>Lynx, Cello,</strong> and <strong>tkWWW</strong>. But one
            browser stood out—<strong>Mosaic</strong>.
          </Paragraph>
          <Paragraph>
            Developed at the{" "}
            <strong>
              National Center for Supercomputing Applications (NCSA),
            </strong>{" "}
            Mosaic was easy to use and worked on multiple platforms. It made the
            internet more accessible, and by 1994, it was on its way to{" "}
            <strong>becoming the standard way to browse the internet</strong>,
            as noted by <strong>Wired magazine</strong>.
          </Paragraph>
          <Quote author="Wired Magazine">
            Mosaic is not the most direct way to find online information. Nor is
            it the most powerful. It is merely the most pleasurable way, and in
            the 18 months since it was released, Mosaic has incited a rush of
            excitement and commercial energy unprecedented in the history of the
            Net.
          </Quote>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>Marc Andreessen and Jim Clark</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1993}>
                <strong>Marc Andreessen</strong> meets{" "}
                <strong>Jim Clark</strong> in California.
              </TimelineItem>
              <TimelineItem year={1994}>
                They co-found <strong>Mosaic Communications</strong> and launch{" "}
                <strong>Mosaic Netscape</strong>.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            One of Mosaic’s co-writers, <strong>Marc Andreessen</strong>, was a
            part-time employee at <strong>NCSA</strong>. After graduating in
            1993, he moved to <strong>California</strong>, where he met{" "}
            <strong>Jim Clark</strong>, the founder of{" "}
            <strong>Silicon Graphics</strong>.
          </Paragraph>
          <Paragraph>
            Clark saw the <strong>commercial potential</strong> of the Mosaic
            browser and provided the initial funding to start a new company.
            Together, they{" "}
            <strong>co-founded Mosaic Communications Corporation</strong>, with{" "}
            <strong>Andreessen as a vice president</strong>. Their first product
            was a new web browser called <strong>Mosaic Netscape</strong>.
          </Paragraph>
          <Image
                src="./assets/Mozilla_boxing.png"
                alt="Mozilla, the lizard-like mascot of Netscape"
          />
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>A New Name, A New Era</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1994}>
                <p>
                  Mosaic Communications becomes{" "}
                  <strong>Netscape Communications</strong>, and Mosaic Netscape
                  is renamed <strong>Netscape Navigator</strong>.
                </p>
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            The <strong>University of Illinois</strong>, which oversaw the{" "}
            <strong>National Center for Supercomputing Applications</strong>,
            was unhappy with the company’s use of the <strong>Mosaic</strong>{" "}
            name. As a result, the company rebranded itself as{" "}
            <strong>Netscape Communications</strong> and renamed its flagship
            web browser <strong>Netscape Navigator</strong>.
          </Paragraph>
          <Paragraph>
            Navigator was{" "}
            <strong>faster, more reliable, and easier to use</strong> than
            Mosaic. It quickly became the <strong>leading web browser</strong>,
            setting the stage for the internet boom.
          </Paragraph>
          <Image
            src="./assets/Netscape_logo.png"
            alt="Netscape Logo"
            width={280}
            colored={true}
          />
        </SubSectionContent>
      </SubSection>
    </Section>
  );
}
