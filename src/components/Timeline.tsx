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

export function Timeline({ children }: { children: React.ReactNode }) {
  return <dl className="py-7 space-y-7">{children}</dl>;
}

export function TimelineItem({
  year,
  children,
}: {
  year: number;
  children: React.ReactNode;
}) {
  const Clock = ClockIcons[year % ClockIcons.length];

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
      <dt key={year} className="text-sm font-extralight col-start-2 ml-9 ">
        {children}
      </dt>
    </div>
  );
}
