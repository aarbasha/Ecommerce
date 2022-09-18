import Dashborde from "../components/admin/Dashborde"
import Index2 from "../components/admin/Index2"
import Index3 from "../components/admin/Index3"
import Index4 from "../components/admin/Index4"

import MasterUsers from "../components/admin/Users/MasterUsers"
import Users from "../components/admin/Users/Users"
import Add_Users from "../components/admin/Users/Add_Users"
import Users_Profiles from "../components/admin/Users/Users_Profiles"
import Edit_Users from "../components/admin/Users/Edit_Users"
import AdminProfile from "../components/admin/AdminProfile"

import MasterCategories from "../components/admin/Categories/MasterCategories"
import AllCategories from "../components/admin/Categories/AllCategories"
import AddCategories from "../components/admin/Categories/AddCategories"
import EditCategories from "../components/admin/Categories/EditCategories"

import MasterProducts from "../components/admin/Products/MasterProducts"
import AddProducts from "../components/admin/Products/AddProducts"
import EditProducts from "../components/admin/Products/EditProducts"
import AllProducts from "../components/admin/Products/AllProducts"
import SingleProduct from "../components/admin/Products/SingleProduct"
import ProductsGrid from "../components/admin/Products/ProductsGrid"

export const RouterAdmin = () => {

    return (
        [
            {
                path: "index",
                element: <Dashborde />,
            },
            {
                path: "app",
                element: <Index2 />,
            },
            {
                path: "app2",
                element: <Index3 />,
            },
            {
                path: "app3",
                element: <Index4 />,
            },
            {
                path: "myProfile",
                element: <AdminProfile />,
            },

            {
                path: "Users",
                element: <MasterUsers />,
                children: [
                    {
                        path: "All_Users",
                        element: <Users />,
                    },
                    {
                        path: "Add_Users",
                        element: <Add_Users />,
                    },
                    {
                        path: "Users_Profiles/:id",
                        element: <Users_Profiles />,
                    },
                    {
                        path: "Edit_Users/:id",
                        element: <Edit_Users />,
                    },
                ]
            },

            {
                path: "Categories",
                element: <MasterCategories />,
                children: [
                    {
                        path: "All_Categories",
                        element: <AllCategories />,
                    },
                    {
                        path: "Add_Categories",
                        element: <AddCategories />,
                    },
                    {
                        path: "Edit_Categories/:id",
                        element: <EditCategories />,
                    },
                    {
                        path: "ProductsGrid/:id",
                        element: <ProductsGrid />,
                    },
                ]
            },


            {
                path: "Products",
                element: <MasterProducts />,
                children: [
                    {
                        path: "All_Products",
                        element: <AllProducts />,
                    },
                    {
                        path: "Single_Products/:id",
                        element: <SingleProduct />,
                    },
                    {
                        path: "Add_Products",
                        element: <AddProducts />,
                    },
                    {
                        path: "Edit_Products/:id",
                        element: <EditProducts />,
                    }
                ]
            },

        ]
    )
}