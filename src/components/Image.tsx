export default function Image({
  src,
  alt,
  width,
}: {
  src: string;
  alt: string;
  width?: number;
}) {
  return (
    <div className="relative">
      <div className="z-10 absolute bg-white text-xs bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-2">
        {alt}
      </div>
      <img
        src={src}
        alt={alt}
        width={width}
        className={`${
          width ? "mx-auto px-16 p-2 mt-7" : "w-full mt-10 grayscale p-2"
        } pb-3 border border-black/20 rounded-sm`}
      />
    </div>
  );
}
