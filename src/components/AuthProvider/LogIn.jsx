import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from './AuthProvider';
import { Link, useNavigate } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Swal from 'sweetalert2';
import auth from '../../../firebase.config';

const LogIn = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const { googleSignUp, loginUser } = useContext(AuthContext);


    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


    const navigate = useNavigate();
    // Handle log in
    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when the login starts

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(async (res) => {
                Swal.fire({
                    icon: 'success',
                    title: '<p style="color: #7c2d12;">Logged In Successfully</p>',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#7c2d12'
                });

                // Reset the form
                e.target.email.value = "";
                e.target.password.value = "";

                navigate('/');
                
            })
            .catch((error) => {
                console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: '<p style="color: #7c2d12;">Log In Error</p>',
                    text: 'Something went wrong. Please try again later',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#7c2d12'
                });
            })
            .finally(() => {
                setLoading(false); 
            });
    }

    const handleSignIpWithGoogle =()=>{
        googleSignUp()
        .then(async (res) => {
  
            Swal.fire({
                title: '<p style="color: #7c2d12;">Logged In Successfully</p>',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#7c2d12'
            });
  
            navigate(location?.state ? location.state : '/');
  
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
    return (
        <div className='flex justify-center items-center h-[80vh] font-josefin-sans'>
            <div className="lg:w-[30vw] flex flex-col items-center lg:p-5 rounded-xl border mx-2 lg:mx-auto shadow-lg border-orange-100 shadow-orange-200">
                <p className='text-2xl text-center mb-6 font-bold text-orange-900'>Log In</p>

                <form onSubmit={handleLogin} action="">
                    <input
                        className="lg:w-[500px] w-[320px] p-2 border-b"
                        required
                        name="email"
                        type="email"
                        placeholder="Email"
                        disabled={loading} // Disable input when loading
                    />
                    <br /> <br />
                    <input
                        className="p-2 lg:w-[500px] w-[320px] border-b"
                        required
                        name="password"
                        type={passwordShow ? "text" : "password"}
                        placeholder="Password"
                        disabled={loading} // Disable input when loading
                    />
                    <br />
                    <div
                        onClick={() => setPasswordShow(!passwordShow)}
                        className="w-5 flex justify-end relative lg:left-[460px] left-[280px] bottom-[27px] cursor-pointer"
                    >
                        {passwordShow ? <LuEyeOff /> : <LuEye />}
                    </div>

                    {/* Login button */}
                    <div className='relative w-24'>
                        <input
                            type="submit"
                            value={loading ? '' : 'Log In'}
                            className="bg-orange-800 rounded-full text-white w-24 h-10 hover:bg-orange-700"
                            disabled={loading} // Disable button when loading
                        />
                        {loading && (
                            <div className='absolute inset-0 flex justify-center items-center'>
                                <img className='h-6 custom-spin' src="https://i.postimg.cc/qRVH32Nc/loading-icon.png" alt="Loading" />
                            </div>
                        )}
                    </div>

                    {/* Sign Up Link */}
                    <div className="flex justify-between gap-2 bg-orange-100 items-center rounded-full px-1 pl-3 mt-5">
                        <p className="my-3">Don't have an account yet?</p>
                        <Link to="/signup">
                            <button className="bg-orange-800 rounded-full text-white w-24 h-10">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </form>

                {/* Google Sign In */}
                <div>
                        <p className="text-center mt-5">Or, sign in with</p>
                        <div className='flex gap-3 mt-1 justify-center'>
                            <button
                                onClick={handleSignIpWithGoogle}
                                className='flex items-center gap-2 bg-orange-900 hover:bg-orange-800 w-24 justify-center text-white rounded-full p-2'
                                disabled={loading} // Disable Google sign-in button when loading
                            >
                                <FaGoogle className='text-white' />
                                <p className='relative top-[1.5px]'>Google</p>
                            </button>
                        </div>
                    </div>


            </div>
        </div>
    );
};

export default LogIn;
