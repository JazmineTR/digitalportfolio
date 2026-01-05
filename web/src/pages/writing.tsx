import Footer from "@/components/ui/footer";
import Sidebar from "@/components/ui/sidebar";
import PoemOrganizer from "@/components/ui/writings";

function Writing() {
  return (
    <div className="bg-blue-300">
      <Sidebar/>
        <PoemOrganizer/>
      <Footer/>
    </div>
  );
}

export default Writing;