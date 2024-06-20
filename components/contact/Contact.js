import Link from "next/link";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container-fluid">
        <h2>Let's Work</h2>

        <div className="cta flexBetween container">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <Link href="https://calendly.com/" target="blank" className="main-btn">
            Book a Call
          </Link>
        </div>
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
