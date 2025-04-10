import Container from "./components/Container";
import Content from "./components/Content";
import Conclusion from "./components/sections/Conclusion";
import Introduction from "./components/sections/Introduction";

export default function App() {
  return (
    <main className="font-gsans bg-gray-50">
      <Container variant="large">
        <div className="bg-white pt-px">
          <Introduction />
          <div className="mt-18 sm:mt-28 md:mt-48">
            <Content />
          </div>
            <Conclusion />
        </div>
      </Container>
    </main>
  );
}
