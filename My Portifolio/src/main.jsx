import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,BrowserRouter, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'


const router = createBrowserRouter([
  {
    path: '/',element:<App/>,
    errorElement: <PageNotFound/>,
    children:[
      {index:true,element:<Home/>},
      {path:'projects',element:<Projects/>},
      {path:'contact',element:<Contact/>},
      {path:'projects/:id',element:<ProjectDetail/>}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)