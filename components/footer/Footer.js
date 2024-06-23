import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-white.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid content">
        <div className="row">
          <ul className="flexBetween">
            <h3>Follow Us</h3>
            <li>
              <Link target="blank" href="https://www.instagram.com/">
                IG
              </Link>
            </li>
            <li>
              <Link target="blank" href="https://www.facebook.com/">
                FB
              </Link>
            </li>
            <li>
              <Link target="blank" href="https://x.com/">
                X
              </Link>
            </li>
            <li>
              <Link target="blank" href="https://www.tiktok.com/explore">
                TT
              </Link>
            </li>
            <li>
              <Link target="blank" href="https://www.youtube.com/">
                YT
              </Link>
            </li>
          </ul>
        </div>

        <div className="row flexBetween middle-row">
          <div className="col-8">
            <ul>
              <div className="flexCenter page-links">
                <li>
                  <Link href="#home">
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="#about">
                    <p>About</p>
                  </Link>
                </li>
                <li>
                  <Link href="#services">
                    <p>services</p>
                  </Link>
                </li>
              </div>
              <div className="flexCenter page-links">
                <li>
                  <Link href="#portfolio">
                    <p>portfolio</p>
                  </Link>
                </li>
                <li>
                  <Link href="#team">
                    <p>the team</p>
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <p>book a call</p>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          {/* <div className="col-4 contact">
            <h5>Stay In Touch</h5>
          </div> */}
        </div>

        <div className="row footer__bottom-row flexCenter">
          <div className="col-3">
            <img src="../../../horizontal.jpeg" alt="" />
          </div>
          <div className="col-9">
            <div className="logo flexColumn">
              <div className="contact-links">
                <a className="line" href="/">
                  info@vi__six.com
                </a>
                <a className="line" href="/">
                  212 · 555 · 1234
                </a>
              </div>
              <Image src={logo} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
