import React from 'react'
import GlobalAnimation from '../../../Animation/GlobalAnimation'
import { MdSecurity } from "react-icons/md"
import { FiEdit2 } from "react-icons/fi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { BiShow } from "react-icons/bi"
import { Link } from 'react-router-dom'


const All_Roles = () => {
  return (
    <GlobalAnimation>
      <div className='card'>
        <div className='card-header'>
          <div className='row my-2'>
            <h1 className='text-center'>All Roles</h1>
          </div>

          <hr />

          <div className='card-body'>

            <div className='row'>
              <div className='col-4'>
                <div className='card' style={{ width: "300px", height: "300px" }}>

                  <div className='card-header bg-dark'>
                    <h3 className='text-center'><MdSecurity /></h3>
                  </div>

                  <div className='card-body bg-dark'>
                    <h3 className='text-center'>Admin</h3>
                  </div>

                  <div className='card-footer bg-dark d-flex justify-content-between'>

                    <Link to={'/admin/roles/show_roles'} className='btn btn-outline-primary'>
                      <BiShow />
                    </Link>

                    <Link to={'/admin/roles/edit_roles/1'} className='btn btn-outline-success'>
                      <FiEdit2 />
                    </Link>

                    <button className='btn btn-outline-danger'><RiDeleteBin6Line /></button>



                  </div>

                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </GlobalAnimation>
  )
}

export default All_Roles