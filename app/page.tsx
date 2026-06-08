import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import LogoDivider from "@/app/components/LogoDivider";
import Events from "@/app/components/Events";
import Talent from "@/app/components/Talent";
import Projects from "@/app/components/Projects";
import VideoShowreel from "@/app/components/VideoShowreel";
import Testimonials from "@/app/components/Testimonials";
import Gallery from "@/app/components/Gallery";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <LogoDivider dark={true} />
        <Services />
        <LogoDivider dark={false} />
        <Events />
        <LogoDivider dark={true} />
        <Talent />
        <LogoDivider dark={true} />
        <Projects />
        <LogoDivider dark={false} />
        <VideoShowreel />
        <LogoDivider dark={true} />
        <Testimonials />
        <LogoDivider dark={true} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
