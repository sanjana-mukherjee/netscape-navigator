export default function SubSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid justify-between gap-5 lg:grid-cols-[minmax(var(--container-2xs),var(--container-sm))_minmax(50%,80ch)] lg:gap-20">
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
    <h3 className="font-melodrama sticky top-0 z-10 -mx-2 -my-4 bg-white px-2 py-4 text-3xl font-normal text-pretty sm:text-4xl md:text-5xl">
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
    <div className="mt-5 py-4 pl-10 lg:mt-10 lg:ml-4 lg:p-0">
      <div>{children}</div>
    </div>
  );
}

export function SubSectionContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-satoshi ml-2 space-y-3 bg-white text-justify text-base font-light sm:ml-5 sm:text-lg lg:ml-0 lg:space-y-5 lg:text-xl">
      {children}
    </div>
  );
}
