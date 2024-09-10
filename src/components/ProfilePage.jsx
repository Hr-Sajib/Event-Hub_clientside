import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider/AuthProvider';
import Aos from "aos";
import 'aos/dist/aos.css';
import { deleteUser, reauthenticateWithCredential, EmailAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import auth from '../../firebase.config';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, reauthenticateWithPopup } from "firebase/auth";

const UserPage = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const [showDeleteOption, setShowDeleteOption] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const [provider, setProvider] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false); // Add state for delete loading

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        user && user.providerData ? setProvider(user.providerData[0].providerId) : null;
    }, [user]);

    const handlePasswordChange = async () => {
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, user.email)
                .then(() => {
                    Swal.fire({
                        title: '<p style="color: #7c2d12;">Email Sent</p>',
                        text: 'Check email to reset your password.',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#7c2d12'
                    });
                })
                .catch((error) => {
                    // Handle errors here
                    Swal.fire({
                        icon: 'error',
                        title: '<p style="color: #7c2d12;">Error Password Resetting</p>',
                        text: 'Something went wrong. Please try again later.',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#7c2d12'
                    });
                    console.log('Error:', error.message); // Optional logging
                });
    
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: '<p style="color: #7c2d12;">Error</p>',
                text: 'Something went wrong. Please try again later.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#7c2d12'
            });
            console.log('Error:', error.message); // Optional logging
        }
        setLoading(false);
    };
    

    const handleDeleteAccount = async (e) => {
        e.preventDefault();
        setDeleteLoading(true); // Start delete loading
        const password = e.target.password.value;

        const credential = EmailAuthProvider.credential(user.email, password);
        try {
            // Reauthenticate user
            await reauthenticateWithCredential(user, credential);
            // Delete user
            await deleteUser(user);

            Swal.fire({
                icon: 'success',
                title: '<p style="color: #7c2d12;">Account Deleted</p>',
                text: 'Your account has been successfully deleted.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#7c2d12'
            });
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: '<p style="color: #7c2d12;">Error</p>',
                text: 'Failed to delete account. Please try again later.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#7c2d12'
            });
        }
        setDeleteLoading(false); // End delete loading
    };



    const handleGoogleDelete = async () => {
        // const user = auth.currentUser;  // Get the currently logged-in user
        if (!user) {
            console.error("No user is currently logged in");
            return;
        }
    
        const provider = new GoogleAuthProvider();  // Create an instance of Google Auth provider
    
        try {
            // Step 1: Reauthenticate user with Google
            await reauthenticateWithPopup(user, provider);
            console.log("User reauthenticated successfully");
    
            // Step 2: Delete user account
            await deleteUser(user);
            console.log("User account deleted successfully");
    
            // Optional: Redirect to a different page or show a success message
            // navigate('/login');  // Navigate to login or another page
            // Or display a success message to the user
            setShowDeleteOption(false);
            Swal.fire({
                icon: 'success',
                title: '<p style="color: #7c2d12;">Account Deleted</p>',
                text: 'Your account has been successfully deleted.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#7c2d12'
            });
            navigate('/');
        } catch (error) {

            Swal.fire({
                icon: 'error',
                title: '<p style="color: #7c2d12;">Error</p>',
                text: 'Failed to delete account. Please try again later.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#7c2d12'
            });
    
            // Optional: Handle specific errors, such as reauthentication failure
            if (error.code === 'auth/requires-recent-login') {
                console.error("User needs to reauthenticate before deleting the account", error);
                // Prompt user to reauthenticate or handle accordingly
            } else {
                console.error("An unexpected error occurred: ", error);
            }


        }
    };




    return (
        <div className="relative h-[50vh]">
            {user ? (
                <div className="font-josefin-sans max-w-[1200px] mx-auto p-6 rounded-2xl mt-10 bg-white">
                    <h1 className="text-4xl text-center text-orange-800 mb-6">Profile Information</h1>
                    <div className="bg-orange-100 p-4 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl text-orange-700 mb-4">Basic Information</h2>
                        <div className='flex gap-3 items-center '>
                            <img data-aos="zoom-in" className='h-16 w-16 rounded-full border-2 border-orange-700' src={ user.photoURL ||  'https://i.postimg.cc/B67jKZxT/user-9303328.png'} alt="" />
                            <div data-aos="fade-right">
                                <p className="text-xl mb-2">
                                <strong>Name:</strong> {user.displayName}
                                </p>
                                <p className="text-xl">
                                    <strong>Email:</strong> {user.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl text-orange-700 mb-4">
                            You can change password through an email
                        </h2>

                        <div className="relative w-[12.5vw]">
                            <button
                                onClick={handlePasswordChange}
                                className="bg-orange-800 w-[12.5vw] rounded-full text-white px-5 h-10 hover:bg-orange-700"
                                disabled={loading}
                            >
                                {loading ? '' : 'Send Password Reset Mail'}
                            </button>

                            {loading && (
                                <div className="absolute inset-0 flex bottom-2 justify-center items-center">
                                    <img
                                        className="h-6 custom-spin"
                                        src="https://i.postimg.cc/qRVH32Nc/loading-icon.png"
                                        alt="Loading"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end mt-5">
                        <button
                            onClick={() => setShowDeleteOption(true)}
                            className="bg-red-700 mr-3 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300"
                        >
                            Delete My Account
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center bg-orange-950 p-3">
                    <img
                        className="h-6 custom-spin"
                        src="https://i.postimg.cc/qRVH32Nc/loading-icon.png"
                        alt="Loading"
                    />
                </div>
            )}

            {showDeleteOption && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 z-20"
                        onClick={() => setShowDeleteOption(false)}
                    ></div>

                    {/* Modal */}
                    <div
                        data-aos="zoom-in"
                        className="fixed inset-0 flex justify-center items-center z-30"
                    >
                        <div className="bg-orange-200 w-[50vh] font-josefin-sans p-5 rounded-xl shadow-lg">
                            <p className="text-orange-900 text-2xl mt-2">
                                Deleting Your Account
                            </p>
                            <p className="text-orange-900 text-5xl">Are you sure?</p>
                            {provider == 'password' && (
                                <form onSubmit={handleDeleteAccount}>
                                    <input
                                        required
                                        name="password"
                                        type="password"
                                        placeholder="Type Your Password"
                                        className="h-[5vh] w-full rounded-full mt-3 pl-5 bg-gray-100"
                                    />
                                    <div className="mt-5 flex justify-end relative">
                                        <button
                                            onClick={() => setShowDeleteOption(false)}
                                            className="bg-green-800 hover:bg-green-700 text-white rounded-full p-2 w-[10vh] mr-2"
                                        >
                                            No
                                        </button>

                                        {/* Delete button with loading spinner */}
                                        <div className='relative'>
                                            <button
                                                type="submit"
                                                className="bg-red-700 text-white h-10 rounded-full p-2 hover:bg-red-600 w-[20vh]"
                                                disabled={deleteLoading}
                                            >
                                                {deleteLoading ? '' : 'Sure, Delete'}
                                            </button>

                                            {deleteLoading && (
                                                <div className="absolute inset-0 flex justify-center items-center ">
                                                    <img
                                                        className="h-6 custom-spin"
                                                        src="https://i.postimg.cc/qRVH32Nc/loading-icon.png"
                                                        alt="Loading"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            )}


                            {/* Oauth Google delete  */}
                            {provider == 'google.com' && (
                                <form onSubmit={handleDeleteAccount}>
                                  
                                    <div className="mt-5 flex justify-end relative">
                                        <button
                                            onClick={() => setShowDeleteOption(false)}
                                            className="bg-green-800 hover:bg-green-700 text-white rounded-full p-2 w-[10vh] mr-2"
                                        >
                                            No
                                        </button>

                                        {/* Delete button with loading spinner */}
                                        <div className='relative'>
                                            <button
                                                onClick={handleGoogleDelete}
                                                className="bg-red-700 text-white h-10 rounded-full p-2 hover:bg-red-600 w-[20vh]"
                                                disabled={deleteLoading}
                                            >
                                                {deleteLoading ? '' : 'Sure, Delete'}
                                            </button>

                                            {deleteLoading && (
                                                <div className="absolute inset-0 flex justify-center items-center ">
                                                    <img
                                                        className="h-6 custom-spin"
                                                        src="https://i.postimg.cc/qRVH32Nc/loading-icon.png"
                                                        alt="Loading"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserPage;
