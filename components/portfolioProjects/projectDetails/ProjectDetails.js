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
            {/* <p>Blogs, Marketing</p> */}
          </div>
        </div>

        <div className="main-image">
          <img
            src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          {/* <Image src={horizontal} /> */}
        </div>

        <div className="details">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <h6>Project Details</h6>
              </div>
              <div className="col-9">
                <h4>
                  Harbour Marriott is a 5-star hotel on the cusp of Circular Quay. A destination desired by travellers worldwide with a
                  taste for contemporary experience and modern creature comforts.
                </h4>
                <div className="copy">
                  {/* <h5>New Home. New Service. Bigger Team</h5> */}
                  <p>
                    Along with launching paid advertising campaigns, organic posts have been posted at least once every day, ensuring the
                    business stays active on all social media. This included a mix of static image posts, product highlights, short videos,
                    and trending Capcut template short videos. The Capcut template videos have had a lot of success, generating a lot of
                    engagement.
                  </p>

                  <div>
                    <ul>
                      <li>Reach Increase: +1761%</li>
                      <li>Content Interaction: +96%</li>
                      <li>Engagement Rate: 8.3%</li>
                    </ul>
                  </div>
                  <p>
                    Our top-performing short video reel has over 1,100 likes and 25,500 video views. This is followed by another video
                    receiving 586 likes and 11,900 video views, a video receiving 428 likes and 17,000 video views, and a video receiving
                    424 likes and 11,000 video views. These results are from just four of our top-performing reels. These reels have been
                    posted organically and have not had any paid ad spend behind them.
                  </p>
                  <p>
                    We then ran paid social media advertising retargeting the engagement and views we’d driven organically to achieve a 44:1
                    return on ad spend.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
