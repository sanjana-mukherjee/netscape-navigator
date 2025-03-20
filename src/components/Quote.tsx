export default function Quote({
  author,
  children,
}: {
  author: string;
  children: React.ReactNode;
}) {
  return (
    <div className="size-28 bg-gray-50 flex items-center justify-between font-melodrama text-xl font-medium text-center leading-5 ml-auto p-2 relative">
      <p className="overflow-hidden text-ellipsis">{author}</p>
      <div
        className="font-melodrama text-7xl text-gray-300 absolute top-0 left-0 content-[open-quote]"
        aria-hidden
      >
        &#8220;
      </div>
    </div>
  );

  return (
    <q className="block before:hidden after:hidden relative pt-3 pl-8">
      <div className="text-justify font-light italic text-lg">{children}</div>
      <div
        className="font-melodrama text-8xl before:absolute before:top-0 before:left-0 before:content-[open-quote]"
        aria-hidden
      ></div>
      <cite className="not-italic font-melodrama mt-2 text-xl block text-right font-medium">
        <span className="mr-2">~</span>
        {author}
      </cite>
    </q>
  );
}
