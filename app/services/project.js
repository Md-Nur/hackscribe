import Image from 'next/image';
import saifAcademy from '../../public/projectImg/saifacademy.png';
import textManipulator from '../../public/projectImg/textmanipulator.png';
import saazidGeneralStore from '../../public/projectImg/saazidgeneralstore.png';
import { textFont, titleFont } from '../utils/font';


const ProjectCard = ({ title, url, imageUrl }) => {
    return (
        <div className="bg-transparent shadow-lg rounded-lg overflow-hidden">
            <Image className="w-full" src={imageUrl} alt={title} />
            <div className="p-4">
                <h3 className={`text-xl font-semibold mb-2 ${textFont.className}`}>{title}</h3>
                <button className="bg-primary text-secondary hover:bg-primaryDark py-2 px-4 mt-4 rounded" >
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
            imageUrl: saifAcademy,
            url: 'http://saifacademy.rf.gd/',
        },
        {
            id: 2,
            title: 'Text Manipulator',
            imageUrl: textManipulator,
            url: 'https://muhammad-nur-text.netlify.app/',
        },
        {
            id: 3,
            title: 'Saazid General Store',
            imageUrl: saazidGeneralStore,
            url: 'http://saazid-general-store.rf.gd/',
        },

    ];

    return (
        <>
            <div

                className="container mx-auto px-4 h-96 bg-cover bg-center m-10 flex items-center justify-center"
                style={{
                    backgroundImage: 'url("hero.jpg")',
                    backgroundAttachment: 'fixed',
                    
                }}
            >
            <h2 className={`text-5xl text-white font-bold text-center mb-6 ${titleFont.className}`}
            style={
                {
                    textShadow: '5px 5px 5px #000000',
                }
            }
            >Projects</h2>
            </div >

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
