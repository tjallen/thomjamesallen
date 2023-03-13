import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-5xl p-4">
        <Nav />
        <Hero />
        <main className="container mx-auto">
          <About />
          <Work />
        </main>

        <Footer />
      </div>
    </>
  );
}
