import Image from "next/image";
import pic1 from "../../../assets/images/work_image-1.jpeg";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container-fluid">
        <div className="row">
          <div className="portfolio__headline-copy">
            <h2>Our Work</h2>
            <div className="copy">
              {/* <p>We help brands reach their goals.</p> */}
              <p>
                Our teams are experienced in crafting strategies and handling daily operations across various industries, including food and
                beverage, music, travel, and more. Explore some of our case studies below!
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio__projects">
          <div className="row">
            <div className="col-4 img-container">
              <p>01</p>
              <Image src={pic1} />
              {/* <img
                src="https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              /> */}
              <div className="info">
                <h5>Chef</h5>
                <p>Sound · Meditation · Work</p>
              </div>
            </div>
            <div className="col-4 img-container">
              <p>02</p>
              <img
                src="https://images.unsplash.com/photo-1527609720421-5a7486dcabec?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="info">
                <h5>Traveler</h5>
                <p>Sound · Meditation · Work</p>
              </div>
            </div>
            <div className="col-4 img-container">
              <p>03</p>
              <img
                src="https://images.unsplash.com/photo-1581034496165-0ab7eb788e29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="info">
                <h5>Music</h5>
                <p>Sound · Meditation · Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
