import JazPic from "../assets/reading.png"

const AboutHero = () => {
    return (
        <section className="flex justify-around items-center p-5 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
        <div>
            <div className="w-1/3 items-center ssm:w-fit">
            <img src= {JazPic} alt="" width={10} height={10} 
            className = 'rounded-full w-full border-8 border-black'/>
            </div>
        </div>
        <div className="w-1/3 ssm:w-fit">
            <p className="text-4xl mb-4 font-mono text-black underline"><strong>About Jazmine Trinh Le</strong></p>
            <p className="text-xl text-black font-mono">
                Hey! I'm <strong>Jazmine Trinh Le</strong>, I prefer to be referred as <strong className="underline">Jazmine Trinh</strong> but legally <strong>Jazmine Le</strong>. I'm a second-year Computer Science major at Johns Hopkins University, 
                minoring in Writing Seminars and Computer Integrated Surgery. I'm looking for a role in software engineering, 
                testing, and perhaps to get involved with medical devices in the future.
            </p>
        </div>
        </section>
    );
};

export default AboutHero;