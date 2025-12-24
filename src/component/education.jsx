import Section from './section.jsx';
import { BookOpenText } from 'lucide-react';
const Education=()=>{
    return(
        <>
        <Section icon={<BookOpenText/>} sectionTitle="Education">
            <div className="pl-2">
            <h2 className="text-xl font-bold">Bachelor of Science in Computer Science</h2>
            <p className="pb-3">Rayat Bahra University,HSP</p>
            <h2 className="text-xl font-bold">Higher Secondary School</h2>
            <p className="pb-3">Government Senior Secondary School, HSP</p>
        </div>
        </Section>
        </>
    )
};
export default Education;