import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import UseCases from "@/components/UseCases";
import TechStack from "@/components/TechStack";
import Pricing from "@/components/Pricing";
import Proof from "@/components/Proof";
import Founder from "@/components/Founder";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Pricing />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <UseCases />
        <TechStack />
        <Founder />
        <SocialProof />
        <Proof />
        <FAQ />
        <CTA />
      </main>
      <FloatingCTA />
      <Footer />
    </>
  );
}
