import About from "../components/About";
import HomeAwards from "../components/Awards";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import ChooseUs from "../components/ChooseUs";
import CTA from "../components/CTA";
import Features from "../components/Features";
import HomeGallery from "../components/HomeGallery";
import HomeProjects from "../components/HomeProjects";
import HomeVariants from "../components/HomeVariants";
import Location from "../components/Location";
import News from "../components/News";
import Process from "../components/Process";
import Projects from "../components/Projects";
import Services from "../components/Services";
import HomeTestimonials from "../components/Testimonial";
import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <>
      <Banner />
      <Brands />
      <Features />
      <About />
      <Services />
      <Process />
      <VideoSection />
      <Projects />
      <HomeVariants />
      <ChooseUs />
      <Location />
      <CTA />

      <HomeGallery />
      <HomeProjects />
      <HomeAwards />
      <HomeTestimonials />
      {/* <News /> */}
    </>
  );
}
