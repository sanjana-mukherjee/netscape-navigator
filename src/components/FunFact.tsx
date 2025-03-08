export default function FunFact({
  heading,
  Image,
  children,
}: {
  heading: string;
  Image: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid grid-cols-[1fr_auto] gap-20 border border-black/20 p-5 rounded-sm mt-10">
      <div className="text-sm space-y-3 pt-3">
        <p className="absolute top-0 left-3 -translate-y-1/2 bg-white px-2 font-melodrama text-xl">
          {heading}
        </p>
        {children}
      </div>
      {Image}
    </div>
  );
}
