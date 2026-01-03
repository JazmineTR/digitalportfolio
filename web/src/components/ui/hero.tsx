import Sidebar from "./sidebar";

import {InstagramLogoIcon,LinkedInLogoIcon,GitHubLogoIcon} from '@radix-ui/react-icons';

import HeroPic from '../assets/Jaz.jpg';
import { Button } from "./button";
const Hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
        <div className="lg:w-1/3 ssm:w-fit">
        <p className="text-4xl mb-5 text-black font-mono"> i'm</p>
        <h1 className="text-6xl font-mono">jazmine le</h1>
        <hr/>
        <p className="mt-10 text-xl text-black font-sans">
            hey👋🏻! software engineer in the progress from 📍san diego, california!
        </p>
        </div>
        <div className="w-1/3 items-center ssm:w-fit">
            <img src= {HeroPic} alt="" width={10} height={10} 
            className = 'rounded-full w-full border-8 border-black'/>
        </div>
        <div className="w-1/3 ssm:w-fit">
            <p className="text-4xl mb-4 font-mono text-black underline">about me</p>
            <p className="text-xl text-black">
                I'm a second-year Computer Science major at Johns Hopkins University💙, 
                minoring in Writing Seminars and Computer Integrated Surgery.
                Currently interested in app development, AI agents, and medical devices. 
            </p>
            <Button className="px-10 py-2 my-3 rounded-full hover:bg-white hover:text-black">
                Learn more...
            </Button>

            <div className="flex mt-6 space-x-4 cursor-pointer">
                <InstagramLogoIcon width={40} height={40} className="border-2 hover:border-indigo-800 rounded-full" color="black"/>
                <LinkedInLogoIcon  width={40} height={40} className="border-2 hover:border-indigo-800 rounded-full" color="black"/>
                <GitHubLogoIcon  width={40} height={40} className="border-2 hover:border-indigo-800 rounded-full" color="black"/>

            </div>
        </div>
    </section>
  );
};
export default Hero;