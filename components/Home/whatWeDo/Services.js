export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container-fluid">
        <div className="row">
          <div className="headline">
            <h2 className="heading">
              We only make digital products and <span> services</span>
            </h2>
            <div className="flexCenter copy">
              {/* <h5>
                (<span>VI</span>)__SIX <br /> <span>Services</span>
              </h5> */}
              <p>
                We provide comprehensive social marketing services, including creative, media, and technical expertise, all rooted in a deep
                understanding of online culture and social behaviors. Our exceptional research skills allow us to uncover valuable social
                insights, enabling our creative ideas to thrive on any platform or medium.
              </p>
            </div>
          </div>

          <div className="service-section">
            <div className="container">
              <div className="row section-border">
                <div className="col-md-6 flexColumn item-border">
                  <h3 className="flexCenter">
                    <span>01 /</span> Influencer Campaigns
                  </h3>
                  <p>
                    Influencer campaigns provide an effective solution to reach new audiences and boost conversions by partnering with top
                    content creators.
                  </p>

                  <div className="image-row flexCenter">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1620316721535-7a4c53bdafec?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                      <span className="company">@SerendipityShots</span>
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1619454949394-699b7a27c04c?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                      <span className="company">@UrbanTrailblazer</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 flexColumn ">
                  <h3 className="flexCenter">
                    <span>02 /</span> Content Creation
                  </h3>
                  <p>
                    Content is arguably the cornerstone of every successful digital marketing strategy, and you know what? We absolutely
                    thrive on it!
                  </p>

                  <div className="image-row flexCenter">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1627244714766-94dab62ed964?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                      <span className="company">@CosmicVibes</span>
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1620403724159-40363e84a155?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                      <span className="company">@TitanLens</span>
                    </div>
                  </div>
                </div>

                {/* <hr /> */}

                <div className="col-md-6 flexColumn item-border">
                  <h3 className="flexCenter">
                    <span>03 /</span> Talent Management
                  </h3>
                  <p>
                    (<span>VI</span>)__SIX internal Talent Management division champions the most inspiring, hardworking, and creative
                    influencers globally.
                  </p>

                  <div className="image-row flexCenter">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1506133813359-396cbcb973fe?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                      <span className="company">@BoldPathfinder</span>
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1555777710-1b3551d16971?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                      <span className="company">@DreamyDusk</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 single-service flexColumn ">
                  <h3 className="flexCenter">
                    <span>04 /</span> Social Media Management
                  </h3>
                  <p>
                    We craft & execute customized, measurable strategies to accomplish your brand objectives and connect directly with your
                    consumers.
                  </p>

                  <div className="image-row flexCenter">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1617898688995-bace3192b863?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                      <span className="company">@UrbanWanderlust</span>
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1585298969498-a2d7d69dff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                      <span className="company">@FearlessFocus</span>
                    </div>
                    {/* <img src="../../../vertical2.jpeg" alt="" />
                    <img src="../../../vertical2.jpeg" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
