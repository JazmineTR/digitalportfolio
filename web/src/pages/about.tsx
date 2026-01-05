import Footer from "@/components/ui/footer";
import Sidebar from "@/components/ui/sidebar";
import AboutHero from "@/components/ui/aboutHero";
import BeyondSchoolSection from "@/components/ui/project";

function About() {
  return (
    <div className="bg-blue-300">
      <Sidebar/>
        <AboutHero/>
        <BeyondSchoolSection/>
      <Footer/>
    </div>
  );
}

export default About;