export default function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className="w-full mt-10 grayscale border-2 border-black"
      />
    </div>
  );
}
