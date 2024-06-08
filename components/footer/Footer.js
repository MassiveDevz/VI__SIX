import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className='footer'>
        <div className='container-fluid'>
          <div className='row'>
            <ul className='flexBetween'>
              <h4>Follow Us</h4>
              <li>
                <Link href='#'>Link</Link>
              </li>
              <li>
                <Link href='#'>Link</Link>
              </li>
              <li>
                <Link href='#'>Link</Link>
              </li>
              <li>
                <Link href='#'>Link</Link>
              </li>
              <li>
                <Link href='#'>Link</Link>
              </li>
            </ul>
          </div>

          <div className='row flexBetween footer__middle-row'>
            <div className='col-6'>
              <ul>
                <div className='flexCenter page-links'>
                  <li>About Us</li>
                  <li>Portfolio</li>
                </div>
                <div className='flexCenter page-links'>
                  <li>Services</li>
                  <li>Contact Us</li>
                </div>
              </ul>
            </div>
            <div className='col-6 '>
              <h4>About us</h4>
            </div>
          </div>
          <div className='row footer__bottom-row flexCenter'>
            <div className='col-3'>
              <img src='../../../horizontal.jpeg' alt='' />
            </div>
            <div className='col-9 flexCenter'>
              <h2>
                (<span>VI</span>)__SIX
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
