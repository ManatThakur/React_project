import { ChevronsLeftRight } from 'lucide-react';
import Section from './section.jsx';
import Button from './button.jsx';
const Skills=()=>{
    return(
        <Section icon={<ChevronsLeftRight/>} sectionTitle="Skills">
            <Button title="React"/>
            <Button title="JavaScript"/>
            <Button title="HTML"/>
            <Button title="CSS"/>
        </Section>
    )

};
export default Skills;