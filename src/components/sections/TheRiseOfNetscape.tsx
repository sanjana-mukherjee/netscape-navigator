export default function TheRiseOfNetscape() {
  return (
    <section>
      <h2 className="sm:text-7xl text-5xl font-bold md:text-9xl uppercase md:font-semibold font-melodrama">
        The Rise of Netscape
      </h2>
      <div className="mt-28 flex flex-col gap-20">
        <div className="flex gap-20 justify-between">
          <h3 className="text-5xl font-normal mb-8 col-span-2 font-melodrama">
            The Internet Revolution
          </h3>
          <div className="text-justify max-w-prose flex flex-col gap-5 font-satoshi text-xl col-start-2 font-light">
            <p>
              By the mid-1990s, the internet was going mainstream. More people
              were coming online, and they needed a browser that was easy to use
              and fast.
            </p>
            <p>
              Netscape Navigator had the right mix of features. It was free for
              individuals and quickly became the{" "}
              <strong>most popular browser</strong>, especially on{" "}
              <strong>Windows</strong> computers.
            </p>
          </div>
        </div>
        <div className="flex gap-20 justify-between">
          <h3 className="text-5xl font-normal mb-8 col-span-2 font-melodrama">
            A Faster Web Experience
          </h3>
          <div className="text-justify max-w-prose flex flex-col gap-5 font-satoshi text-xl col-start-2 font-light">
            <p>In 1994, Netscape changed how people browsed the web.</p>
            <p>
              Before, web browsers waited for{" "}
              <strong>all graphics to load</strong> before showing anything.
              This meant users often stared at a blank screen for minutes.
            </p>
            <p>
              Netscape introduced <strong>on-the-fly page loading</strong>.
              Instead of waiting for everything to load at once, Navigator
              displayed text almost immediately while images continued to load
              in the background. This made browsing much faster and more
              seamless.
            </p>
          </div>
        </div>
        <div className="flex gap-20 justify-between">
          <h3 className="text-5xl font-normal mb-8 col-span-2 font-melodrama">
            New Features, New Challenges
          </h3>
          <div className="text-justify max-w-prose flex flex-col gap-5 font-satoshi text-xl col-start-2 font-light">
            <p>
              Through the late 1990s, Netscape continued to lead in innovation.
              It introduced <strong>cookies</strong>, which allowed websites to
              remember user preferences, and <strong>JavaScript</strong>, which
              enabled interactive web pages.
            </p>
            <p>
              Although these features later became{" "}
              <strong>web standards</strong>, they were met with criticism. Some
              argued that Netscape prioritized shaping the web around its own
              technologies rather than adhering to established standards,
              sidelining competitors in the process. Others raised{" "}
              <strong>privacy concerns</strong> about cookies being used to
              track users.
            </p>
            <p>
              Despite these issues, Netscape remained the{" "}
              <strong>top web browser</strong> for a while—but competition was
              growing, and the <strong>browser wars</strong> were about to
              begin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
