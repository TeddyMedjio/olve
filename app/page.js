import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Law from "@/components/Law";
import Logos from "@/components/Logos";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Satisfied from "@/components/Satisfied";
import Scrool from "@/components/Scrool";

export default function Home() {
  // Date actuelle
  // const currentDate = new Date();
  // const formattedDate = new Intl.DateTimeFormat("fr-FR", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // }).format(currentDate);
  return (
    <>
      <Navbar />
      <Hero />
      <Scrool />
      <Law />
      <Satisfied />
      <Logos />
      <Newsletter />
      <Footer />
    </>
  );
}
