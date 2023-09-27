"use client";
import Header from "./Header/page";
import HeroSection from "./HeroSection/page";
import ContentSection from "./ContentSection/page";
import Testimonials from "./Testimonials/page";
import FeatureSection from "./FeatureSection/page";
import Footer from "./Footer/page";
import Chatbot from "./Chatbot/page";
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ContentSection />
      <FeatureSection />
      <Testimonials />
      <Footer />
      <Chatbot />
    </main>
  );
}
