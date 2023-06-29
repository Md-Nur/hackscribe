
const ProjectCard = ({ title, url, imageUrl }) => {
    return (
        <div className="bg-transparent shadow-lg rounded-lg overflow-hidden">
            <img className="w-full" src={imageUrl} alt={title} />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded" >
                    <a target="_blank" href={url}>Visit</a>
                </button>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Saif Academy',
            imageUrl: './projectImg/saifacademy.png',
            url: 'http://saifacademy.rf.gd/',
        },
        {
            id: 2,
            title: 'Text Manipulator',
            imageUrl: './projectImg/textmanipulator.png',
            url: 'https://muhammad-nur-text.netlify.app/',
        },

    ];

    return (
        <>
            <div

                className="container mx-auto px-4 h-96 bg-cover bg-center m-10"
                style={{
                    backgroundImage: 'url("hero.jpg")',
                    backgroundAttachment: 'fixed',
                }}
            >
            </div >
            <h2 className="text-4xl font-semibold text-center mb-6">Projects</h2>

            <div className="px-10 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {
                    projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            imageUrl={project.imageUrl}
                            url={project.url}
                        />
                    ))
                }
            </div >
        </>
    );
};

export default Projects;
