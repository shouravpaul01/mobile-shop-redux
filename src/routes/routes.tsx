
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layouts/AdminLayout";
import Brand from "../pages/admin/brand/Brand";


export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <AdminLayout/>,
    children:[
      {
        path:"category",
        element:<Brand/>
      }
    ]
  },
]);
