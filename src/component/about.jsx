import { User } from 'lucide-react';
import Section from './section.jsx';
const About=()=>{
    return(
    <Section icon={<User/>}  className="font-bold"sectionTitle="About Me">
        <p>
        I am a passionate developer with a love for creating dynamic and responsive web applications. With experience in various technologies, I enjoy turning ideas into reality through code.
        and responsive web applications. I learned HTML CSS and JavaScript and I am familiar with frameworks like React.js and Tailwind CSS.
        </p>
    </Section>
            );
};
export default About;