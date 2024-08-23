import DashboardCategory from "./DashboardCategory";
import Heading from "./Heading";
import Navbar from "./Navbar";

const Body = () => {
  return <div className="w-full  relative">
    <Navbar/>
    <Heading/>
    <DashboardCategory/>
  </div>;
};

export default Body;
