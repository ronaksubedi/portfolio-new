
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BackgroundGradient from "@/components/BackgroundGradient";
import { initScrollAnimation } from "@/utils/animations";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimation();
    
    // Add appear class to hero elements that should be visible immediately
    const heroElement = document.querySelector('.animate-fade-in');
    if (heroElement) {
      heroElement.classList.add('appear');
    }
    
    // Add fade-in animation to all sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-fade-in');
            animatedElements.forEach((el) => {
              el.classList.add('appear');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <BackgroundGradient />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
