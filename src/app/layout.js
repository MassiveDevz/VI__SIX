// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../../styles/styles.scss";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";

export const metadata = {
  title: "(VI)__SIX",
  description: "Agency Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
