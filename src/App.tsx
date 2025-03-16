import Content from "./components/Content";

export default function App() {
  return (
    <main className="p-16 pt-2 font-gsans mx-auto max-w-[95rem] overflow-x-hidden">
      <h1 className="text-center text-xl font-light border-b border-b-black/20 uppercase">
        Netscape to Firefox
      </h1>
      <div className="mt-48">
        <Content />
      </div>
    </main>
  );
}
