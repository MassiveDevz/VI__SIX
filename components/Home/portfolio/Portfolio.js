export default function Portfolio() {
  return (
    <>
      <section className='portfolio'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='portfolio__headline-copy'>
              <h2>Our Work</h2>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum perspiciatis eos aliquam amet
                  tenetur, ducimus cum! A laborum asperiores adipisci beatae eligendi similique delectus totam nulla ex
                  quia! Fugiat, temporibus.
                </p>
              </div>
            </div>
          </div>

          <div className='portfolio__projects'>
            <div className='row'>
              <div className='col-4'>
                <p>01</p>
                <img src='../../../vertical2.jpeg' alt='' />
                <div>
                  <h5>Project One</h5>
                  <p>Sound · Meditation · Work</p>
                </div>
              </div>
              <div className='col-4'>
                <p>01</p>
                <img src='../../../vertical2.jpeg' alt='' />
                <div>
                  <h5>Project One</h5>
                  <p>Sound · Meditation · Work</p>
                </div>
              </div>
              <div className='col-4'>
                <p>01</p>
                <img src='../../../vertical2.jpeg' alt='' />
                <div>
                  <h5>Project One</h5>
                  <p>Sound · Meditation · Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
