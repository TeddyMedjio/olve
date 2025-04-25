import Hero from "@/components/Hero";
import Law from "@/components/Law";
import Navbar from "@/components/Navbar";
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
    </>
  );
}
