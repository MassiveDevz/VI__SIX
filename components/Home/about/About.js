export default function About() {
  return (
    <>
      <section className="about container-fluid">
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sunt dolor sequi ea.</h2>

        <div className="row flexCenter">
          <div className="col-2">
            <img src="../../../vertical2.jpeg" alt="vertical Image" />
          </div>
          <div className="col-8 top-copy">
            <div className="flexCenter">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae, rerum pariatur quibusdam ducimus provident ipsum eum
                cupiditate repellendus culpa magnam unde architecto quas nobis saepe! Aut natus nam hic. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aliquam quae, rerum pariatur quibusdam ducimus provident ipsum eum cupiditate repellendus
                culpa magnam unde architecto quas nobis saepe! Aut natus nam hic.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae, rerum pariatur quibusdam ducimus provident ipsum eum
                cupiditate repellendus culpa magnam unde architecto quas nobis saepe! Aut natus nam hic. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aliquam quae, rerum pariatur quibusdam ducimus provident ipsum eum cupiditate repellendus
                culpa magnam unde architecto quas nobis saepe! Aut natus nam hic.
              </p>
            </div>
          </div>
          <div className="col-2">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus dolores fuga odio earum recusandae. Velit
                    aperiam ipsum doloremque eveniet vero architecto, similique quo, totam repellat a, suscipit quis. Aspernatur.
                  </p>

                  <div className="image-row">
                    <img src="../../../vertical2.jpeg" alt="vertical Image" />
                    <img src="../../../vertical2.jpeg" alt="vertical Image" />
                  </div>
                </div>
                <div>
                  <img src="../../../vertical2.jpeg" alt="vertical Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
