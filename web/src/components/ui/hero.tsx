import { Link } from "react-router-dom";
import { InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import HeroPic from '/about/jaz.jpg';
import { Button } from "./button";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-around items-center p-6 lg:p-10 gap-8 lg:gap-10 text-white">
            {/* Text intro */}
            <div className="w-full lg:w-1/3 text-center lg:text-left">
                <p className="text-3xl lg:text-4xl mb-3 text-black font-mono">i'm</p>
                <h1 className="text-5xl sm:text-6xl font-mono tracking-tight">
                    <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="inline-block overflow-hidden whitespace-nowrap border-r-2 pr-2"
                    >jazmine trinh</motion.span>
                </h1>
                <hr className="my-4" />
                <p className="text-lg lg:text-xl text-black font-mono">
                    hey👋🏻! software engineer in the progress from 📍san diego, california!
                </p>
            </div>

            {/* Profile picture */}
            <div className="w-48 sm:w-64 lg:w-1/3 flex-shrink-0">
                <img
                    src={HeroPic}
                    alt="Jazmine Trinh"
                    className="rounded-full w-full border-8 border-black"
                />
            </div>

            {/* About blurb */}
            <div className="w-full lg:w-1/3 text-center lg:text-left">
                <p className="text-3xl lg:text-4xl mb-4 font-mono text-black underline"><strong>about me</strong></p>
                <p className="text-lg lg:text-xl text-black font-mono">
                    I'm a second-year Computer Science major at Johns Hopkins University💙,
                    minoring in Writing Seminars and Computer Integrated Surgery.
                    Currently interested in app development, AI agents, and medical devices.
                </p>
                <Link to="/about">
                    <Button className="px-10 py-2 my-3 rounded-full font-mono hover:bg-white hover:text-black">
                        Learn more...
                    </Button>
                </Link>

                <div className="flex justify-center lg:justify-start mt-6 space-x-4 cursor-pointer">
                    <Link to="https://www.instagram.com/jjazminerice/">
                        <InstagramLogoIcon width={40} height={40} className="border-2 hover:border-indigo-800 rounded-full" color="black" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/jazmine-le-t/">
                        <LinkedInLogoIcon width={40} height={40} className="border-2 hover:border-indigo-800 rounded-full" color="black" />
                    </Link>
                    <Link to="https://github.com/JazmineTR">
                        <GitHubLogoIcon width={40} height={40} className="border-2 hover:border-indigo-800 rounded-full" color="black" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;