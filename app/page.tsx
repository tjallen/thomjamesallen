import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Nav />
      <Header />
      <main>
        <About />
        <Work />
      </main>
      <Footer />
    </div>
  );
}
