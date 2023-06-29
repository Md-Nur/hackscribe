const Hero = () => {
    return (
        <section className="bg-gray-800 py-20"
       
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl lg:text-6xl text-white font-bold mb-6">
                        Welcome to HackScribe
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-400 mb-12">
                        Explore the latest articles on various coding topics
                    </p>
                    <a
                        href="#content"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                    >
                        View Articles
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
