import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo-black.svg";

export default function Header() {
  return (
    <>
      <section className="container-fluid header">
        <div className="row ">
          <div className="col-6">
            <div className="header__left-side flexColumn">
              <div className="flexBetween">
                <div className="logo">
                  <Image src={logo} />
                </div>
                <nav>
                  <div>
                    <Link href="#">
                      <p>Home</p>
                    </Link>
                    <Link href="#">
                      <p>About</p>
                    </Link>
                    <Link href="#">
                      <p>services</p>
                    </Link>
                    <Link href="#">
                      <p>portfolio</p>
                    </Link>
                    <Link href="#">
                      <p>the team</p>
                    </Link>
                    <Link href="#">
                      <p>contact</p>
                    </Link>
                  </div>
                </nav>
              </div>
              {/* <h1>
                (<span>VI</span>)__SIX
              </h1> */}
              <div className="flexCenter header__copy">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eos inventore dolore!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eos inventore dolore!</p>
              </div>

              <img src="https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif" alt="vertical Image" />
            </div>
          </div>

          <div className="col-6 header__image-div flexCenter">
            <img src="../../../vertical2.jpeg" alt="vertical Image" />
          </div>
        </div>
      </section>
    </>
  );
}
