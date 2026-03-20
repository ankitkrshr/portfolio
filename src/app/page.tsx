import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Explore } from "@/components/Explore";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full relative">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Explore />
      <Footer />
    </main>
  );
}
