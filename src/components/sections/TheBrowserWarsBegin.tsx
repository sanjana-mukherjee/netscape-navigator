import { Swords } from "lucide-react";
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

export default function TheBrowserWarsBegin() {
  return (
    <Section heading="The Browser Wars Begin" Icon={Swords}>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>Netscape's Dominance</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1995}>
                Netscape captures <strong>75% market share</strong> within{" "}
                <strong>four</strong> months.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            <strong>Netscape Navigator 1.0</strong> was the first commercial web
            browser to achieve mass adoption. Within{" "}
            <strong>four months</strong> of its release, it captured{" "}
            <strong>75% of the market</strong>, solidifying its dominance. It
            set the standard for browsing, with innovations that made the web
            more accessible.
          </Paragraph>
          <Paragraph>
            While individuals could use it for <strong>free</strong>, it was
            also available for academic and non-profit use at no cost. For
            commercial users, Netscape Communications priced it at{" "}
            <strong>$39</strong> per user, which included a 90-day warranty and
            customer support.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>Microsoft Enters the Game</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1995}>
                <strong>Internet Explorer 1.0</strong> launches with{" "}
                <strong>Windows 95 Plus</strong>.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            Seeing the web’s potential, <strong>Microsoft</strong> entered the
            browser market by <strong>licensing Mosaic’s source code</strong>{" "}
            from <strong>Spyglass, Inc.</strong>, the same foundation Netscape
            had built upon, to create its own browser.
          </Paragraph>
          <Paragraph>
            On <strong>August 24, 1995</strong>, Microsoft released{" "}
            <strong>Internet Explorer 1.0</strong> as part of{" "}
            <strong>Windows 95 Plus!</strong>. With{" "}
            <strong>Windows running on over 95% of desktop computers</strong>,
            bundling Internet Explorer with every copy ensured millions of users
            had instant access to Microsoft's browser.
          </Paragraph>
          <Image
            src="./assets/Internet_Explorer_1.png"
            alt="The White House website displayed in Internet Explorer 1.0"
          />
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>Battle for Browser Dominance</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={1996}>
                <strong>Netscape 3.0</strong> and{" "}
                <strong>Internet Explorer 3.0</strong> launch; Microsoft starts
                closing the gap.
              </TimelineItem>
              <TimelineItem year={1997}>
                <strong>Netscape 4.0</strong> and{" "}
                <strong>Internet Explorer 4.0</strong> release; Microsoft gains
                ground.
              </TimelineItem>
              <TimelineItem year={1999}>
                <strong>Internet Explorer 5.0</strong> surpasses Netscape in
                market share.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            The competition between <strong>Netscape and Microsoft</strong>{" "}
            sparked the infamous <strong>browser wars</strong>.
          </Paragraph>
          <Paragraph>
            At first, Netscape Navigator remained the superior product.
            Microsoft’s <strong>Internet Explorer 1.0 and 2.0</strong> were seen
            as <strong>inferior and clunky</strong>. But Microsoft didn’t back
            down.
          </Paragraph>
          <Paragraph>
            With the release of <strong>Internet Explorer 3.0 (1996)</strong>,
            Microsoft started closing the gap. By <strong>1997</strong>,{" "}
            <strong>Internet Explorer 4.0</strong> took an even bigger leap,
            improving speed and reliability. Then came{" "}
            <strong>Internet Explorer 5.0 (1999)</strong>—a stable, polished
            browser that finally{" "}
            <strong>surpassed Netscape in market share</strong>.
          </Paragraph>
          <Image
            src="./assets/Browser_Wars.png"
            alt="Market share for several browsers"
          />
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>A Shift in Market Power</SubSectionHeading>
          <SubSectionTimelineContainer>
            <Timeline>
              <TimelineItem year={2000}>
                <strong>Internet Explorer 5.0</strong> surpasses{" "}
                <strong>50% market share</strong>, becoming the leading browser.
              </TimelineItem>
            </Timeline>
          </SubSectionTimelineContainer>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            With <strong>Windows running on 95% of desktop computers</strong>,
            Microsoft had a major advantage—Internet Explorer came
            pre-installed, making it the default choice for millions of users,
            while Netscape had to be manually downloaded and installed.
          </Paragraph>
          <Paragraph>
            Unlike Netscape, which relied on businesses purchasing{" "}
            <strong>Navigator licenses</strong> for revenue, Microsoft could
            afford to offer Internet Explorer for free. With steady income from
            Windows sales, Microsoft had the financial flexibility to improve
            its browser without worrying about direct revenue. This pricing
            difference made it even harder for Netscape to compete in the long
            run.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
    </Section>
  );
}
