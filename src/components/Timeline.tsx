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
  return (
    <>
      <div className="hidden pl-12 lg:block">
        <dd className="font-melodrama text-gradient relative text-2xl font-semibold tracking-wide before:absolute before:top-1/2 before:-left-11.5 before:w-9 before:border-t before:border-gray-400 after:absolute after:top-1/2 after:-left-13.5 after:mt-[0.5px] after:ml-[1.5px] after:size-3 after:-translate-y-1/2 after:rounded-full after:border after:border-gray-400 after:bg-sky-50">
          {year}
        </dd>
        <dt className="col-start-2 text-sm">{children}</dt>
      </div>
      <div className="flex items-start gap-3 text-sm leading-tight lg:hidden lg:leading-normal">
        <dd className="relative font-normal before:absolute before:top-1/2 before:left-0 before:w-8 before:-translate-x-10 before:-translate-y-1/2 before:border-t before:border-t-gray-300 after:absolute after:top-1/2 after:left-0 after:size-2 after:-translate-x-11 after:-translate-y-1/2 after:rounded-full after:border after:border-gray-300 after:bg-sky-50">
          {year}
        </dd>
        <dt>{children}</dt>
      </div>
    </>
  );
}
