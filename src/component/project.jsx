import Section from './section.jsx';
import { Briefcase } from 'lucide-react';
import ProItems from './pro.jsx';
const Projects = () => {
    const items = ["React", "Tailwind"];
    const items2=["HTML","CSS","JavaScript"];
    return (
        <Section icon={<Briefcase />} sectionTitle="Projects">
            <ProItems
                heading="Personal Portfolio Website"
                description="Developed a responsive personal portfolio website using React.js and Tailwind CSS to showcase my projects and skills."
                tech={items}
            />
             <ProItems
                heading="E-commerce Website"
                description="Added an e-commerce website with features like product listing, shopping cart, and user authentication using HTML, CSS, and JavaScript.I create a clone of Myntra website."
                tech={items2}
            />
          
            
        </Section>
    );
};

export default Projects;