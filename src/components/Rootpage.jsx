import { useContext, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const Rootpage = () => {
    const { showProfile, setShowProfile, logOut } = useContext(AuthContext);
    const profileRef = useRef();

    const handleLogout = () => {
        logOut();
        setShowProfile(false);
    };

    // Close profile options when clicking outside the profile option area
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        };

        // Add event listener when profile options are visible
        if (showProfile) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        // Clean up the event listener when the component is unmounted
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showProfile, setShowProfile]);

    return (
        <div>
            <Navbar />
            {showProfile && (
                <div id="profileOption" ref={profileRef} className="lg:flex hidden justify-end">
                    <div className="fixed bg-orange-900 z-40 top-[7vh] right-[4vh] rounded-xl text-orange-900 font-bold p-2">
                        <Link to="/profile">
                            <button className="bg-orange-100 hover:bg-orange-200 rounded-lg w-[15vh] h-[4vh] mb-2">
                                Profile
                            </button>
                        </Link>
                        <br />
                        <Link>
                            <button
                                onClick={handleLogout}
                                className="flex items-center text-red-800 gap-2 justify-center bg-white border hover:text-red-600 rounded-lg w-[15vh] h-[4vh]"
                            >
                                Log Out
                                <img
                                    className="h-[3vh] rounded-full"
                                    src="https://i.postimg.cc/rw27kSv4/logout.png"
                                    alt="Logout Icon"
                                />
                            </button>
                        </Link>
                    </div>
                </div>
            )}
            <div className="mt-[95px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Rootpage;
