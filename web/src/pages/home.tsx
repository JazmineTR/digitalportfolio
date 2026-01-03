import { cn } from "@/lib/utils";
import Sidebar from "@/components/ui/sidebar";
import Hero from "@/components/ui/hero";
import Orgs from "@/components/ui/project";
import Footer from "@/components/ui/footer";

function Home() {
  return (
    <div className="bg-blue-300">
    <Sidebar/>
    <Hero/>
    <Orgs/>
    <Footer/>
    </div>
  );
}

export default Home;