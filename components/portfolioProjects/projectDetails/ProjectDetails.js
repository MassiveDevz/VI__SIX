import Image from "next/image";
import horizontal from "../../../public/horizontal.jpeg";

export default function ProjectDetails() {
  return (
    <section className="project-details">
      <div className="container-fluid">
        <div className="heading">
          <h3>Introducing the New Bison Studio Website</h3>
          <div className="info">
            <p>07.17.2021</p>
            <p>Blogs, Marketing</p>
          </div>
        </div>

        <div className="main-image">
          <Image src={horizontal} />
        </div>

        <div className="details">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <h6>Project Details</h6>
              </div>
              <div className="col-9">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci commodi corporis, dicta distinctio, dolore iste eum
                  earum pariatur voluptatem maiores fugiat. Explicabo delectus minima exercitationem recusandae quos atque harum cupiditate.
                </h4>
                <div className="copy">
                  <h5>New Home. New Service. Bigger Team</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illo placeat ducimus earum in inventore iusto! Minus,
                    cumque culpa officiis, neque odit doloribus itaque sed praesentium alias corporis voluptatum quam.
                  </p>

                  <div>
                    <ul>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti harum placeat laborum perspiciatis, corporis
                    accusantium dolore voluptatum et error maxime veniam suscipit. Numquam asperiores id beatae quam dicta ducimus harum?
                  </p>

                  <Image src={horizontal} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
