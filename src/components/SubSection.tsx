export default function SubSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-20 justify-between items-start">
      <h3 className="max-w-md text-5xl font-normal col-span-2 font-melodrama sticky top-4">
        {heading}
      </h3>
      <div className="text-justify max-w-prose space-y-5 font-satoshi text-xl col-start-2 font-light">
        {children}
      </div>
    </div>
  );
}
