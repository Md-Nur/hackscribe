import { textFont, titleFont } from "../utils/font";

const Hero = () => {
    return (
        <section className="bg-primary py-20"

        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className={`text-4xl lg:text-6xl text-secondary font-bold mb-6 ${titleFont.className}`}>
                        Welcome to HackScribe
                    </h1>
                    <p className={`text-lg lg:text-xl text-secondaryLight mb-12 ${textFont.className}`}>
                        Explore the latest articles on various coding topics
                    </p>
                    <a
                        href="/create"
                        className="border border-secondary text-secondary hover:bg-secondary hover:text-primary font-bold py-3 px-8 rounded-full transition duration-300"
                    >
                        Create Articles
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
