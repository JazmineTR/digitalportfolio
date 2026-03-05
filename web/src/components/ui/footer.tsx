import { Link } from "react-router-dom";
import { LinkedInLogoIcon } from '@radix-ui/react-icons';

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-4 bg-black text-white font-mono py-10">
      
      &copy; 2026 jazmine le
      <Link to="https://www.linkedin.com/in/jazmine-le-t/">
                        <LinkedInLogoIcon width={40} height={40} className="border-2 hover:border-indigo-800" color="white" />
                    </Link>
      </div>
  );
};

export default Footer;