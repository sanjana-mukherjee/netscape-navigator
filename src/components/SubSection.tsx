import SubSectionTimeline, {
  SubSectionTimelineProps,
} from "./SubSectionTimeline";

export default function SubSection({
  heading,
  timeline,
  children,
}: {
  heading: string;
  timeline?: SubSectionTimelineProps["timeline"];
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-20 justify-between items-start">
      <div
        className="max-w-md sticky top-(--sticky-top-gap)"
        style={{ "--sticky-top-gap": "1rem" } as React.CSSProperties}
      >
        <h3 className="bg-white z-10 text-5xl font-normal col-span-2 font-melodrama sticky top-0 -mt-(--sticky-top-gap) pt-(--sticky-top-gap)">
          {heading}
        </h3>
        {timeline ? (
          <div className="mt-8 ml-4">
            <SubSectionTimeline timeline={timeline} />
          </div>
        ) : (
          "ADD A TIMELINE"
        )}
      </div>
      <div className="text-justify max-w-prose space-y-5 font-satoshi text-xl col-start-2 font-light">
        {children}
      </div>
    </div>
  );
}
