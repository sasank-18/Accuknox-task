import {  useSelector } from "react-redux"
import Widget from "./Widget"


const DashboardCategory = () => {
  const {data} = useSelector((data)=>data.dashboardData)
  const searchValue = useSelector((data)=> data.dashboardData.searchValue).toLowerCase()
    
  const filterData = data.filter((data)=>{
     return data.category.toLowerCase().includes(searchValue) 
     || data.widget.some(widget =>(
        widget.name.toLowerCase().includes(searchValue) ||
        widget.text.toLowerCase().includes(searchValue)
     ))
  })


  return (
    <>
     {filterData.map((data)=>(
        <div className="px-20 md:px-14 py-2 text-base mb-1 font-bold" key={data?._id}>
            {data.category}
            <Widget id = {data?._id} category = {data?.category} widgetData={data?.widget}/>
        </div>
     ))}
     </>
  )
}

export default DashboardCategory