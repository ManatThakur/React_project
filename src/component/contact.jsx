import { Globe } from 'lucide-react';
import Section from './section.jsx';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
const Contact=()=>{
    return(
        <Section icon={<Globe/>} sectionTitle="Contact & Social media">
            <p>Email: manatthakur7@gmail.com</p>
            <p>Phone no: 9478426647</p>
            <div className="pb-2 flex pt-3 text-blue-500" >
            <a href="https://github.com/settings/profile"> {<Github/>}</a>
            <span className="pl-2">GitHub</span>
            
            </div>
             <div className="pb-2 flex text-blue-500" >
            <a href="#"> <Linkedin/></a>
            <span className="pl-2">LinkedIn</span>
            
            </div>
        </Section>
    )
};
export default Contact;
