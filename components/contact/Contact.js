import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="contact ">
      <div className="container-fluid">
        <h2>Let's Work</h2>

        <div className="contact-links container cta flexBetween">
          <a className="line" href="/">
            info@vi__six.com
          </a>
          <a className="line" href="/">
            212 · 555 · 1234
          </a>
        </div>

        {/* <div className="container  cta">
          <p>Contact Us:</p>
          <p>+212-555-5555</p>
          <p>
            <Link href="mailto:email.email.com">meetinthecity@mail.com</Link>
          </p>
        </div> */}
        {/* <div className="cta flexBetween container">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <span className="line-container flexCenter">
            <a className="line" href="/">
              Cool hover link
            </a>
          </span>
        </div> */}
      </div>

      {/* <div>
        <p>Contact</p>
        <p>New York</p>
        <p>+212-555-5555</p>
        <p>+212-555-5555</p>
        <p>Freedom and curiosity on the streets of LA</p>
        <p>
          <Link href="mailto:email.email.com">meetinthecity@mail.com</Link>
        </p>
      </div> */}
    </section>
  );
}
