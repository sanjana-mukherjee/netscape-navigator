import Content from "./components/Content";

export default function App() {
  return (
    <div className="p-16 pt-2 font-gsans mx-auto max-w-8xl">
      <h1 className="text-center text-2xl font-light border-b border-b-black/20 uppercase">
        Netscape to Firefox
      </h1>
      <div className="mt-24">
        <Content />
      </div>
    </div>
  );
}
