export default function Quote({
  author,
  children,
}: {
  author: string;
  children: React.ReactNode;
}) {
  return (
    <q className="block before:hidden after:hidden relative pt-3 pl-8">
      <div className="text-justify font-light italic text-lg">{children}</div>
      <div className="font-melodrama text-8xl before:absolute before:top-0 before:left-0 before:content-[open-quote]"></div>
      <cite className="not-italic font-melodrama mt-2 text-xl block text-right font-medium">
        <span className="mr-2">~</span>
        {author}
      </cite>
    </q>
  );
}
