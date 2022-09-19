import Dashborde from "../components/admin/Dashborde"
import Index2 from "../components/admin/Index2"
import Index3 from "../components/admin/Index3"
import Index4 from "../components/admin/Index4"
//Users
import MasterUsers from "../components/admin/Users/MasterUsers"
import Users from "../components/admin/Users/Users"
import Add_Users from "../components/admin/Users/Add_Users"
import Users_Profiles from "../components/admin/Users/Users_Profiles"
import Edit_Users from "../components/admin/Users/Edit_Users"
import AdminProfile from "../components/admin/AdminProfile"
//Categories
import MasterCategories from "../components/admin/Categories/MasterCategories"
import AllCategories from "../components/admin/Categories/AllCategories"
import AddCategories from "../components/admin/Categories/AddCategories"
import EditCategories from "../components/admin/Categories/EditCategories"
//Products 
import MasterProducts from "../components/admin/Products/MasterProducts"
import AddProducts from "../components/admin/Products/AddProducts"
import EditProducts from "../components/admin/Products/EditProducts"
import AllProducts from "../components/admin/Products/AllProducts"
import SingleProduct from "../components/admin/Products/SingleProduct"
import ProductsGrid from "../components/admin/Products/ProductsGrid"
//Permissions
import Master_Permissions from "../components/admin/Permissions/Master_Permissions"
import All_Permissions from "../components/admin/Permissions/All_Permissions"
import Add_Permissions from "../components/admin/Permissions/Add_Permissions"
import Edit_Permissions from "../components/admin/Permissions/Edit_Permissions"
//Roles
import Master_Roles from "../components/admin/Roles/Master_Roles"
import All_Roles from "../components/admin/Roles/All_Roles"
import Add_Roles from "../components/admin/Roles/Add_Roles"
import Edit_Roles from "../components/admin/Roles/Edit_Roles"

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
                path: "users",
                element: <MasterUsers />,
                children: [
                    {
                        path: "all_users",
                        element: <Users />,
                    },
                    {
                        path: "add_users",
                        element: <Add_Users />,
                    },
                    {
                        path: "users_profiles/:id",
                        element: <Users_Profiles />,
                    },
                    {
                        path: "edit_users/:id",
                        element: <Edit_Users />,
                    },
                ]
            },

            {
                path: 'permissions',
                element: <Master_Permissions />,
                children: [
                    {
                        path: "all_permissions",
                        element: <All_Permissions />
                    },
                    {
                        path: "add_permissions",
                        element: <Add_Permissions />
                    },
                    {
                        path: "edit_permissions/:id",
                        element: <Edit_Permissions />
                    },
                ]
            },

            {
                path: 'roles',
                element: <Master_Roles />,
                children: [
                    {
                        path: "all_roles",
                        element: <All_Roles />
                    },
                    {
                        path: "add_roles",
                        element: <Add_Roles />
                    },
                    {
                        path: "edit_roles/:id",
                        element: <Edit_Roles />
                    },
                ]
            },

            {
                path: "categories",
                element: <MasterCategories />,
                children: [
                    {
                        path: "all_categories",
                        element: <AllCategories />,
                    },
                    {
                        path: "add_categories",
                        element: <AddCategories />,
                    },
                    {
                        path: "edit_categories/:id",
                        element: <EditCategories />,
                    },
                    {
                        path: "productsGrid/:id",
                        element: <ProductsGrid />,
                    },
                ]
            },


            {
                path: "products",
                element: <MasterProducts />,
                children: [
                    {
                        path: "all_products",
                        element: <AllProducts />,
                    },
                    {
                        path: "single_products/:id",
                        element: <SingleProduct />,
                    },
                    {
                        path: "add_products",
                        element: <AddProducts />,
                    },
                    {
                        path: "edit_products/:id",
                        element: <EditProducts />,
                    }
                ]
            },

        ]
    )
}