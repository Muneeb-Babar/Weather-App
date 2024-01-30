import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import SearchHistory from "../views/Search";




const router = createBrowserRouter([
    {
    path: "/",
    element: <Dashboard/>,
    },
    {
        path: "/search-history",
        element: <SearchHistory/>,
    },
    
    
]);

function Router(){
    return <RouterProvider router={router} />
}
export default Router