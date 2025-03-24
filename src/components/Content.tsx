import TheBirthOfNetscape from "./sections/TheBirthOfNetscape";
import TheBrowserWarsBegin from "./sections/TheBrowserWarsBegin";
import TheFallOfNetscape from "./sections/TheFallOfNetscape";
import TheRebirthOfNetscape from "./sections/TheRebirthOfNetscape";
import TheRiseOfNetscape from "./sections/TheRiseOfNetscape";

export default function Content() {
  return (
    <div className="space-y-60">
      <TheBirthOfNetscape />
      <TheRiseOfNetscape />
      <TheBrowserWarsBegin />
      <TheFallOfNetscape />
      <TheRebirthOfNetscape />
    </div>
  );
}
