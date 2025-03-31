import Content from "./components/Content";

export default function App() {
  return (
    <main className="font-gsans">
      <div className="pt-1 bg-linear-[var(--color-gray-50)_65%,transparent_65%]">
        <h1 className="text-center uppercase font-melodrama font-medium px-2 text-2xl md:text-4xl">
          Netscape to firefox
        </h1>
      </div>
      <div className="mt-10 sm:mt-28 md:mt-48">
        <Content />
      </div>
    </main>
  );
}
