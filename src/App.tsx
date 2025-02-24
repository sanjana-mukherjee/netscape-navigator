import Content from "./components/sections/Content";

export default function App() {
  return (
    <div className="p-4 sm:p-16 font-gsans">
      <h1 className="text-center text-2xl font-light border-b border-b-black/20 uppercase">
        Netscape to Firefox
      </h1>
      <div className="mt-24">
        <Content />;
      </div>
    </div>
  );
}
