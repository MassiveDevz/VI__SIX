import Header from "../../components/Home/header/Header";
import About from "../../components/Home/about/About";
import Services from "../../components/Home/whatWeDo/Services";
import Portfolio from "../../components/Home/portfolio/Portfolio";
import Team from "../../components/Home/team/Team";
import Brands from "../../components/Home/brands/Brands";
import Testimonials from "../../components/Home/testimonials/Testimonials";
import Faq from "../../components/Home/faq/Faq";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Brands />
      <Testimonials />
      <Faq />
    </main>
  );
}
