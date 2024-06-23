export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container-fluid">
        <div className="row">
          <h2 className="testimonials__headline">Testimonials</h2>
        </div>

        <div className="row">
          <div className="col-6 testimonials__review">
            <p className="testimonials__copy">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, mollitia fuga perferendis voluptate itaque unde quibusdam
              laboriosam saepe dolorum beatae maiores dicta neque odio odit repudiandae fugiat temporibus, non natus totam eum nemo earum
              eligendi! Iste quaerat voluptate fuga voluptatem.
            </p>

            <div className="testimonials__client flexBetween">
              <div className="flexCenter">
                <img src="../../../headshot.jpg" alt="" />
                <p>
                  Ben Stiller <br />
                  CEO @ Zego
                </p>
              </div>
              <a href="#">View Case Study</a>
            </div>
          </div>

          <div className="col-6 testimonials__review">
            <p className="testimonials__copy">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, mollitia fuga perferendis voluptate itaque unde quibusdam
              laboriosam saepe dolorum beatae maiores dicta neque odio odit repudiandae fugiat temporibus, non natus totam eum nemo earum
              eligendi! Iste quaerat voluptate fuga voluptatem.
            </p>

            <div className="testimonials__client flexBetween">
              <div className="flexCenter">
                <img src="../../../headshot.jpg" alt="" />
                <p>
                  Ben Stiller <br />
                  CEO @ Zego
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
