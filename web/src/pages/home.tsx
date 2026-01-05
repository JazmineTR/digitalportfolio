import Sidebar from "@/components/ui/sidebar";
import Hero from "@/components/ui/hero";
import Footer from "@/components/ui/footer";

function Home() {
  return (
    <div className="bg-blue-300">
    <Sidebar/>
    <Hero/>
    <Footer/>
    </div>
  );
}

export default Home;