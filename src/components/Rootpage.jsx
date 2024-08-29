import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";

const Rootpage = () => {
    return (
        <div>
            <Navbar/>
            <div className="mt-[95px]">
            <Outlet/>
            </div>
        </div>
    );
};

export default Rootpage;