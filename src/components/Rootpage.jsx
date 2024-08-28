import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";

const Rootpage = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Rootpage;