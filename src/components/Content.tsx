import BirthOfNetscape from "./sections/BirthOfNetscape";
import TheBrowserWarsBegin from "./sections/TheBrowserWarsBegin";
import TheRiseOfNetscape from "./sections/TheRiseOfNetscape";

export default function Content() {
  return (
    <div className="space-y-56">
      <BirthOfNetscape />
      <TheRiseOfNetscape />
      <TheBrowserWarsBegin />
    </div>
  );
}
