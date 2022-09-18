import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import NavbarUser from '../public/NavbarUser';
import "../public/Style/Frontend.css"
import ThemisAdmin from '../../admin/Extensions/ThemisAdmin';
import { useSelector, useDispatch } from "react-redux";
import { getInfoProfile } from "../../../Data/JWT/profileSlice"
import SidebarUser from "./SidebarUser"

const MasterUsers = () => {

  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.profile);
  const { avatarPreview } = useSelector((state) => state.profile);
  const { Loading } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      dispatch(getInfoProfile())
    }
  }, [dispatch])

  return (
    <>
      <div className="wrapper">
        <NavbarUser data={data} Loading={Loading} avatarPreview={avatarPreview} token={token} />
        <div className='content-user container'>
          <div className='row w-100'>
            {/* <div className='col-lg-2'>
             
            </div> */}
            <div className='col-lg-12'>
              <Outlet />
            </div>

          </div>

        </div>

        <ThemisAdmin />

      </div>

    </>
  )
}

export default MasterUsers