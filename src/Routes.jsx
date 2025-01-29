import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
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