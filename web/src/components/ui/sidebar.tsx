import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex items-end justify-between p-10 lg:flex-row">
        <div >
            <a href= "#" className = "text-black font-mono text-3xl tracking-wider flex items-center">jazmine trinh</a>
        </div>
        <div>
            <div>
                <Link to="/" className = "text-black font-mono underline hover:bg-white rounded-full px-5 py-2 text-xl">home</Link>
                <Link to="/about" className = "text-black font-mono underline hover:bg-white rounded-full px-5 py-2 text-xl">about</Link>
                <Link to="/writings" className = "text-black font-mono underline hover:bg-white rounded-full px-5 py-2 text-xl">writings</Link>
                <a
                    href="resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black font-mono underline hover:bg-white rounded-full px-5 py-2 text-xl"
                  >
                    resume
                  </a>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;