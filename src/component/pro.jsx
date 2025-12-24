import Button from './button.jsx';

const ProItems=({heading,description,tech})=>{
    return(
<div className=" bg-gray-300 rounded-xl  p-3 m-5">
    <h2 className="text-xl font-bold pb-3">{heading}</h2>
    <p className="text-gray-700 pb-3">{description}</p>
        <div className="mt-2 pb-3">{Array.isArray(tech) ? tech.map((t, idx) => <Button key={idx} title={t} />) : tech}</div>
</div>

    )
};
export default ProItems;