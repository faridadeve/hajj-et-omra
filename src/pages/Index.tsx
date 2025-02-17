
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Services />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
