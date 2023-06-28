const Contact = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-4xl font-semibold text-center mb-6">Contact Me</h2>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
