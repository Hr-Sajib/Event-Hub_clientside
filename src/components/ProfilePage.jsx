import { useContext, useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider/AuthProvider';

const  userPage = () => {
    const {user} = useContext(AuthContext);

    const [newPassword, setNewPassword] = useState('');

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

    return (
        <div className='h-[50vh]'>
            {
                user ?
                <div className="font-josefin-sans max-w-[1200px] mx-auto p-6 rounded-2xl mt-10 bg-white">
                    <h1 className="text-4xl text-center text-orange-800 mb-6"> Profile Information</h1>
                    <div className="bg-orange-100 p-4 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl text-orange-700 mb-4">Basic Information</h2>
                        <p className="text-xl mb-2"><strong>Name:</strong> { user.displayName}</p>
                        <p className="text-xl mb-4"><strong>Email:</strong> { user.email}</p>
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
                </div>

                :

                <div className='flex justify-center items-center bg-orange-950 p-3'>
                    <img className='h-6 custom-spin' src="https://i.postimg.cc/qRVH32Nc/loading-icon.png" alt="Loading" />
                </div>
            }
        </div>
    );
};

export default  userPage;
