import Link from "next/link";

export default function Services() {
  return (
    <div>
      <section className='services'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-8'>
              <div className='services__left-side flexColumn'>
                <h2>Meet Me In The City</h2>
                <div className='col-4 services__left-side-image'>
                  <img src='../../../vertical2.jpeg' alt='' />
                </div>
                <div className='services__left-side-copy'>
                  <p>Contact</p>
                  <p>New York</p>
                  <p>+212-555-5555</p>
                  <p>+212-555-5555</p>
                  <p>Freedom and curiosity on the streets of LA</p>
                  <p>
                    <Link href='mailto:email.email.com'>meetinthecity@mail.com</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-4 '>
              <div className='services__bg'>
                <div className='services__list'>
                  <div className='flexCenter'>
                    <p className='number'>/01</p>
                    <img src='../../../vertical2.jpeg' alt='' />
                    <div className='copy'>
                      <p className='title'>Lorem</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div className='services__list'>
                  <div className='flexCenter'>
                    <p className='number'>/01</p>
                    <img src='../../../vertical2.jpeg' alt='' />
                    <div className='copy'>
                      <p className='title'>Lorem</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div className='services__list'>
                  <div className='flexCenter'>
                    <p className='number'>/01</p>
                    <img src='../../../vertical2.jpeg' alt='' />
                    <div className='copy'>
                      <p className='title'>Lorem</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div className='bottom-image'>
                  <img src='../../../horizontal.jpeg' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
