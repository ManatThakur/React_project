import Photo from '../assets/photo.png';
const Header=()=>{
return(
    <>
   
        <div className="bg-blue-500 px-3 pt-8 pb-0 text-white rounded-t-xl flex items-center justify-between ">
        <div>
            <h1 className="text-left font-bold text-2xl">Manat Thakur</h1>
        <h1 className="text-left">Student</h1>
        </div>
        
      <img  className=" rounded-full w-24 h-24"src={Photo} alt="no image"/>
        </div>
    </>
)
};
export default Header;