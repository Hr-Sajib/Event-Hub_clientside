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

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
