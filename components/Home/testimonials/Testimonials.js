export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container-fluid">
        <div className="row">
          <h2 className="testimonials__headline">Testimonials</h2>
        </div>

        <div className="row">
          <div className="col-lg-6 testimonials__review">
            <p className="testimonials__copy">
              The entire (VI)__SIX team went above and beyond, surpassing all expectations on our activation. Every detail, no matter how
              small, was meticulously handled with precision and care. Your team's dedication and thoroughness ensured that every aspect of
              the project was executed flawlessly. We always felt confident in your ability to deliver, and you truly made the event a
              resounding success.
            </p>

            <div className="testimonials__client flexBetween">
              <div className="flexCenter details">
                <img
                  src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p>
                  Sophia Nguyen <br />
                  Digital Brand Activation Specialist <br />
                  <span>UrbanFlux</span>
                </p>
              </div>
              <a href="#">View Case Study</a>
            </div>
          </div>

          <div className="col-lg-6 testimonials__review">
            <p className="testimonials__copy">
              The team demonstrated exceptional efficiency in their operations and meticulous attention to itinerary management on the
              ground. Their overall performance was impressive, and the content they produced not only met but significantly exceeded our
              expectations. The dedication and attention to detail were evident in every aspect of their work, ensuring a smooth and
              successful execution.
            </p>

            <div className="testimonials__client flexBetween">
              <div className="flexCenter details">
                <img
                  src="https://images.unsplash.com/photo-1601576084861-5de423553c0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p>
                  Liam Davis <br />
                  Brand Marketing Manager
                  <br />
                  <span>ThriveCraft</span>
                </p>
              </div>
              <a href="#">View Case Study</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
