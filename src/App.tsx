import Content from "./components/Content";

export default function App() {
  return (
    <main className="font-gsans">
      <div className="pt-1 bg-linear-[var(--color-gray-100)_65%,transparent_65%] flex items-center justify-center">
        <h1 className="whitespace-nowrap uppercase text-4xl font-melodrama font-medium">
          Netscape to firefox
        </h1>
      </div>
      <div className="mt-48">
        <Content />
      </div>
    </main>
  );
}
