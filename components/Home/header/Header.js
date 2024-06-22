import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo-black.svg";

export default function Header() {
  return (
    <section className="container-fluid header">
      <div className="row ">
        <div className="col-md-6">
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

              <div>
                <p>
                  Specialising in Content & Influencer Marketing.
                  <span> Unconventional by Design</span>
                </p>
              </div>
            </div>

            {/* <div className="flexCenter">
              <a className="main-btn" href="#">
                Browse Our Services
              </a>
              <a className="main-btn" href="#">
                Meet the team
              </a>
            </div> */}

            <img src="https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif" alt="vertical Image" />
          </div>
        </div>

        <div className="col-md-6 right-side flexCenter">
          <img
            src="https://images.unsplash.com/photo-1540200009570-89197b85a6f7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="vertical Image"
          />
          {/* <img
            src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="vertical Image"
          /> */}
        </div>
      </div>
    </section>
  );
}
