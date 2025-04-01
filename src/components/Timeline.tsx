import {
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock7,
  Clock8,
  Clock9,
} from "lucide-react";

const ClockIcons = [Clock2, Clock3, Clock4, Clock5, Clock7, Clock8, Clock9];

export function Timeline({ children }: { children: React.ReactNode }) {
  return <dl className="space-y-2 lg:space-y-7">{children}</dl>;
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
    <>
      <div className="-ml-[0.5px] hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="bg-white -translate-x-1/2 py-1" aria-hidden>
            <Clock size={24} strokeWidth={0.5} absoluteStrokeWidth={true} />
          </div>
          <dd className="text-2xl font-melodrama font-normal">{year}</dd>
        </div>
        <dt className="text-sm font-extralight col-start-2 ml-9">{children}</dt>
      </div>
      <div className="lg:hidden text-sm flex items-start gap-3 leading-tight lg:leading-normal">
        <dd className="font-normal relative before:absolute before:top-1/2 before:left-0 before:w-8 before:-translate-x-10 before:-translate-y-1/2 before:border-t before:border-t-gray-300 after:absolute after:top-1/2 after:left-0 after:size-2 after:-translate-x-11 after:-translate-y-1/2 after:bg-gray-100 after:rounded-full after:border after:border-gray-300">
          {year}
        </dd>
        <dt className="font-extralight">{children}</dt>
      </div>
    </>
  );
}
