import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rootpage from './components/Rootpage';
import Home from './components/home/Home';
import BookEvent from './components/book_event/BookEvent';
import OurServices from './components/our_services/OurServices';
import Projects from './components/projects/Projects';
import Blogs from './components/blogs/Blogs';
import SignUp from './components/AuthProvider/SignUp';
import LogIn from './components/AuthProvider/LogIn';
import AuthProvider from './components/AuthProvider/AuthProvider';
import TermsAndConditions from './components/TermsAndConditions';
import ProfilePage from './components/ProfilePage';
import UpdateBooking from './components/UpdateBooking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/book",
        element: <BookEvent/>,
      },
      {
        path: "/services",
        element: <OurServices/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/blogs",
        element: <Blogs/>,
      },
      {
        path: "/contacts",
        element: <Home/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/login",
        element: <LogIn/>,
      },
      {
        path: "/terms&conditions",
        element: <TermsAndConditions/>,
      },
      {
        path: "/profile",
        element: <ProfilePage/>,
      },
      {
        path: "/profile/updateBooking/:id",
        loader: ({params}) => fetch(`http://localhost:5500/getMyBooking/${params.id}`),
        element: <UpdateBooking/>,
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
