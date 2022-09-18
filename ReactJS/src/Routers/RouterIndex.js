import React, { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { RouterAdmin } from './RouterAdmin'
import { RouterUser } from './RouterUser'
import MasterAdmin from '../layouts/admin/MasterAdmin'
import MasterUsers from "../layouts/frontend/public/MasterUsers"
import Error_404 from "../components/admin/Error_404"
import Error_505 from '../components/admin/Error_505'
import { useSelector } from 'react-redux'

const RouterIndex = () => {

    const { rouls } = useSelector(state => state.profile.data)

    console.log(rouls);

    const Router = useRoutes([
        {
            path: "/admin",
            element: rouls < 2 ? (<MasterAdmin />) : (<Error_505 />),
            children: RouterAdmin()
        },
        {
            path: "/",
            element: <MasterUsers />,
            children: RouterUser()
        },
        {
            path: "*",
            element: <Error_404 />
        },
    ])

    return Router
}

export default RouterIndex