export default function SubSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex gap-20 justify-between">{children}</div>;
}

export function SubSectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-md">
      <div className="sticky top-0">{children}</div>
    </div>
  );
}

export function SubSectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="bg-white z-10 text-5xl font-normal col-span-2 font-melodrama sticky top-0 -my-4 py-4">
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
    <div className="mt-10 ml-4">
      <div>{children}</div>
    </div>
  );
}

export function SubSectionContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-justify max-w-prose space-y-5 font-satoshi text-xl col-start-2 font-light">
      {children}
    </div>
  );
}
