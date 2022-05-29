import About from "./About/About";
import Layout from "./layout/Layout";
import Navbar from "./navbar/Navbar";

export default function PublicSide() {
  return (
    <div className="d-flex">
      <Navbar />
      <Layout>
        <About />
      </Layout>
    </div>
  );
}
