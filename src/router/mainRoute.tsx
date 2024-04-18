import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Landing from "../pages/auth/Landing";


export const mainRoute = createBrowserRouter([
    
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Landing />
            }
        ]
    }
])