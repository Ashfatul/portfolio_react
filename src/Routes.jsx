import { createBrowserRouter } from "react-router-dom";
import FrontendLayout from "./layout/FrontendLayout";
import Resume from "./frontend/Resume";
import Home from "./frontend/Home";
import About from "./frontend/About";
import Projects from "./frontend/Projects";
import Contact from "./frontend/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FrontendLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "*",
                element: <div>404</div>
            }
        ]
    },
    {
        path: "/resume",
        element: <Resume />
    }
]);

export default router;