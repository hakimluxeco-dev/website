import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-950">
      <Navbar />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;