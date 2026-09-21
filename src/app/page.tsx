import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AbstractSection } from "@/components/AbstractSection";
import { Authors } from "@/components/Authors";
import { ArticleBody } from "@/components/ArticleBody";
import { References } from "@/components/References";
import { DocumentsSection } from "@/components/DocumentsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AbstractSection />
        <Authors />
        <ArticleBody />
        <References />
        <DocumentsSection />
      </main>
      <Footer />
    </>
  );
}
