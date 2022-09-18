import React from 'react'
import FadeOutAnimation from "../../../Animation/FadeOutAnimation"
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom'
const MasterCategories = () => {

    const Rediract = useNavigate()
    const location = useLocation()
    const slice = location.pathname;
    const my = slice.split('/');


    return (
        <FadeOutAnimation>

            <div>
                <div className="page-breadcrumb  d-flex align-items-center mx-2 mb-3">
                    <div className="breadcrumb-title pe-3">Ecommerce</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">

                                <li className="breadcrumb-item px-2 text-danger">
                                    <a >
                                        <i className="bx bx-home-alt mx-3" />
                                        {my[2]}
                                    </a>
                                </li>


                                <li className="breadcrumb-item px-2 text-warning">
                                    <a >
                                        <i className="bx bx-home-alt mx-3" />
                                        {my[3]}
                                    </a>
                                </li>

                            </ol>
                        </nav>
                    </div>
                    <div className="ms-auto">

                        <NavLink to={'/admin/Categories/All_Categories'} type="button" className="btn btn-dark mx-2">All Categories</NavLink>

                        <NavLink to={'/admin/Categories/Add_Categories'} type="button" className="btn btn-primary mx-2">Add Categories</NavLink>

                        <div className="d-flex flex-row-reverse">
                            <button className='btn btn-danger m-3' onClick={() => Rediract(-1)}>Back</button>
                        </div>


                    </div>
                </div>
                {/*end breadcrumb*/}
                <Outlet />
            </div>

        </FadeOutAnimation>
    )
}

export default MasterCategories