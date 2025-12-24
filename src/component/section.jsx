const Section=({icon,children,sectionTitle})=>{
    return(
    <div className="bg-gray-100 pt-0 text-1xl pl-3">
        <div className="flex gap-0 items-center pt-4 pb-3 gap-2">  
            {icon}
            <h1 className="font-bold">{sectionTitle}</h1>
        </div>
        <div className="pb-6 text-left">
            {children}
        </div>
        
    </div>
    )
}
export default Section;