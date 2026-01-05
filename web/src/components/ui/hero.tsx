import { Link } from "react-router-dom";

import { InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

import HeroPic from '/about/jaz.jpg';
import { Button } from "./button";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
            <div className="lg:w-1/3 ssm:w-fit">
                <p className="text-4xl mb-5 text-black font-mono"> i'm</p>
                <h1 className="text-6xl sm:text-6xl font-mono tracking-tight">
                    <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="inline-block overflow-hidden whitespace-nowrap border-r-2 pr-2"
                    >jazmine trinh</motion.span>
                </h1>
                <hr />
                <p className="mt-10 text-xl text-black font-mono">
                    hey👋🏻! software engineer in the progress from 📍san diego, california!
                </p>
            </div>
            <div className="w-1/3 items-center ssm:w-fit">
                <img src={HeroPic} alt="" width={10} height={10}
                    className='rounded-full w-full border-8 border-black' />
            </div>
            <div className="w-1/3 ssm:w-fit">
                <p className="text-4xl mb-4 font-mono text-black underline"><strong>about me</strong></p>
                <p className="text-xl text-black font-mono">
                    I'm a second-year Computer Science major at Johns Hopkins University💙,
                    minoring in Writing Seminars and Computer Integrated Surgery.
                    Currently interested in app development, AI agents, and medical devices.
                </p>
                <Link to="/about">
                <Button className="px-10 py-2 my-3 rounded-full font-mono hover:bg-white hover:text-black">
                    Learn more...
                </Button>
                </Link>

                <div className="flex mt-6 space-x-4 cursor-pointer">
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