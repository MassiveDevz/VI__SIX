import { RiArrowRightSFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo-black.svg";

export default function Header() {
  return (
    <section id="home" className="container-fluid header">
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

        <div className="col-md-6 right-side flexCenter">
          <img src="https://framerusercontent.com/images/HGyhRrTfTGM97yYaq2JtY7xEk.png?scale-down-to=1024" alt="vertical Image" />

          {/* <img
            src="https://images.unsplash.com/photo-1561065533-316e3142d586?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="vertical Image"
          /> */}
          {/* <img
            src="https://images.unsplash.com/photo-1580071268077-81cf8742f7fb?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="vertical Image"
          /> */}
        </div>
      </div>
    </section>
  );
}

// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../../public/logo-black.svg";

// export default function Header() {
//   return (
//     <>
//       <section className="container-fluid header">
//         <div className="row ">
//           <div className="col-6">
//             <div className="header__left-side flexColumn">
//               <div className="flexBetween">
//                 <div className="logo">
//                   <Image src={logo} />
//                 </div>
//                 <nav>
//                   <div>
//                     <Link href="#">
//                       <p>Home</p>
//                     </Link>
//                     <Link href="#">
//                       <p>About</p>
//                     </Link>
//                     <Link href="#">
//                       <p>services</p>
//                     </Link>
//                     <Link href="#">
//                       <p>portfolio</p>
//                     </Link>
//                     <Link href="#">
//                       <p>the team</p>
//                     </Link>
//                     <Link href="#">
//                       <p>contact</p>
//                     </Link>
//                   </div>
//                 </nav>
//               </div>
//               {/* <h1>
//                 (<span>VI</span>)__SIX
//               </h1> */}
//               <div className="flexCenter header__copy">
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eos inventore dolore!</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eos inventore dolore!</p>
//               </div>

//               <img src="https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif" alt="vertical Image" />
//             </div>
//           </div>

//           <div className="col-6 header__image-div flexCenter">
//             <img src="../../../vertical2.jpeg" alt="vertical Image" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
