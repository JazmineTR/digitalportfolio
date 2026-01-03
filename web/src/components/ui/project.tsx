import VSAIcon from "../assets/vsa.png";
import CircleIcon from "../assets/circlek.png"

import {GlobeIcon} from '@radix-ui/react-icons';


const Orgs = () => {
  return (
    <>
        <div className="bg-blue-500 m-20 max-w-full">
            <div className="grid justify-items-center m-10">
                <h1 className="text-3xl tracking-wider flex text-black mt-10 font-mono underline">organizations i'm a part of</h1>
            </div>

    
        <div>
            <div className="grid grid-cols-2 gap-4 p-5">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                    <div className="md:flex">
                        <div className='p-8'>
                            <div className="lowercase tracking-wide text-sm font-semibold font-mono">
                                Vietnamese Student Association (VSA)
                            </div>
                            <p className="mt-2 text-slate-500 font-mono">
                                website developer for the vsa chapter at johns hopkins university
                            </p>
                        </div>
                        <div className="md:shrink-0  p-5">
                                <img src={VSAIcon} alt="VSA" width={150} height={150}/>
                            </div>
                    </div>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                    <div className="md:flex">
                        <div className="md:shrink-0  p-5">
                            <GlobeIcon width={150} height={150}/>
                        </div>
                        <div className='p-8'>
                            <div className="lowercase tracking-wide text-sm font-semibold font-mono">
                                Circle K International 
                            </div>
                            <p className="mt-2 text-slate-500 font-mono">
                                member/volunteer with circle k international chapter at johns hopkins university
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <hr/>
        </div>

    </div>
    
    </>
    
  );
};

export default Orgs;