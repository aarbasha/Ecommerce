import React from 'react'

const Sidebar = () => {
    return (
        <div>


            <div className="flex-shrink-0 p-3  sidebaruser" style={{ width: 275 }}>
               

                <ul className="list-unstyled ps-0 ul-sidebar">
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home" aria-expanded="false">
                            Home
                        </button>
                        <div className="collapse" id="home" style={{}}>
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Overview</a></li>
                                <li><a href="#" className="link-dark rounded">Updates</a></li>
                                <li><a href="#" className="link-dark rounded">Reports</a></li>
                            </ul>
                        </div>
                    </li>

                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#xxxx" aria-expanded="false">
                            Home
                        </button>
                        <div className="collapse" id="xxxx" style={{}}>
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Overview</a></li>
                                <li><a href="#" className="link-dark rounded">Updates</a></li>
                                <li><a href="#" className="link-dark rounded">Reports</a></li>
                            </ul>
                        </div>
                    </li>


                </ul>
            </div>


        </div>
    )
}

export default Sidebar