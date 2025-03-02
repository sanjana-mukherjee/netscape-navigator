import SubSection from "../SubSection";
import Paragraph from "../Paragraph";
import Section from "../Section";

export default function TheBrowserWarsBegin() {
  return (
    <Section heading="The Browser Wars Begin">
      <SubSection heading="Netscape's Dominance">
        <Paragraph>
          By <strong>mid-1995</strong>, the <strong>World Wide Web</strong> had
          become a cultural phenomenon. More people were coming online, and they
          needed a browser to navigate the growing digital landscape.
        </Paragraph>
        <Paragraph>
          <strong>Netscape Navigator</strong> was the browser of choice. Within{" "}
          <strong>four months</strong> of its release, it captured{" "}
          <strong>75% of the market</strong>. It was{" "}
          <strong>free for personal use</strong>, making it the go-to browser
          for individuals, while businesses paid <strong>$39 per user</strong>{" "}
          to integrate it into their systems.
        </Paragraph>
      </SubSection>
      <SubSection heading="Microsoft Enters the Game">
        <Paragraph>
          Seeing the web’s potential, <strong>Microsoft</strong> entered the
          browser market by <strong>licensing Mosaic’s source code</strong> from{" "}
          <strong>Spyglass, Inc.</strong>, the same foundation Netscape had
          built upon, to create its own browser.
        </Paragraph>
        <Paragraph>
          On <strong>August 24, 1995</strong>, Microsoft released{" "}
          <strong>Internet Explorer 1.0</strong> as part of{" "}
          <strong>Windows 95 Plus!</strong>. With{" "}
          <strong>Windows running on over 95% of desktop computers</strong>,
          bundling Internet Explorer with every copy ensured millions of users
          had instant access to Microsoft's browser.
        </Paragraph>
      </SubSection>
      <SubSection heading="Battle for Browser Dominance">
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
      </SubSection>
      <SubSection heading="A Shift in Market Power">
        <Paragraph>
          With <strong>Windows running on 95% of desktop computers</strong>,
          Microsoft had a major advantage—Internet Explorer came pre-installed,
          making it the default choice for millions of users, while Netscape had
          to be manually downloaded and installed.
        </Paragraph>
        <Paragraph>
          Unlike Netscape, which relied on businesses purchasing{" "}
          <strong>Navigator licenses</strong> for revenue, Microsoft could
          afford to offer Internet Explorer for free. With steady income from
          Windows sales, Microsoft had the financial flexibility to improve its
          browser without worrying about direct revenue. This pricing difference
          made it even harder for Netscape to compete in the long run.
        </Paragraph>
      </SubSection>
    </Section>
  );
}
