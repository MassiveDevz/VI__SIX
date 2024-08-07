import { RiArrowRightSFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo-black.svg";

export default function Header() {
  return (
    <section id="home" className="container-fluid header">
      <div className="row ">
        <div className=" col-md-6">
          <div className="left-side flexColumn">
            <div className="flexBetween">
              <div className="logo">
                <Image src={logo} />
              </div>
              <nav>
                <div>
                  <Link href="/">
                    <p>Home</p>
                  </Link>
                  <Link href="#about">
                    <p>About</p>
                  </Link>
                  <Link href="#services">
                    <p>services</p>
                  </Link>
                  <Link href="#portfolio">
                    <p>portfolio</p>
                  </Link>
                  <Link href="#team">
                    <p>the team</p>
                  </Link>
                  <Link href="#contact">
                    <p>contact</p>
                  </Link>
                </div>
              </nav>
            </div>

            <div className="flexBetween copy">
              <div>
                <h1>Unleash the Power of Digital Storytelling</h1>
              </div>

              <div className="copy__p">
                <p>
                  Specialising in Content & Influencer Marketing.
                  <span> Unconventional by Design</span>
                </p>
              </div>
            </div>

            <div className="bottom">
              <figure>
                <video autoPlay muted loop playsInline>
                  <source src="https://cdn.pixabay.com/video/2023/10/20/185790-876545922_large.mp4" type="video/mp4" />

                  {/* <source src="https://cdn.pixabay.com/video/2016/08/22/4723-179738625_large.mp4" type="video/mp4" /> */}

                  {/* <source src="https://cdn.pixabay.com/video/2022/09/13/131154-750216587_large.mp4" type="video/mp4" /> */}
                </video>
              </figure>

              {/* <img src="https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif" alt="vertical Image" /> */}

              <span className="line-container flexCenter">
                <Link target="blank" className="line" href="https://calendly.com/">
                  Let's Work!
                </Link>
                <span className="arrow flexCenter">
                  <RiArrowRightSFill />
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="d-none d-md-block col-md-6 right-side flexCenter">
          <img src="https://framerusercontent.com/images/HGyhRrTfTGM97yYaq2JtY7xEk.png?scale-down-to=1024" alt="vertical Image" />
        </div>
      </div>
    </section>
  );
}
