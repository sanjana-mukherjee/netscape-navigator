export default function BirthOfNetscape() {
  return (
    <section>
      <h2 className="sm:text-7xl text-5xl font-bold md:text-9xl uppercase md:font-semibold font-melodrama">
        The Birth of Netscape
      </h2>
      <div className="mt-28 flex flex-col gap-20">
        <div className="flex gap-20 justify-between">
          <h3 className="text-5xl font-normal mb-8 col-span-2 font-melodrama">
            The Early Days of the Web
          </h3>
          <div className="text-justify max-w-prose flex flex-col gap-5 font-satoshi text-xl col-start-2 font-light">
            <p>
              In 1989, Tim Berners-Lee and his colleagues at CERN created the{" "}
              <strong>World Wide Web</strong>. They developed{" "}
              <strong>HTTP</strong>, a set of rules that allowed computers to
              communicate and share information over the internet.
            </p>
            <p>
              In 1990, Berners-Lee built the <strong>first web browser</strong>,
              called <strong>WorldWideWeb</strong>. To avoid confusion between
              the program and the broader web, it was later renamed{" "}
              <strong>Nexus</strong>. However, this browser only worked on{" "}
              <strong>NeXT computers</strong>, high-end workstations developed
              by <strong>NeXT Inc.</strong>, a company founded by{" "}
              <strong>Steve Jobs</strong> in 1985.
            </p>
          </div>
        </div>
        <div className="flex gap-20 justify-between">
          <h3 className="text-5xl font-normal mb-8 col-span-2 font-melodrama">
            The Rise of Mosaic
          </h3>
          <div className="text-justify max-w-prose flex flex-col gap-5 font-satoshi text-xl col-start-2 font-light">
            <p>
              By 1993, more browsers started appearing, including{" "}
              <strong>Lynx, Cello,</strong> and <strong>tkWWW</strong>. But one
              browser stood out—<strong>Mosaic</strong>.
            </p>
            <p>
              Developed at the{" "}
              <strong>
                National Center for Supercomputing Applications (NCSA),
              </strong>{" "}
              Mosaic was easy to use and worked on multiple platforms. It made
              the internet more accessible, and by 1994, it was on its way to{" "}
              <strong>becoming the standard way to browse the internet</strong>,
              as noted by <strong>Wired magazine</strong>.
            </p>
          </div>
        </div>
        <div className="flex gap-20 justify-between">
          <h3 className="text-5xl font-normal mb-8 col-span-2 font-melodrama">
            Marc Andreessen and Jim Clark
          </h3>
          <div className="text-justify max-w-prose flex flex-col gap-5 font-satoshi text-xl col-start-2 font-light">
            <p>
              One of Mosaic’s co-writers, <strong>Marc Andreessen</strong>, was
              a part-time employee at <strong>NCSA</strong>. After graduating in
              1993, he moved to <strong>California</strong>, where he met{" "}
              <strong>Jim Clark</strong>, the founder of{" "}
              <strong>Silicon Graphics</strong>.
            </p>
            <p>
              Clark saw the <strong>commercial potential</strong> of the Mosaic
              browser and provided the initial funding to start a new company.
              Together, they{" "}
              <strong>co-founded Mosaic Communications Corporation</strong>,
              with <strong>Andreessen as a vice president</strong>. Their first
              product was a new web browser called{" "}
              <strong>Mosaic Netscape</strong>.
            </p>
          </div>
        </div>
        <div className="flex gap-20 justify-between">
          <h3 className="text-5xl font-normal mb-8 col-span-2 font-melodrama">
            A New Name, A New Era
          </h3>
          <div className="text-justify max-w-prose flex flex-col gap-5 font-satoshi text-xl col-start-2 font-light">
            <p>
              The <strong>University of Illinois</strong>, which oversaw the{" "}
              <strong>National Center for Supercomputing Applications</strong>,
              was unhappy with the company’s use of the <strong>Mosaic</strong>{" "}
              name. As a result, the company rebranded itself as{" "}
              <strong>Netscape Communications</strong> and renamed its flagship
              web browser <strong>Netscape Navigator</strong>.
            </p>
            <p>
              Navigator was{" "}
              <strong>faster, more reliable, and easier to use</strong> than
              Mosaic. It quickly became the <strong>leading web browser</strong>
              , setting the stage for the internet boom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
