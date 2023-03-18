import Footer from "./Footer";
import Hero from "./Hero";
import Layout from "./Layout";
import Navbar from "./Navbar";

export default function Holadok() {
  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
      </Layout>
      <Footer />
    </>
  );
}
