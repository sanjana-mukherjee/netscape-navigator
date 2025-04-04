export default function SubSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid justify-between gap-5 lg:gap-20 lg:grid-cols-[minmax(var(--container-2xs),var(--container-sm))_minmax(50%,80ch)]">
      {children}
    </div>
  );
}

export function SubSectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="sticky top-0">{children}</div>
    </div>
  );
}

export function SubSectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-pretty bg-white z-10 text-3xl sm:text-4xl md:text-5xl font-normal font-melodrama sticky top-0 -mx-2 px-2 -my-4 py-4">
      {children}
    </h3>
  );
}

export function SubSectionTimelineContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 lg:mt-10 pl-10 py-4 lg:p-0 lg:ml-4">
      <div>{children}</div>
    </div>
  );
}

export function SubSectionContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-justify space-y-3 lg:space-y-5 font-satoshi text-base sm:text-lg lg:text-xl font-light ml-2 sm:ml-5 lg:ml-0 bg-white">
      {children}
    </div>
  );
}
