import Container from "./components/Container";
import Content from "./components/Content";

export default function App() {
  return (
    <main className="pt-2 font-gsans">
      <Container>
        <h1 className="text-center text-xl font-light border-b border-b-black/20 uppercase">
          Netscape to Firefox
        </h1>
      </Container>
      <div className="mt-48">
        <Content />
      </div>
    </main>
  );
}
