import About from "../../components/Home/about/About";
import Blurb from "../../components/Home/blurb/Blurb";
import Header from "../../components/Home/header/Header";
import Services from "../../components/Home/whatWeDo/Services";
import Portfolio from "../../components/Home/portfolio/Portfolio";
import Brands from "../../components/Home/brands/Brands";
import Testimonials from "../../components/Home/testimonials/Testimonials";
import Contact from "../../components/Home/contact/Contact";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Services />
      <Blurb />
      <Portfolio />
      <Brands />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
