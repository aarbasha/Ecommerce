import React from 'react'

const SidebarTabs = () => {
    return (
        <>
            <ul className="nav nav-pills flex-column">

                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#dashboards" type="button">
                        <i className="bi bi-house-door-fill" />
                    </button>
                </li>

                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#application" type="button">
                        <i className="bi bi-grid-fill" />
                    </button>
                </li>

                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#widgets" type="button">
                        <i className="bi bi-briefcase-fill" />
                    </button>
                </li>

                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" >
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#Users-pages" type="button">
                        <i className="bi bi-people-fill" />
                    </button>
                </li>
            </ul>
        </>
    )
}

export default SidebarTabs