const Hero = () => {
    return (
        <section className="bg-[#32445d] py-20"

        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl lg:text-6xl text-[#c8ebf5] font-bold mb-6 ">
                        Welcome to HackScribe
                    </h1>
                    <p className="text-lg lg:text-xl text-[#9bb7be] mb-12">
                        Explore the latest articles on various coding topics
                    </p>
                    <a
                        href="/create"
                        className="bg-[#c8ebf5] hover:bg-[#99bbc5] text-[#32445d] font-bold py-3 px-8 rounded-full transition duration-300"
                    >
                        Create Articles
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
