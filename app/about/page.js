const About = () => {
    return (

        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold text-center mb-6">About Me, Muhammad Nur</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:order-2">

                        <img src="Nur.jpg" alt="About Me" className="rounded-lg shadow-lg" />
                    </div>
                    <div>
                        <p className="text-gray-800 text-lg mb-4">
                            Hello! I'm Muhammad Nur, a passionate AI based Web application developer with a strong track record of success. I have been developing AI-powered web applications for over 5 years, and I have a deep understanding of the latest technologies in this field. I am also proficient in a variety of programming languages, including Python, PHP and JavaScript.
                        </p>
                        <p className="text-gray-800 text-lg mb-4">
                            I am a graduate of Monipur High School, where I completed my PEC, JSC, and SSC. I then went on to graduate from St. Joseph Higher Secondary School with GPA-5 in HSC. After graduating, I started my own AI-based web development company called "Code & Cognition".
                        </p>
                        <p className="text-gray-800 text-lg">
                            At Code & Cognition, I have developed a wide range of AI-powered web applications for businesses of all sizes. 
                        </p>
                        <p className="text-gray-800 text-lg">
                            I am also a frequent speaker at industry conferences and meetups. I am passionate about sharing my knowledge and expertise with others, and I am always looking for new ways to learn and grow.</p>
                        <p className="text-gray-800 text-lg">
                            I am a highly motivated and results-oriented individual. I am also a team player and I am always willing to go the extra mile to get the job done. I am confident that I can make a significant contribution to any team or organization.

                        </p>
                        <p className="text-gray-800 text-lg">
                            If you are looking for an experienced and talented AI based Web application developer, I would be honored to discuss your needs with you.</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;
