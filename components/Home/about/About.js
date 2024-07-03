export default function About() {
  return (
    <section id="about" className="about container-fluid">
      <h2>Empowering brands to thrive in the digital age. Together, we redefine the standard. Direct and always at the forefront.</h2>

      <div className="row flexCenter">
        <div className="col-md-2">
          <img
            src="https://images.unsplash.com/photo-1620920501588-0160acd50099?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="vertical Image"
          />
        </div>
        <div className="col-md-8 top-copy">
          <div className="flexCenter">
            <p>
              At SIX, our service is unmatched in the industry. We never do ordinary. Why? Simple. We're here to innovate, not just
              replicate. We're a global social agency, specializing in content and influencer marketing, but that sounds too corporate,
              doesn't it?
            </p>
            <p>
              This means we know how to connect people. Content is communication, and it's our specialty. We merge market intelligence with
              expertise to provide award-winning client services worldwide.
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <img
            src="https://images.unsplash.com/photo-1644952285377-cc18edb29b73?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="vertical Image"
          />
        </div>
      </div>

      <div className="row bottom-row">
        <div className="larger-image">
          <img
            src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="vertical Image"
          />
        </div>
        <div>
          <h3 className="headline">
            With a passionate team of industry specialists, we are dedicated to nurturing the careers of content creators and personal
            brands, linking them with tailored opportunities that align with their distinctive style and personality.
          </h3>

          <div className="row justify-content-center">
            {/* <div className="col-4">
              <h5>About:</h5>
              </div> */}
            <div className="col-8 flexBetween">
              <div className="flexColumn copy">
                <p>
                  SIX Marketing specializes in social media management. Our firm provides a range of services including social media
                  marketing, advertising, and email campaigns. We excel in creating and overseeing effective social media campaigns across
                  platforms like Facebook, Instagram, Twitter, LinkedIn, and Pinterest.
                </p>

                <div className="image-row">
                  <img
                    src="https://images.unsplash.com/photo-1597339677445-daa4479e6d8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="vertical Image"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1553843808-453b4f1be5a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="vertical Image"
                  />
                  <img src="https://framerusercontent.com/images/iXfP6dfeplnkYLTbbophEmrFyw.png?scale-down-to=1024" alt="vertical Image" />
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="right-image">
                <img
                  src="https://images.unsplash.com/photo-1598201116904-9613ee826e9a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="vertical Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
