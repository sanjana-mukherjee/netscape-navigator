import SubSection, {
  SubSectionContent,
  SubSectionHeader,
  SubSectionHeading,
  SubSectionTimelineContainer,
} from "../SubSection";
import Paragraph from "../Paragraph";
import Section from "../Section";
import { List, ListItem } from "../List";
import { Timeline, TimelineItem } from "../Timeline";
import Image from "../Image";

export default function TheFallOfNetscape() {
  return (
    <Section heading="The Fall of Netscape">
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>
            Netscape Communicator: A Risky Rebrand
          </SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1996}>
                <strong>Netscape 3.0</strong> launches with{" "}
                <strong>Standard</strong> and <strong>Gold</strong> editions.
              </TimelineItem>
              <TimelineItem year={1997}>
                <strong>Netscape 4.0</strong> renames{" "}
                <strong>Gold Edition</strong> to <strong>Communicator</strong>.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            Netscape Navigator 3.0 had established itself in the market, but the
            company wanted to expand its browser’s capabilities. It introduced
            two versions: <strong>Standard Edition</strong> and{" "}
            <strong>Gold Edition</strong>. The Gold Edition included email, a
            newsreader, and a WYSIWYG web page editor. However, these extra
            features made the browser{" "}
            <strong>slower and prone to crashes</strong>.
          </Paragraph>
          <Paragraph>
            Starting with version 4.0 in 1997, Netscape's Gold Edition was
            renamed <strong>Netscape Communicator</strong>, combining all its
            additional tools into a single package. However, the rebranding{" "}
            <strong>confused users</strong>, and the software became
            increasingly bloated.{" "}
          </Paragraph>
          <Paragraph>
            As web demands grew,{" "}
            <strong>Microsoft Internet Explorer 5.0</strong> emerged as the{" "}
            <strong>faster, more stable, and more compatible</strong> option.
            Netscape, once the leader, was now <strong>falling behind</strong>.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>A Struggling Browser</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1997}>
                <strong>Netscape Communicator</strong> struggles to keep up as
                web pages grow more complex.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            By the late 1990s, web pages had evolved. They were filled with{" "}
            <strong>images, JavaScript, and complex layouts</strong> using HTML
            tables. Internet Explorer handled these changes smoothly, but
            Netscape Communicator <strong>struggled to keep up</strong>. It
            became <strong>buggy and crash-prone</strong>.
          </Paragraph>
          <List>
            <ListItem>
              Resizing the browser window often forced the entire page to{" "}
              <strong>reload</strong>.
            </ListItem>
            <ListItem>
              It had{" "}
              <strong>poor support for Cascading Style Sheets (CSS)</strong>, a
              key web technology. Instead, Netscape had invested in{" "}
              <strong>JavaScript Style Sheets (JSSS)</strong>, which never
              gained popularity.
            </ListItem>
            <ListItem>
              Disabling JavaScript also <strong>disabled CSS</strong>, further
              complicating the experience.
            </ListItem>
            <ListItem>
              The interface felt <strong>outdated</strong> compared to modern
              software trends.
            </ListItem>
          </List>
          <Paragraph>
            With each update, Internet Explorer{" "}
            <strong>gained market share</strong>, while Netscape{" "}
            <strong>fell further behind</strong>.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>Going Open Source</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1998}>
                Netscape open-sources its browser and shifts to the{" "}
                <strong>Gecko</strong> engine.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            By <strong>March 1998</strong>, Netscape recognized it couldn't
            compete alone. It{" "}
            <strong>
              released most of its browser’s codebase as open source
            </strong>
            , inviting developers worldwide to contribute. This initiative
            became the <strong>Mozilla project</strong>, named after the
            original Netscape Navigator codename.
          </Paragraph>
          <Paragraph>
            However, modernizing the existing codebase proved difficult. The
            Mozilla team soon realized that instead of fixing Netscape’s aging
            architecture, they needed to <strong>start fresh</strong>. They
            decided to build a new browser around <strong>Gecko</strong>, a
            powerful layout engine Netscape had been developing but had yet to
            integrate.
          </Paragraph>
          <Paragraph>
            Initially called <strong>Raptor</strong>, the layout engine was
            renamed <strong>NGLayout</strong> due to trademark issues. Netscape
            later rebranded it as <strong>Gecko</strong>, and over time, the
            name stuck.
          </Paragraph>
          <Image
            src="./assets/Mozilla_boxing.png"
            alt="The lizard-like mascot of Netscape named Mozilla"
          />
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>The AOL Takeover</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1999}>
                <strong>AOL</strong> acquires <strong>Netscape</strong>.
              </TimelineItem>
              <TimelineItem year={2000}>
                <strong>Netscape 6</strong> launches but suffers from{" "}
                <strong>stability and performance issues</strong>.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            As Netscape struggled,{" "}
            <strong>America Online (AOL) acquired the company</strong> in 1999.
            At the time, Netscape was working on <strong>version 5.0</strong>,
            but the project was <strong>ultimately abandoned</strong> in favor
            of building a new browser from the ground up.
          </Paragraph>
          <Paragraph>
            Netscape developers adapted an{" "}
            <strong>early version of Mozilla</strong>, introduced a redesigned
            interface, and released it as <strong>Netscape 6</strong> in
            November 2000. However, the release was met with disappointment, as
            users encountered <strong>stability and performance issues</strong>,
            making it difficult to compete with Internet Explorer.
          </Paragraph>
          <Image
            src="./assets/America_Online_logo.png"
            alt="AOL logo used from 1991 to 2005"
          />
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>The End of Netscape</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={2008}>
                <strong>Netscape</strong> support <strong>ends</strong>.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            Despite releasing <strong>Netscape 7</strong> in 2002, the browser
            failed to gain traction as Mozilla itself became a strong
            competitor. Netscape later launched{" "}
            <strong>Netscape Browser 8</strong> in 2005, built on Mozilla
            Firefox, but it struggled to attract users. By 2007, Netscape's
            market share had dwindled to near insignificance.
          </Paragraph>
          <Paragraph>
            In a final attempt, <strong>Netscape Navigator 9</strong> was
            released in October 2007, based on Firefox 2.0. But the effort was
            short-lived. On <strong>December 28, 2007</strong>, AOL announced it
            would discontinue Netscape's browser due to low market share.
            Support officially ended on <strong>March 1, 2008</strong>, closing
            the chapter on a once-revolutionary browser.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
    </Section>
  );
}
