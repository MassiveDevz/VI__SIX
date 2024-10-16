import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-white.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid content">
        <div className="row top-row">
          {/* <h3>Follow Us</h3> */}
          <ul className="flexBetween">
            <h3>Follow Us</h3>
            <li>
              <Link target="blank" href="https://www.instagram.com/">
                / IG
              </Link>
            </li>
            <li>
              <Link target="blank" href="https://www.facebook.com/">
                / FB
              </Link>
            </li>
            <li>
              <Link target="blank" href="https://x.com/">
                / X
              </Link>
            </li>
            <li>
              <Link target="blank" href="https://www.tiktok.com/explore">
                / TT
              </Link>
            </li>
            <li>
              <Link target="blank" href="https://www.youtube.com/">
                / YT
              </Link>
            </li>
          </ul>
        </div>

        <div className="row flexBetween middle-row">
          <div className="col-lg-8">
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
          <div className="col-6 col-lg-3">
            <img
              src="https://images.unsplash.com/photo-1568658176307-bfbd2873abda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            {/* <img
              src="https://images.unsplash.com/photo-1529717730488-7a2492983b2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            /> */}
            {/* <img
              src="https://images.unsplash.com/photo-1495106245177-55dc6f43e83f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            /> */}
            {/* <img
              src="https://images.unsplash.com/photo-1553451166-232112bda6f6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            /> */}
            {/* <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            /> */}
          </div>

          <div className="col-6 col-lg-9">
            <div className="logo flexCenter">
              {/* <div className="contact-links">
                <a className="line" href="/">
                  info@vi__six.com
                </a>
                <a className="line" href="/">
                  212 · 555 · 1234
                </a>
              </div> */}
              <Image src={logo} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
