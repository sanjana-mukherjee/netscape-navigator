import BirthOfNetscape from "./sections/BirthOfNetscape";
import TheBrowserWarsBegin from "./sections/TheBrowserWarsBegin";
import TheFallOfNetscape from "./sections/TheFallOfNetscape";
import TheRiseOfNetscape from "./sections/TheRiseOfNetscape";

export default function Content() {
  return (
    <div className="space-y-60">
      <BirthOfNetscape />
      <TheRiseOfNetscape />
      <TheBrowserWarsBegin />
      <TheFallOfNetscape />
    </div>
  );
}
