const About = () => {
    return (

        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold text-center mb-6">About Me, Muhammad Nur</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:order-2">
                        <img src="https://avatars.githubusercontent.com/u/63946435?v=4" alt="About Me" className="rounded-lg shadow-lg" />
                    </div>
                    <div>
                        <p className="text-gray-800 text-lg mb-4">
                            Hello! I'm Muhammad Nur, a passionate web developer with a keen interest in creating intuitive and visually appealing web experiences. I specialize in front-end development and have expertise in technologies like HTML, CSS, JavaScript, and React.
                        </p>
                        <p className="text-gray-800 text-lg mb-4">
                            I love turning ideas into reality through coding. With a strong focus on user-centered design, I strive to build websites and web applications that not only look great but also provide a seamless user experience.
                        </p>
                        <p className="text-gray-800 text-lg">
                            When I'm not coding, you can find me exploring the latest trends in web development or diving into new technologies to enhance my skills and stay up to date with the ever-evolving tech landscape.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;
