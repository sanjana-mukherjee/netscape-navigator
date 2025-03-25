import SubSection, {
  SubSectionContent,
  SubSectionHeader,
  SubSectionHeading,
} from "../SubSection";
import Paragraph from "../Paragraph";
import Section from "../Section";

export default function TheLegacyOfNetscape() {
  return (
    <Section heading="The Legacy of Netscape">
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>JavaScript</SubSectionHeading>
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
          <SubSectionHeading>HTTP Cookies</SubSectionHeading>
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
          <SubSectionHeading>Frameset and Early Web Layouts</SubSectionHeading>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            <strong>Netscape</strong> popularized the use of{" "}
            <strong>framesets</strong>
            in web design, allowing developers to divide a webpage into
            <strong>multiple scrollable sections</strong>. While framesets have
            largely been replaced by modern CSS-based layouts, they were a
            defining feature of early web development.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>Rust</SubSectionHeading>
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
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>MDN Web Docs</SubSectionHeading>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            MDN Web Docs, formerly known as{" "}
            <strong>Mozilla Developer Network</strong> and
            <strong>Mozilla Developer Center</strong>, is a comprehensive{" "}
            <strong>documentation repository</strong>
            and <strong>learning platform</strong> for web developers.
            Established by <strong>Mozilla</strong> in
            <strong>2005</strong>, it provides resources on open web standards,
            including HTML, CSS, JavaScript, and SVG.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
      <SubSection>
        <SubSectionHeader>
          <SubSectionHeading>WHATWG and Web Standards</SubSectionHeading>
        </SubSectionHeader>
        <SubSectionContent>
          <Paragraph>
            The{" "}
            <strong>
              Web Hypertext Application Technology Working Group (WHATWG)
            </strong>{" "}
            is a<strong>community</strong> dedicated to evolving HTML and
            related technologies. Formed in
            <strong>April 2004</strong> through a collaboration between the{" "}
            <strong>Mozilla Foundation</strong>
            and <strong>Opera Software</strong>, it aimed to develop
            open-technology standards that improved functionality while
            maintaining backward compatibility.
          </Paragraph>
        </SubSectionContent>
      </SubSection>
    </Section>
  );
}
