import { Heart } from 'lucide-react';
import Section from './section.jsx';
import List from './list.jsx';

const Hobbies=()=>{
    return(
        <Section icon={<Heart/>} sectionTitle="Hobbies & Interests">
         <List item="Reading and exploring new ideas"/>
         <List item="Dancing and music"/>
         <List item="Sports and outdoor activities"/>
         <List item="Traveling and experiencing different cultures"/>
        </Section>
    )
};
export default Hobbies;