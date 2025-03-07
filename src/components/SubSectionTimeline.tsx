import {
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
} from "lucide-react";
import { JSX } from "react";

export type SubSectionTimelineProps = {
  timeline: Array<{
    year: number;
    description: JSX.Element;
  }>;
};

const ClockIcons = [
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
];

export default function SubSectionTimeline({
  timeline,
}: SubSectionTimelineProps) {
  return (
    <dl className="border-l border-l-black/20 py-7 space-y-7">
      {timeline.map(({ year, description }, index) => {
        const Clock = ClockIcons[index % ClockIcons.length];

        return (
          <div className="-ml-[0.5px]">
            <div className="flex items-center gap-3">
              <div className="bg-white -translate-x-1/2 py-1" aria-hidden>
                <Clock size={24} strokeWidth={0.5} absoluteStrokeWidth={true} />
              </div>
              <dd key={year} className="text-2xl font-melodrama font-normal">
                {year}
              </dd>
            </div>
            <dt
              key={year}
              className="text-sm font-extralight col-start-2 ml-9 "
            >
              {description}
            </dt>
          </div>
        );
      })}
    </dl>
  );
}
