
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layouts/AdminLayout";
import Category from "../pages/admin/category/Category";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <AdminLayout/>,
    children:[
      {
        path:"category",
        element:<Category/>
      }
    ]
  },
]);
