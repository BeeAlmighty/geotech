import Hero from "@/components/marketing/Hero";
import Services from "@/components/marketing/Services";
import WorkPreview from "@/components/marketing/WorkPreview";
import Products from "@/components/marketing/Products";
import MotionShowcase from "@/components/marketing/MotionShowcase";
import Contact from "@/components/marketing/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WorkPreview />
      <Products />
      <MotionShowcase />
      <Contact />
    </>
  );
}
