import React from 'react';
import { NavLink } from "react-router-dom";
import { MdSecurity } from "react-icons/md"

const SidebarContent = () => {


    return (
        <>
            <div className="tab-content">

                <div className="tab-pane fade active show" id="dashboards">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Dashboards</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <NavLink to="/admin/index" className="list-group-item"><i className="bi bi-cart-plus" />e-Commerce</NavLink>
                        <NavLink to="/admin/app" className="list-group-item"><i className="bi bi-wallet" />Sales</NavLink>
                        <NavLink to="/admin/app2" className="list-group-item"><i className="bi bi-bar-chart-line" />Analytics</NavLink>
                        <NavLink to="/admin/app3" className="list-group-item"><i className="bi bi-archive" />Project Management</NavLink>
                        <NavLink to="/admin/ds" className="list-group-item"><i className="bi bi-cast" />CMS Dashboard</NavLink>
                    </div>
                </div>

                <div className="tab-pane fade" id="application">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Application</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>

                        <NavLink to="/admin/Categories/All_Categories" className="list-group-item"><i className="bi bi-envelope" />
                            Categories
                        </NavLink>

                        <NavLink to="/admin/Products/All_Products" className="list-group-item"><i className="bi bi-chat-left-text" />
                            Products
                        </NavLink>

                        <a href="app-file-manager.html" className="list-group-item"><i className="bi bi-archive" />File Manager</a>
                        <a href="app-to-do.html" className="list-group-item"><i className="bi bi-check2-square" />Todo List</a>
                        <a href="app-invoice.html" className="list-group-item"><i className="bi bi-receipt" />Invoice</a>
                    </div>
                </div>

                <div className="tab-pane fade" id="widgets">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Widgets</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>
                        <a href="widgets-static-widgets.html" className="list-group-item"><i className="bi bi-box" />Static Widgets</a>
                        <a href="widgets-data-widgets.html" className="list-group-item"><i className="bi bi-bar-chart" />Data Widgets</a>
                    </div>
                </div>

                <div className="tab-pane fade" id="Users-pages">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-0">Admins & Users</h5>
                            </div>
                            <small className="mb-0">Some placeholder content</small>
                        </div>

                        <NavLink to="/admin/Users/All_Users" className="list-group-item">
                            <i className="bi bi-people-fill" /> Users</NavLink>

                        <NavLink to="#" className="list-group-item">
                            <MdSecurity /><span className='mx-3'>Permissions</span></NavLink>
                        <NavLink to="#" className="list-group-item">
                            <MdSecurity /><span className='mx-3'>Rouls</span></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarContent