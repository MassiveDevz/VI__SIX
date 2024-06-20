import About from "../../components/Home/about/About";
import Blurb from "../../components/Home/blurb/Blurb";
import Header from "../../components/Home/header/Header";
import Team from "../../components/Home/team/Team";
import Portfolio from "../../components/Home/portfolio/Portfolio";
import Brands from "../../components/Home/brands/Brands";
import Testimonials from "../../components/Home/testimonials/Testimonials";
import Faq from "../../components/Home/faq/Faq";
import Services from "../../components/Home/whatWeDo/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Services />
      {/* <Blurb /> */}
      <Portfolio />
      <Team />
      <Brands />
      <Testimonials />
      <Faq />
    </main>
  );
}
