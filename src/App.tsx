import Container from "./components/Container";
import Content from "./components/Content";

export default function App() {
  return (
    <main className="font-gsans bg-gray-50">
      <Container variant="large">
        <div className="bg-white">
          <div className="bg-linear-[var(--color-gray-50)_65%,transparent_65%] pt-1">
            <h1 className="font-melodrama px-2 text-center text-2xl font-medium uppercase md:text-4xl">
              Netscape to firefox
            </h1>
          </div>
          <div className="mt-10 sm:mt-28 md:mt-48">
            <Content />
          </div>
        </div>
      </Container>
    </main>
  );
}
