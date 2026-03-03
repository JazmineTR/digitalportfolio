import JazPic from "/about/reading.png"

const AboutHero = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-around items-center p-6 lg:p-10 gap-8 lg:gap-10 text-white">
            {/* Profile picture */}
            <div className="w-48 sm:w-64 lg:w-1/3 flex-shrink-0 mx-auto lg:mx-0">
                <img
                    src={JazPic}
                    alt="Jazmine reading"
                    className="rounded-full w-full border-8 border-black"
                />
            </div>

            {/* About text */}
            <div className="w-full lg:w-1/3 text-center lg:text-left">
                <p className="text-3xl lg:text-4xl mb-4 font-mono text-black underline">
                    <strong>About Jazmine Trinh Le</strong>
                </p>
                <p className="text-lg lg:text-xl text-black font-mono">
                    Hey! I'm <strong>Jazmine Trinh Le</strong>, I prefer to be referred as{" "}
                    <strong className="underline">Jazmine Trinh</strong> but legally{" "}
                    <strong>Jazmine Le</strong>. I'm a second-year Computer Science major at Johns
                    Hopkins University, minoring in Writing Seminars and Computer Integrated Surgery.
                    I'm looking for a role in software engineering, testing, and perhaps to get
                    involved with medical devices in the future.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;