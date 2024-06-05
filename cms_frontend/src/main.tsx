import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import AdminPage from './components/admin_site/admin_page/AdminPage.tsx'
import CourseContent from './components/admin_site/course/CourseContent.tsx'
import CourseManagement from './components/admin_site/manage_course/CourseManagement.tsx'
import ModuleContent from './components/admin_site/module/ModuleContent.tsx'
import CourseScreen from './components/course_screen/CourseScreen.tsx'
import ErrorPage from './components/error/ErrorPage.tsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/my-courses',
    element: <CourseScreen/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/site-admin',
    element: <AdminPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/site-admin/course-management',
    element: <CourseManagement/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/site-admin/course-management/courses',
    element: <CourseContent/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/site-admin/course-management/modules',
    element: <ModuleContent/>,
    errorElement: <ErrorPage/>
  }

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router= {router}/>
  </React.StrictMode>,
)
