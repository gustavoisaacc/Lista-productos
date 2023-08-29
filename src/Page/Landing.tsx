import Footer from "../components/Footer";
import Header from "../components/Header";

function Landing({ children }) {
  return (
    <>
      <Header />
      <main className="height">{children}</main>
      <Footer />
    </>
  );
}

export default Landing;
