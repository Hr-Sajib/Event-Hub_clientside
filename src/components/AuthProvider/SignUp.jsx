import React, { useState, useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from './AuthProvider';
import { Link } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getAuth, updateProfile } from "firebase/auth";
import auth from '../../../firebase.config';
import { sendEmailVerification } from "firebase/auth";

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);
    const { googleSignUp, createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const termsChecked = e.target.checkbox.checked;

        // Password validation
        if (!/^(?=.*\d)/.test(password)) {
            toast("Use a valid password with at least one number.");
            setLoading(false);
            return;
        }
        if (!/^(?=.*[a-z])/.test(password)) {
            toast("Use a password with at least one lowercase letter.");
            setLoading(false);
            return;
        }
        if (!/^(?=.*[A-Z])/.test(password)) {
            toast("Use a password with at least one uppercase letter.");
            setLoading(false);
            return;
        }
        if (!/^(?=.*[!@#$%^&*])/.test(password)) {
            toast("Use a password with at least one special character.");
            setLoading(false);
            return;
        }
        if (!/^(?=.{6,})/.test(password)) {
            toast("Password length should be at least 6 characters.");
            setLoading(false);
            return;
        }

        // Check if terms are accepted
        if (!termsChecked) {
            toast("Please accept terms and conditions.");
            setLoading(false);
            return;
        }

        // Create user in Firebase
        createUser(auth, email, password)
            .then(async (res) => {
                Swal.fire({
                    icon: 'success',
                    title: '<p style="color: #7c2d12;">Signed Up Successfully</p>',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#7c2d12'
                });

                // send varification mail
                const auth = getAuth();
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    console.log('V mail sent')
                });

                // Update profile with name
                await updateProfile(auth.currentUser, {
                    displayName: name
                });

                // Clear form
                e.target.name.value = "";
                e.target.email.value = "";
                e.target.password.value = "";
                e.target.checkbox.checked = false;

                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: 'success',
                    title: '<p style="color: #7c2d12;">Signed Up Successfully</p>',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#7c2d12'
                });
                setLoading(false);
            });
    };


    




    const handleSignIpWithGoogle =()=>{
        googleSignUp()
        .then(async (res) => {
  
            Swal.fire({
              title: 'Logged In',
              icon: 'success',
              confirmButtonText: 'OK'});
  
            navigate(location?.state ? location.state : '/');
  
        })
        .catch((error) => {
            console.log(error.message);
        });
    }




    return (
        <div className='flex justify-center items-center h-[80vh] font-josefin-sans'>
            <ToastContainer />
            <div className="lg:w-[30vw] flex flex-col items-center lg:p-5 rounded-xl shadow-lg border border-orange-100 shadow-orange-200 mx-2 lg:mx-auto">
                <p className='text-2xl text-center mb-6 font-bold text-orange-900'>Sign Up</p>

                <form onSubmit={handleRegister}>
                    <input
                        className="p-2 lg:w-[500px] w-[320px] border-b"
                        name="name"
                        type="text"
                        placeholder="Name"
                    />{" "}
                    <br /> <br />
                    <input
                        className="lg:w-[500px] w-[320px] p-2 border-b"
                        name="email"
                        type="email"
                        placeholder="Email"
                    />{" "}
                    <br /> <br />
                    <input
                        className="p-2 lg:w-[500px] w-[320px] border-b"
                        name="password"
                        type={passwordShow ? "text" : "password"}
                        placeholder="Password"
                    />
                    <br />
                    <div
                        onClick={() => setPasswordShow(!passwordShow)}
                        className="w-5 flex justify-end relative lg:left-[460px] left-[280px] bottom-[27px]"
                    >
                        {passwordShow ? <LuEyeOff /> : <LuEye />}
                    </div>
                    <div className="flex gap-2 my-[2vh]">
                        <input type="checkbox" name="checkbox" id="" />
                        <p>Accept all <Link to="/terms&conditions" className='text-blue-800'>terms and conditions</Link></p>
                    </div>

                    <div className='relative w-24'>
                        <input
                            type="submit"
                            value={loading ? '' : 'Sign Up'}
                            className="bg-orange-800 rounded-full text-white w-24 h-10 hover:bg-orange-700"
                            disabled={loading}
                        />
                        {loading && (
                            <div className='absolute inset-0 flex justify-center items-center'>
                                <img className='h-6 custom-spin' src="https://i.postimg.cc/qRVH32Nc/loading-icon.png" alt="Loading" />
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between gap-2 bg-orange-100 items-center rounded-full px-1 pl-3 mt-5">
                        <p className="my-3">Do you already have an account?</p>
                        <Link to="/login">
                            <button className="bg-orange-800 rounded-full text-white w-24 h-10">
                                Log In
                            </button>
                        </Link>
                    </div>
                </form>
                <div>
                        <p className="text-center mt-5">Or, sign in with</p>
                        <div className='flex gap-3 mt-1 justify-center'>
                            <button
                                onClick={handleSignIpWithGoogle}
                                className='flex items-center gap-2 bg-orange-900 hover:bg-orange-800 w-24 justify-center text-white rounded-full p-2'
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

export default SignUp;
