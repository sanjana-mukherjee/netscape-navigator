import { LucideProps } from "lucide-react";

export default function Section({
  heading,
  Icon,
  children,
}: {
  heading: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-end space-x-4 justify-between">
        <h2 className="text-9xl uppercase font-semibold font-melodrama max-w-2xl">
          {heading}
        </h2>
        <div className="shrink-0" aria-hidden="true">
          <Icon
            absoluteStrokeWidth={true}
            strokeWidth={1}
            size={240}
            color="#dbdbdb"
          />
        </div>
      </div>
      <div className="mt-30 pb-18 space-y-36 relative before:absolute before:inset-y-0 before:left-4 before:right-0 before:-z-10 before:border-l before:border-l-black/20">
        {children}
      </div>
    </section>
  );
}
