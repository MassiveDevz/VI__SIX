export default function About() {
  return (
    <section id="about" className="about container-fluid">
      <h2>
        Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.
      </h2>
      {/* <h2>We are a socially led creative agency</h2> */}
      {/* <h2>AN AWARD-WINNING AGENCY</h2> */}
      {/* <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sunt dolor sequi ea.</h2> */}

      <div className="row flexCenter">
        <div className="col-md-2">
          <img src="../../../vertical2.jpeg" alt="vertical Image" />
        </div>
        <div className="col-md-8 top-copy">
          <div className="flexCenter">
            <p>
              At Komodo, we offer a service unrivalled in industry. We never do normal. Why? Easy. Because we aren't in the business to
              simply recreate. Instead, we innovate. By definition, we're a global social agency, specialising in content and influencer
              marketing; but that sounds a little corporate, doesn't it?
            </p>
            <p>
              What that actually means is that we understand how to connect people. Content is communication and it's what we do best. We
              combine market intelligence and expertise to deliver award winning client services across every corner of the globe.
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <img src="../../../vertical2.jpeg" alt="vertical Image" />
        </div>
      </div>

      <div className="row bottom-row">
        <div className="larger-image">
          <img src="../../../horizontal.jpeg" alt="vertical Image" />
        </div>
        <div>
          <h3 className="headline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea earum alias eum nulla accusantium consequatur provident modi
            quisquam! Repellendus harum deserunt rem, reiciendis nisi temporibus est necessitatibus voluptatum eligendi!
          </h3>

          <div className="row">
            <div className="col-4">
              <h5>About:</h5>
            </div>
            <div className="col-8 flexBetween">
              <div className="flexColumn copy">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus dolores fuga odio earum recusandae. Velit aperiam
                  ipsum doloremque eveniet vero architecto, similique quo, totam repellat a, suscipit quis. Aspernatur.
                </p>

                <div className="image-row">
                  <img src="../../../vertical2.jpeg" alt="vertical Image" />
                  <img src="../../../vertical2.jpeg" alt="vertical Image" />
                </div>
              </div>
              <div className="right-image">
                <img src="../../../vertical2.jpeg" alt="vertical Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
