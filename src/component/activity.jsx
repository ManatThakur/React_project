import { Crown } from 'lucide-react';
import Section from './section.jsx';
import List from './list.jsx';
const Activity=()=>{
    const activities=["Member of the Debate Club","Volunteer at Local Animal Shelter","Participant in Science Fairs","Organizer of Community Clean-up Events"];
    return(
        <Section icon={<Crown/>} sectionTitle=" Extracurricular Activity">
            <List item={activities}/>
           
        </Section>
    )
};
export default Activity;