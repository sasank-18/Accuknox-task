import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addSearchValue } from "../slice/dashboardSlice";

const Navbar = () => {
  const searchRef = useRef();
  const dispatch = useDispatch();
const handleSearch = ()=>{
     dispatch(addSearchValue(searchRef.current.value))
}
  return (
    <div className="flex z-30 items-center sticky top-0 shadow-md justify-center  w-full px-6 py-3  bg-white">
         <input 
         ref={searchRef}
         className="max-w-[20rem] bg-gray-200 w-full rounded-md px-3 py-1 outline-none" type="text" placeholder="search..."
         onChange={handleSearch}
         />
    </div>
  )
}

export default Navbar;