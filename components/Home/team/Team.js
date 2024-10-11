import Link from "next/link";
import Image from "next/image";
import vertical from "../../../public/vertical2.jpeg";

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <div className="team__left-side flexColumn">
              <h2>
                Meet The Team{" "}
                <div className="six">
                  (<span>VI</span>)__SIX
                </div>
              </h2>

              <div className="team__left-side-image">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="row six">
                <div className="col-lg-6">
                  <p>
                    In a world where every marketing company claims to do social media, (<span>VI</span>)__SIX Agency truly leads the way
                    with a team of dozens of full-time staff. Operating globally from offices in New York City, Miami and Los Angeles, we
                    provide unmatched expertise. With a leadership team together for over seven years, we bring diverse backgrounds and
                    experiences to enhance your digital marketing campaigns.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    We've seen trends come and go and pioneered industry practices. As the 2016 Social Media Agency of the Year, we lead the
                    way. With expertise in content creation, community management, influencer relations, promotions, strategy, reporting,
                    media buying, and data analytics, we offer comprehensive social media support. At (<span>VI</span>)__SIX, we focus on
                    driving measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5 team__bg">
            <div className="team__list flexColumn">
              <div className="founder">
                <img
                  src="https://images.unsplash.com/photo-1678616473860-5c6978031719?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />

                <div className="copy flexBetween">
                  <h5>Jaxon Cole</h5>
                  <p className="six">
                    Jaxon co-founded (<span>VI</span>)__SIX Agency following a successful career in social media marketing and public
                    relations. By combining innovative social strategies with modern creative direction, Jaxon guarantees that our clients
                    receive the most comprehensive social campaigns.
                  </p>
                </div>
              </div>

              <div className="members">
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      src="https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <div className="copy">
                      <h5>Kai Alexander</h5>
                      <p>managing director</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <img
                      src="https://images.unsplash.com/photo-1587614382231-d1590f0039e7?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />{" "}
                    {/* <img
                      src="https://images.unsplash.com/photo-1629726249835-e7e5d5c1c689?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />{" "} */}
                    {/* <img
                      src="https://images.unsplash.com/photo-1646161248031-ab02bb04e4ee?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />{" "} */}
                    <div className="copy">
                      <h5>Luna Jade</h5>
                      <p>Head of Social & Design</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <img
                      src="https://images.unsplash.com/photo-1692286375229-7511455115f0?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />{" "}
                    <div className="copy">
                      <h5>Zane Carter</h5>
                      <p>Social Media Visual Expert</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      src="https://images.unsplash.com/photo-1587614295506-f03c0e6f5b44?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <div className="copy">
                      <h5>Harper Quinn</h5>
                      <p>SVP Global Talent</p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <img
                      src="https://images.unsplash.com/photo-1680721698104-5fff20073eee?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />{" "}
                    <div className="copy">
                      <h5>Ryder & Jett</h5>
                      <p>Office Goofballz</p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <img
                      src="https://images.unsplash.com/photo-1550682290-d071c75759f9?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />{" "}
                    <div className="copy">
                      <h5>Aurora Blake</h5>
                      <p>Marketing Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bottom-image">
                <img src="../../../horizontal.jpeg" alt="" />
              </div> */}
          </div>
        </div>
      </div>

      {/* <hr className="mt-5" /> */}
    </section>
  );
}
