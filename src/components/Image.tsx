export default function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-gray-50 size-28 hover:cursor-pointer ml-auto">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-left-top grayscale opacity-75"
      />
    </div>
  );
}
