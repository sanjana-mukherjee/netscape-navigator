import TheBirthOfNetscape from "./sections/TheBirthOfNetscape";
import TheBrowserWarsBegin from "./sections/TheBrowserWarsBegin";
import TheFallOfNetscape from "./sections/TheFallOfNetscape";
import TheLegacyOfNetscape from "./sections/TheLegacyOfNetscape";
import TheRebirthAsFirefox from "./sections/TheRebirthAsFirefox";
import TheRiseOfNetscape from "./sections/TheRiseOfNetscape";

export default function Content() {
  return (
    <div className="space-y-25 sm:space-y-35 md:space-y-60">
      <TheBirthOfNetscape />
      <TheRiseOfNetscape />
      <TheBrowserWarsBegin />
      <TheFallOfNetscape />
      <TheRebirthAsFirefox />
      <TheLegacyOfNetscape />
    </div>
  );
}
