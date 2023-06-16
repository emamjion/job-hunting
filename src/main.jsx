import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Import react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/jobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails/>,
        loader : ({params}) => fetch(`/allJobs.json`)
      },
      {
        path: '/statistics',
        element: <Statistics/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs/>
      }
    ]
  }
  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
