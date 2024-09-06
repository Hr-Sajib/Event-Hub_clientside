import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";


const Rootpage = () => {

    const {showProfile,setShowProfile, logOut} = useContext(AuthContext);

    const handleLogout=()=>{
        logOut();
        setShowProfile(false);
    }


    return (
        <div>
            <Navbar/>
            {
                showProfile &&
                <div className=" lg:flex hidden justify-end">
                    <div className="fixed bg-orange-900 z-40 top-[7vh] right-[4vh] rounded-xl text-orange-900 font-bold p-2">
                        <Link to="/profile"><button className="bg-orange-100 hover:bg-orange-200 rounded-lg w-[15vh] h-[4vh] mb-2">Profile</button></Link><br />
                        <Link><button onClick={handleLogout} className="flex  items-center text-red-800 gap-2 justify-center bg-white border hover:bg-red-900 rounded-lg w-[15vh] h-[4vh]">Log Out<img className="h-[3vh] rounded-full" src="https://i.postimg.cc/rw27kSv4/logout.png"></img></button></Link>
                    </div>
                </div>
            }
            <div className="mt-[95px]">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Rootpage;