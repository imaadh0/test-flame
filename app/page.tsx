import Hero from "./landing/hero";
import About from "./landing/about";
import Approach from "./landing/approach";
import OurWork from "./landing/projects";
import ContactUs from "./landing/contact-us";
import Footer from "../components/footer";

export default function MainPage() {
  return (
    <>
      <Hero />
      <About />
      <Approach />
      <OurWork />
      <ContactUs />
      <Footer />
    </>
  );
}
