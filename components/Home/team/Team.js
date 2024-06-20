import Link from "next/link";
import Image from "next/image";
import vertical from "../../../public/vertical2.jpeg";

export default function Team() {
  return (
    <>
      <section className="team">
        <div className="container-fluid">
          <div className="row">
            <div className="col-7">
              <div className="team__left-side flexColumn">
                <h2>
                  Meet The Team{" "}
                  <div className="six">
                    [<span>VI</span>]__SIX
                  </div>
                </h2>

                <div className="team__left-side-image">
                  <img src="../../../vertical2.jpeg" alt="" />
                </div>

                <div className="row">
                  <div className="col-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam est, quae earum sed atque quibusdam libero facere
                    quas, exercitationem eos, numquam quam eum cum velit recusandae delectus ab tenetur dolor. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Aliquam est, quae earum sed atque quibusdam libero facere quas, exercitationem eos,
                    numquam quam eum cum velit recusandae delectus ab tenetur dolor.
                  </div>
                  <div className="col-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam est, quae earum sed atque quibusdam libero facere
                    quas, exercitationem eos, numquam quam eum cum velit recusandae delectus ab tenetur dolor.
                  </div>
                </div>

                {/* <div>
                  <p>Contact</p>
                  <p>New York</p>
                  <p>+212-555-5555</p>
                  <p>+212-555-5555</p>
                  <p>Freedom and curiosity on the streets of LA</p>
                  <p>
                    <Link href="mailto:email.email.com">meetinthecity@mail.com</Link>
                  </p>
                </div> */}
              </div>
            </div>

            <div className="col-5 team__bg">
              <div className="team__list flexColumn">
                <div className="founder">
                  <img src="../../../vertical2.jpeg" alt="" />
                  <div className="copy flexBetween">
                    <h5>Ellen Jones</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur, fugiat nostrum libero est qui mollitia
                      laudantium dolorum sit totam excepturi ab voluptatum rerum. Veritatis quisquam in qui eius hic?
                    </p>
                  </div>
                </div>

                <div className="members">
                  <div className="row">
                    <div className="col-4">
                      <img src="../../../vertical2.jpeg" alt="" />
                      <div className="copy">
                        <h5>Ellen Jones</h5>
                        <p>Marketing Manager</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <img src="../../../vertical2.jpeg" alt="" />{" "}
                      <div className="copy">
                        <h5>Ellen Jones</h5>
                        <p>Marketing Manager</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <img src="../../../vertical2.jpeg" alt="" />{" "}
                      <div className="copy">
                        <h5>Ellen Jones</h5>
                        <p>Marketing Manager</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <img src="../../../vertical2.jpeg" alt="" />
                      <div className="copy">
                        <h5>Ellen Jones</h5>
                        <p>Marketing Manager</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <img src="../../../vertical2.jpeg" alt="" />{" "}
                      <div className="copy">
                        <h5>Ellen Jones</h5>
                        <p>Marketing Manager</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <img src="../../../vertical2.jpeg" alt="" />{" "}
                      <div className="copy">
                        <h5>Ellen Jones</h5>
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
    </>
  );
}
