
import Card from "../components/frontend/private/Card"
import Login from "../layouts/auth/Login"
import Favorite from "../components/frontend/private/Favorite"
import MyProfile from "../components/frontend/private/MyProfile"

export const RouteAuthUser = () => {
    return (
        [
            {
                path: "card",
                element: localStorage.getItem("token") ? <Card /> : <Login />
            },
            {
                path: "favorite",
                element: localStorage.getItem("token") ? <Favorite /> : <Login />
            },
            {
                path: "myProfile",
                element: localStorage.getItem("token") ? <MyProfile /> : <Login />
            }
        ]
    )

}