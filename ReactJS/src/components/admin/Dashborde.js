import React from 'react'
import FadeOutAnimation from "../../Animation/FadeOutAnimation"
const Dashborde = () => {

  return (

    <FadeOutAnimation>
      <div className="">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-4">
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <p className="mb-0 text-secondary">Total Orders</p>
                    <h4 className="my-1">4805</h4>
                    <p className="mb-0 font-13 text-success">
                      <i className="bi bi-caret-up-fill" /> 5% from last week
                    </p>
                  </div>
                  <div className="widget-icon-large bg-gradient-purple text-white ms-auto">
                    <i className="bi bi-basket2-fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <p className="mb-0 text-secondary">Total Revenue</p>
                    <h4 className="my-1">$24K</h4>
                    <p className="mb-0 font-13 text-success">
                      <i className="bi bi-caret-up-fill" /> 4.6 from last week
                    </p>
                  </div>
                  <div className="widget-icon-large bg-gradient-success text-white ms-auto">
                    <i className="bi bi-currency-exchange" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <p className="mb-0 text-secondary">Total Customers</p>
                    <h4 className="my-1">5.8K</h4>
                    <p className="mb-0 font-13 text-danger">
                      <i className="bi bi-caret-down-fill" /> 2.7 from last week
                    </p>
                  </div>
                  <div className="widget-icon-large bg-gradient-danger text-white ms-auto">
                    <i className="bi bi-people-fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <p className="mb-0 text-secondary">Bounce Rate</p>
                    <h4 className="my-1">38.15%</h4>
                    <p className="mb-0 font-13 text-success">
                      <i className="bi bi-caret-up-fill" /> 12.2% from last week
                    </p>
                  </div>
                  <div className="widget-icon-large bg-gradient-info text-white ms-auto">
                    <i className="bi bi-bar-chart-line-fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end row*/}
        <div className="row">
          <div className="col-12 col-lg-8 col-xl-8 d-flex">
            <div className="card radius-10 w-100">
              <div className="card-body">
                <div className="row row-cols-1 row-cols-lg-2 g-3 align-items-center">
                  <div className="col">
                    <h5 className="mb-0">Sales Figures</h5>
                  </div>
                  <div className="col">
                    <div className="d-flex align-items-center justify-content-sm-end gap-3 cursor-pointer">
                      <div className="font-13">
                        <i className="bi bi-circle-fill text-primary" /><span className="ms-2">Sales</span>
                      </div>
                      <div className="font-13">
                        <i className="bi bi-circle-fill text-success" /><span className="ms-2">Orders</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="chart1" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xl-4 d-flex">
            <div className="card radius-10 w-100">
              <div className="card-header bg-transparent">
                <div className="row g-3 align-items-center">
                  <div className="col">
                    <h5 className="mb-0">Statistics</h5>
                  </div>
                  <div className="col">
                    <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                      <div className="dropdown">
                        <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">Action</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Another action</a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div id="chart2" />
              </div>
              <ul className="list-group list-group-flush mb-0">
                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                  New Orders<span className="badge bg-primary badge-pill">25%</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                  Completed<span className="badge bg-orange badge-pill">65%</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                  Pending<span className="badge bg-success badge-pill">10%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*end row*/}
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-6 d-flex">
            <div className="card radius-10 w-100">
              <div className="card-header bg-transparent">
                <div className="row g-3 align-items-center">
                  <div className="col">
                    <h5 className="mb-0">Statistics</h5>
                  </div>
                  <div className="col">
                    <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                      <div className="dropdown">
                        <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">Action</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Another action</a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-lg-flex align-items-center justify-content-center gap-2">
                  <div id="chart3" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <i className="bi bi-circle-fill text-purple me-1" />
                      Visitors:<span className="me-1">89</span>
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-circle-fill text-info me-1" />
                      Subscribers:<span className="me-1">45</span>
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-circle-fill text-pink me-1" />
                      Contributor:<span className="me-1">35</span>
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-circle-fill text-success me-1" />
                      Author:<span className="me-1">62</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 d-flex">
            <div className="card radius-10 w-100">
              <div className="card-body">
                <div className="row row-cols-1 row-cols-lg-2 g-3 align-items-center">
                  <div className="col">
                    <h5 className="mb-0">Product Actions</h5>
                  </div>
                  <div className="col">
                    <div className="d-flex align-items-center justify-content-sm-end gap-3 cursor-pointer">
                      <div className="font-13">
                        <i className="bi bi-circle-fill text-primary" /><span className="ms-2">Views</span>
                      </div>
                      <div className="font-13">
                        <i className="bi bi-circle-fill text-pink" /><span className="ms-2">Clicks</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="chart4" />
              </div>
            </div>
          </div>
        </div>



      </div>

    </FadeOutAnimation>
  )
}

export default Dashborde