import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-[9vw]">
        <NavBar/>
        <HeroSection />
      </div>
    </>
  );
}
