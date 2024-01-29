import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from "../views/Dashboard";



const router = createBrowserRouter([
    {
    path: "/",
    element: <Dashboard/>,
    },
    
]);

function Router(){
    return <RouterProvider router={router} />
}
export default Router