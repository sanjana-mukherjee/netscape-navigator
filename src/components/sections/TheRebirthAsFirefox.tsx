import SubSection, {
  SubSectionContent,
  SubSectionHeader,
  SubSectionHeading,
  SubSectionTimelineContainer,
} from "../SubSection";
import Paragraph from "../Paragraph";
import Section from "../Section";
import { Timeline, TimelineItem } from "../Timeline";

export default function TheRebirthAsFirefox() {
  return (
    <Section heading="The Rebirth as Firefox">
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>Mozilla Rises from Netscape</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={2002}>
                Mozilla debuts <strong>Mozilla 1.0</strong>, a cross-platform
                browser.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            With Netscape’s code now under the <strong>Mozilla project</strong>,
            the goal was to create an open-source platform that companies,
            including Netscape, could build upon. By{" "}
            <strong>June 5, 2002</strong>, Mozilla released{" "}
            <strong>version 1.0</strong>, a cross-platform browser for{" "}
            <strong>Linux, Mac OS, Windows, and Solaris</strong>.
          </Paragraph>
          <Paragraph>
            Praised for its privacy features, improved interface, and strong web
            standards support , it became the{" "}
            <strong>de facto reference implementation</strong> for web
            technologies. Despite recognition among developers and power users,
            its <strong>Internet suite model</strong>—bundling email, chat, and
            browsing—failed to attract mainstream users.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>A Fresh Start with Firefox</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={2004}>
                Mozilla launches <strong>Firefox 1.0</strong> as a standalone
                browser.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            Realizing the need for a{" "}
            <strong>lightweight, fast, and standalone browser</strong>, Mozilla
            shifted its focus. Instead of maintaining a large software suite,
            the project began working on a dedicated web browser that
            prioritized speed and usability.
          </Paragraph>
          <Paragraph>
            The browser was first named <strong>Phoenix</strong>, symbolizing
            its <strong>rebirth</strong>, much like the mythical bird rising
            from the ashes—representing <strong>Netscape’s revival</strong>{" "}
            after being overshadowed by <strong>Internet Explorer</strong>.
          </Paragraph>
          <Paragraph>
            Due to trademark conflicts, the browser was later renamed{" "}
            <strong>Firebird</strong>. However, another naming dispute with a
            database project led to its final rebranding as{" "}
            <strong>Firefox</strong> in <strong>2004</strong>. The name was
            inspired by the <strong>red panda</strong>, which became its mascot.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>
            Firefox Releases and Market Position
          </SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={2009}>
                <strong>Firefox 3.5</strong> surpasses{" "}
                <strong>Internet Explorer 7</strong> in market share.
              </TimelineItem>
              <TimelineItem year={2025}>
                Firefox holds <strong>6.36% share</strong>, ranking fourth
                globally.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            Mozilla released <strong>Firefox 1.0</strong> on{" "}
            <strong>November 9, 2004</strong>, marking the shift to a
            standalone, performance-focused browser. <strong>Firefox 2</strong>,
            launched in <strong>October 2006</strong>, introduced features like
            restoring recently closed tabs, phishing protection, and
            spell-checking.
          </Paragraph>
          <Paragraph>
            <strong>Firefox 3</strong>, released in <strong>June 2008</strong>,
            and <strong>Firefox 3.5</strong>, in <strong>June 2009</strong>,
            introduced further improvements in speed and web compatibility. By{" "}
            <strong>November 2009</strong>, Firefox 3.5 overtook{" "}
            <strong>Internet Explorer 7</strong> in market share, though not all
            versions of Internet Explorer as a whole.
          </Paragraph>
          <Paragraph>
            Firefox held its position as the{" "}
            <strong>second-most used web browser</strong> until{" "}
            <strong>November 2011</strong>, when <strong>Google Chrome</strong>{" "}
            surpassed it. As of <strong>February 2025</strong>, Firefox holds a{" "}
            <strong>6.36% market share</strong>, making it the{" "}
            <strong>fourth-most popular</strong> desktop browser after{" "}
            <strong>Chrome, Edge, and Safari</strong>.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
    </Section>
  );
}
