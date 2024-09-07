import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider/AuthProvider';
import Aos from "aos";
import 'aos/dist/aos.css';
import { deleteUser, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import auth from '../../firebase.config';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const { user } = useContext(AuthContext);
    const [showDeleteOption, setShowDeleteOption] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const handlePasswordChange = async () => {
        try {
            // Replace with your logic to handle password change
            // For example, call an API endpoint to update the password
            // await changePassword(newPassword);

            Swal.fire({
                icon: 'success',
                title: '<p style="color: #7c2d12;">Password Changed</p>',
                text: 'Your password has been successfully updated.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#7c2d12'
            });

            setNewPassword('');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: '<p style="color: #7c2d12;">Error</p>',
                text: 'Something went wrong. Please try again later.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#7c2d12'
            });
        }
    };

    const handleDeleteAccount = async () => {
        if (user && password) {
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
                setShowDeleteOption(false);
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
        } else {
            Swal.fire({
                icon: 'warning',
                title: '<p style="color: #7c2d12;">Password Required</p>',
                text: 'Please enter your password to confirm account deletion.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#7c2d12'
            });
        }
    };
    

    return (
        <div className='relative h-[50vh]'>
            {user ? (
                <div className="font-josefin-sans max-w-[1200px] mx-auto p-6 rounded-2xl mt-10 bg-white">
                    <h1 className="text-4xl text-center text-orange-800 mb-6">Profile Information</h1>
                    <div className="bg-orange-100 p-4 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl text-orange-700 mb-4">Basic Information</h2>
                        <p className="text-xl mb-2"><strong>Name:</strong> {user.displayName}</p>
                        <p className="text-xl mb-4"><strong>Email:</strong> {user.email}</p>
                    </div>
                    <div className="bg-orange-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl text-orange-700 mb-4">Change Password</h2>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="New Password"
                            className="px-4 py-2 rounded-lg mb-4 w-full"
                        />
                        <button
                            onClick={handlePasswordChange}
                            className="bg-orange-800 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-300"
                        >
                            Change Password
                        </button>
                    </div>
                    <div className='flex justify-end mt-5'>
                        <button onClick={() => setShowDeleteOption(true)} className="bg-red-700 mr-3 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300">Delete My Account</button>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center bg-orange-950 p-3'>
                    <img className='h-6 custom-spin' src="https://i.postimg.cc/qRVH32Nc/loading-icon.png" alt="Loading" />
                </div>
            )}

            {showDeleteOption && (
                <>
                    {/* Backdrop */}
                    <div className='fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 z-20' onClick={() => setShowDeleteOption(false)}></div>
                    
                    {/* Modal */}
                    <div data-aos="zoom-in" className='fixed inset-0 flex justify-center items-center z-30'>
                        <div className='bg-orange-200 h-[27vh] w-[50vh] font-josefin-sans p-5 rounded-xl shadow-lg'>
                            <p className='text-orange-900 text-2xl mt-2'>Deleting Your Account</p>
                            <p className='text-orange-900 text-5xl'>Are you sure?</p>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Type Your Password'
                                className='h-[5vh] w-full rounded-full mt-3 pl-5 bg-gray-100'
                            />
                            <div className='mt-5 flex justify-end'>
                                <button onClick={() => setShowDeleteOption(false)} className='bg-orange-800 hover:bg-red-800 text-white rounded-full p-2 w-[10vh] mr-2'>No</button>
                                <button onClick={handleDeleteAccount} className='bg-red-700 text-white rounded-full p-2 hover:bg-red-800 w-[20vh]'>Sure, Delete</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserPage;
