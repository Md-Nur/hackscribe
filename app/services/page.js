import { FaCode, FaDesktop, FaServer } from 'react-icons/fa';

const MyServices = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'From front-end to back-end, I can bring your ideas to life with clean and efficient code.',
            icon: <FaCode />,
        },
        {
            title: 'Responsive Design',
            description: 'Create a seamless user experience with responsive designs that adapt to various devices.',
            icon: <FaDesktop />,
        },
        {
            title: 'Server Management',
            description: 'Ensure your web applications are running smoothly with efficient server management.',
            icon: <FaServer />,
        },
    ];

    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold text-center mb-6">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                            <div className="rounded-full bg-blue-500 p-3 mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {service.icon}
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyServices;
