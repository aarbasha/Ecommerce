import React from 'react'
import FadeOutAnimation from '../../Animation/FadeOutAnimation'
const Index4 = () => {
    return (
        <FadeOutAnimation>
<div className="">
  <div className="row">
    <div className="col-12 col-lg-8 col-xl-8">
      <div className="card radius-10">
        <div className="card-body">
          <div className="row row-cols-1 row-cols-lg-2 g-3 align-items-center">
            <div className="col">
              <h5 className="mb-0">Daily Time Log Activity</h5>
            </div>
            <div className="col">
              <div className="d-flex align-items-center justify-content-sm-end gap-3 cursor-pointer">
                <div className="font-13"><i className="bi bi-circle-fill text-primary" /><span className="ms-2">Today</span></div>
                <div className="font-13"><i className="bi bi-circle-fill text-success" /><span className="ms-2">Yestreday</span></div>
              </div>
            </div>
          </div>
          <div id="chart1" />
        </div>
      </div>
    </div>
    <div className="col-12 col-lg-4 col-xl-4">
      <div className="card radius-10">
        <div className="card-body">
          <div className="row g-3 align-items-center">
            <div className="col">
              <h5 className="mb-0">Weekly Invoices</h5>
            </div>
          </div>
          <div id="chart2" />
        </div>
      </div>
    </div>
  </div>{/*end row*/}
  <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-xl-3 row-cols-xxl-6">
    <div className="col">
      <div className="card radius-10">
        <div className="card-body text-center">
          <div className="widget-icon mx-auto mb-3 bg-light-primary text-primary">
            <i className="bi bi-chat-left-fill" />
          </div>
          <p className="mb-0">Task Completed</p>
          <h3 className="mt-4 mb-0">27</h3>
          <small className="text-danger">-12%</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card radius-10">
        <div className="card-body text-center">
          <div className="widget-icon mx-auto mb-3 bg-light-danger text-danger">
            <i className="bi bi-hdd-fill" />
          </div>
          <p className="mb-0">New Task</p>
          <h3 className="mt-4 mb-0">45</h3>
          <small className="text-success">+8%</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card radius-10">
        <div className="card-body text-center">
          <div className="widget-icon mx-auto mb-3 bg-light-success text-success">
            <i className="bi bi-people-fill" />
          </div>
          <p className="mb-0">New Members</p>
          <h3 className="mt-4 mb-0">38</h3>
          <small className="text-danger">-6.2%</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card radius-10">
        <div className="card-body text-center">
          <div className="widget-icon mx-auto mb-3 bg-light-info text-info">
            <i className="bi bi-archive-fill" />
          </div>
          <p className="mb-0">Project Completed</p>
          <h3 className="mt-4 mb-0">61</h3>
          <small className="text-success">+9%</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card radius-10">
        <div className="card-body text-center">
          <div className="widget-icon mx-auto mb-3 bg-light-purple text-purple">
            <i className="bi bi-flag-fill" />
          </div>
          <p className="mb-0">Total Files</p>
          <h3 className="mt-4 mb-0">29</h3>
          <small className="text-success">+6%</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card radius-10">
        <div className="card-body text-center">
          <div className="widget-icon mx-auto mb-3 bg-light-orange text-orange">
            <i className="bi bi-pie-chart-fill" />
          </div>
          <p className="mb-0">Objectives</p>
          <h3 className="mt-4 mb-0">32</h3>
          <small className="text-success">+12%</small>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-12 col-lg-7 col-xl-7">
      <div className="card radius-10">
        <div className="card-body">
          <div className="row row-cols-1 row-cols-lg-2 g-3 align-items-center">
            <div className="col">
              <h5 className="mb-0">My Projects</h5>
            </div>
            <div className="col">
              <div className="d-flex align-items-center justify-content-sm-end gap-3 cursor-pointer">
                <form>
                  <input type="date" className="form-control" />
                </form>
              </div>
            </div>
          </div>
          <form className="mt-3">
            <div className="position-relative">
              <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-search" /></div>
              <input className="form-control ps-5" type="text" placeholder="search projects" />
            </div>
          </form>
          <div className="row mt-2 g-3">
            <div className="col-12 col-lg-6">
              <div className="card radius-10 shadow-none border mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="project-date">
                      <p className="mb-0 font-13">July 2, 2020</p>
                    </div> 
                    <div className="dropdown ms-auto">
                      <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a>
                        </li>
                        <li><a className="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a>
                        </li>
                      </ul>
                    </div> 
                  </div>
                  <div className="text-center my-3">
                    <h6 className="mb-0">Web Designing</h6>
                    <p className="mb-0">Prototyping</p>
                  </div>
                  <div className="my-2">
                    <p className="mb-1 font-13">Progress</p>
                    <div className="progress radius-10" style={{height: 5}}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{width: '85%'}} />
                    </div>
                    <p className="mb-0 mt-1 font-13 text-end">85%</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="project-user-groups">
                      <img src="assets/images/avatars/avatar-1.png" width={35} height={35} className="rounded-circle" alt="test" />
                      <img src="assets/images/avatars/avatar-2.png" width={35} height={35} className="rounded-circle" alt="test" />
                    </div>
                    <div className="project-user-plus">+</div>
                    <div className="py-1 px-3 radius-30 bg-light-primary text-primary ms-auto">2 Days Left</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card radius-10 shadow-none border mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="project-date">
                      <p className="mb-0 font-13">July 5, 2020</p>
                    </div> 
                    <div className="dropdown ms-auto">
                      <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a>
                        </li>
                        <li><a className="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a>
                        </li>
                      </ul>
                    </div> 
                  </div>
                  <div className="text-center my-3">
                    <h6 className="mb-0">Mobile App</h6>
                    <p className="mb-0">Shopping</p>
                  </div>
                  <div className="my-2">
                    <p className="mb-1 font-13">Progress</p>
                    <div className="progress radius-10" style={{height: 5}}>
                      <div className="progress-bar bg-orange" role="progressbar" style={{width: '55%'}} />
                    </div>
                    <p className="mb-0 mt-1 font-13 text-end">30%</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="project-user-groups">
                      <img src="assets/images/avatars/avatar-1.png" width={35} height={35} className="rounded-circle" alt="test" />
                      <img src="assets/images/avatars/avatar-2.png" width={35} height={35} className="rounded-circle" alt="test" />
                    </div>
                    <div className="project-user-plus">+</div>
                    <div className="py-1 px-3 radius-30 bg-light-orange text-orange ms-auto">2 Days Left</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card radius-10 shadow-none border mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="project-date">
                      <p className="mb-0 font-13">July 10, 2020</p>
                    </div> 
                    <div className="dropdown ms-auto">
                      <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a>
                        </li>
                        <li><a className="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a>
                        </li>
                      </ul>
                    </div> 
                  </div>
                  <div className="text-center my-3">
                    <h6 className="mb-0">Dashboard</h6>
                    <p className="mb-0">Medical</p>
                  </div>
                  <div className="my-2">
                    <p className="mb-1 font-13">Progress</p>
                    <div className="progress radius-10" style={{height: 5}}>
                      <div className="progress-bar bg-success" role="progressbar" style={{width: '45%'}} />
                    </div>
                    <p className="mb-0 mt-1 font-13 text-end">45%</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="project-user-groups">
                      <img src="assets/images/avatars/avatar-1.png" width={35} height={35} className="rounded-circle" alt="test" />
                      <img src="assets/images/avatars/avatar-2.png" width={35} height={35} className="rounded-circle" alt="test" />
                    </div>
                    <div className="project-user-plus">+</div>
                    <div className="py-1 px-3 radius-30 bg-light-success text-success ms-auto">2 Weeks Left</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card radius-10 shadow-none border mb-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="project-date">
                      <p className="mb-0 font-13">July 10, 2020</p>
                    </div> 
                    <div className="dropdown ms-auto">
                      <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a>
                        </li>
                        <li><a className="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a>
                        </li>
                      </ul>
                    </div> 
                  </div>
                  <div className="text-center my-3">
                    <h6 className="mb-0">Web Designing</h6>
                    <p className="mb-0">Wireframing</p>
                  </div>
                  <div className="my-2">
                    <p className="mb-1 font-13">Progress</p>
                    <div className="progress radius-10" style={{height: 5}}>
                      <div className="progress-bar bg-purple" role="progressbar" style={{width: '65%'}} />
                    </div>
                    <p className="mb-0 mt-1 font-13 text-end">65%</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="project-user-groups">
                      <img src="assets/images/avatars/avatar-1.png" width={35} height={35} className="rounded-circle" alt="test" />
                      <img src="assets/images/avatars/avatar-2.png" width={35} height={35} className="rounded-circle" alt="test" />
                    </div>
                    <div className="project-user-plus">+</div>
                    <div className="py-1 px-3 radius-30 bg-light-purple text-purple ms-auto">1 Week Left</div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/*end row*/}
        </div>
      </div>
    </div>
    <div className="col-12 col-lg-5 col-xl-5">
      <div className="card radius-10">
        <div className="card-body">
          <div className="row g-3 align-items-center">
            <div className="col-9">
              <h5 className="mb-0">Client Messages</h5>
            </div>
            <div className="col-3">
              <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                <div className="dropdown">
                  <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a>
                    </li>
                    <li><a className="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="client-message">
          <div className="d-flex align-items-center gap-3 client-messages-list border-bottom border-top p-3">
            <img src="assets/images/avatars/avatar-1.png" className="rounded-circle" width={50} height={50} alt="test" />
            <div>
              <h6 className="mb-0">Thomas Hardy <span className="text-secondary mb-0 float-end font-13">21 July</span></h6>
              <p className="mb-0 font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 client-messages-list border-bottom p-3">
            <img src="assets/images/avatars/avatar-2.png" className="rounded-circle" width={50} height={50} alt="test" />
            <div>
              <h6 className="mb-0">Thomas Hardy <span className="text-secondary mb-0 float-end font-13">21 July</span></h6>
              <p className="mb-0 font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 client-messages-list border-bottom p-3">
            <img src="assets/images/avatars/avatar-3.png" className="rounded-circle" width={50} height={50} alt="test" />
            <div>
              <h6 className="mb-0">Thomas Hardy <span className="text-secondary mb-0 float-end font-13">21 July</span></h6>
              <p className="mb-0 font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 client-messages-list border-bottom p-3">
            <img src="assets/images/avatars/avatar-4.png" className="rounded-circle" width={50} height={50} alt="test" />
            <div>
              <h6 className="mb-0">Thomas Hardy <span className="text-secondary mb-0 float-end font-13">21 July</span></h6>
              <p className="mb-0 font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 client-messages-list border-bottom p-3">
            <img src="assets/images/avatars/avatar-5.png" className="rounded-circle" width={50} height={50} alt="test" />
            <div>
              <h6 className="mb-0">Thomas Hardy <span className="text-secondary mb-0 float-end font-13">21 July</span></h6>
              <p className="mb-0 font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 client-messages-list border-bottom p-3">
            <img src="assets/images/avatars/avatar-6.png" className="rounded-circle" width={50} height={50} alt="test" />
            <div>
              <h6 className="mb-0">Thomas Hardy <span className="text-secondary mb-0 float-end font-13">21 July</span></h6>
              <p className="mb-0 font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 client-messages-list border-bottom p-3">
            <img src="assets/images/avatars/avatar-7.png" className="rounded-circle" width={50} height={50} alt="test" />
            <div>
              <h6 className="mb-0">Thomas Hardy <span className="text-secondary mb-0 float-end font-13">21 July</span></h6>
              <p className="mb-0 font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 client-messages-list border-bottom p-3">
            <img src="assets/images/avatars/avatar-7.png" className="rounded-circle" width={50} height={50} alt="test" />
            <div>
              <h6 className="mb-0">Thomas Hardy <span className="text-secondary mb-0 float-end font-13">21 July</span></h6>
              <p className="mb-0 font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 client-messages-list border-bottom p-3">
            <img src="assets/images/avatars/avatar-7.png" className="rounded-circle" width={50} height={50} alt="test" />
            <div>
              <h6 className="mb-0">Thomas Hardy <span className="text-secondary mb-0 float-end font-13">21 July</span></h6>
              <p className="mb-0 font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 client-messages-list border-bottom p-3">
            <img src="assets/images/avatars/avatar-7.png" className="rounded-circle" width={50} height={50} alt="test" />
            <div>
              <h6 className="mb-0">Thomas Hardy <span className="text-secondary mb-0 float-end font-13">21 July</span></h6>
              <p className="mb-0 font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{/*end row*/}
</div>

        </FadeOutAnimation>
    )
}

export default Index4