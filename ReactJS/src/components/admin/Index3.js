import React from 'react'
import FadeOutAnimation from "../../Animation/FadeOutAnimation"

const Index3 = () => {
    return (
        <FadeOutAnimation>
            <div>
                <div className="row">
                    <div className="col-12 col-lg-3 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <p>TOTAL SESSIONS</p>
                                <h2 className="text-center fw-light">5,635</h2>
                                <div id="chart1" />
                            </div>
                            <div className="card-footer bg-transparent border-top">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="text-center">
                                        <p className="font-13 mb-0">Previous period</p>
                                        <p className="mb-0">87.6%</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-13 mb-0">Previous year</p>
                                        <p className="mb-0">54.8%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <p>SESSIONS TREND BY MEDIUM</p>
                                <div id="chart2" />
                            </div>
                        </div>
                    </div>
                </div>{/*end row*/}
                <div className="row">
                    <div className="col-12 col-lg-3 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <p>PAGES PER VISIT</p>
                                <h2 className="text-center fw-light">5.03</h2>
                                <div id="chart3" />
                            </div>
                            <div className="card-footer bg-transparent border-top">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="text-center">
                                        <p className="font-13 mb-0">Previous period</p>
                                        <p className="mb-0">-1.6%</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-13 mb-0">Previous year</p>
                                        <p className="mb-0">24.8%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <p>UNIQUE VISITORS</p>
                                <h2 className="text-center fw-light">1,120</h2>
                                <div id="chart4" />
                            </div>
                            <div className="card-footer bg-transparent border-top">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="text-center">
                                        <p className="font-13 mb-0">Previous period</p>
                                        <p className="mb-0">92.6%</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-13 mb-0">Previous year</p>
                                        <p className="mb-0">65.8%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <p>NEW VS RETURNING USERS</p>
                                <div className="d-lg-flex align-items-center justify-content-center gap-4">
                                    <div id="chart5" />
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><i className="bi bi-circle-fill text-danger me-1" /> New Users: <span className="me-1">546</span></li>
                                        <li className="list-group-item"><i className="bi bi-circle-fill text-purple me-1" /> Returning Users: <span className="me-1">985</span></li>
                                        <li className="list-group-item list-group-item-secondary">Total : 1,254</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/*end row*/}
                <div className="row">
                    <div className="col-12 col-xl-6 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <p>AGE GROUP</p>
                                <div id="chart6" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <p>CONVERSION RATE</p>
                                <div id="chart7" />
                            </div>
                        </div>
                    </div>
                </div>{/*end row*/}
                <div className="row">
                    <div className="col-12 col-xl-4 d-flex">
                        <div className="card radius-10 w-100 overflow-hidden">
                            <div className="card-body">
                                <p>TOP COUNTRIES</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <div><i className="flag-icon flag-icon-us" /></div>
                                            <div>United States</div>
                                            <div className="ms-auto">289</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <div><i className="flag-icon flag-icon-au" /></div>
                                            <div>Malaysia</div>
                                            <div className="ms-auto">562</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <div><i className="flag-icon flag-icon-in" /></div>
                                            <div>India</div>
                                            <div className="ms-auto">354</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <div><i className="flag-icon flag-icon-ca" /></div>
                                            <div>Indonesia</div>
                                            <div className="ms-auto">147</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <div><i className="flag-icon flag-icon-ad" /></div>
                                            <div>Turkey</div>
                                            <div className="ms-auto">652</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <div><i className="flag-icon flag-icon-cu" /></div>
                                            <div>Netherlands</div>
                                            <div className="ms-auto">287</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <div><i className="flag-icon flag-icon-is" /></div>
                                            <div>Italy</div>
                                            <div className="ms-auto">634</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <div><i className="flag-icon flag-icon-ge" /></div>
                                            <div>Canada</div>
                                            <div className="ms-auto">524</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <div><i className="flag-icon flag-icon-lr" /></div>
                                            <div>Australia</div>
                                            <div className="ms-auto">642</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <div><i className="flag-icon flag-icon-ms" /></div>
                                            <div>Brazil</div>
                                            <div className="ms-auto">478</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <p>ADWORD CONVERSIONS</p>
                                <div id="chart8" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <p>DEVICE USER</p>
                                <div className="mt-5" id="chart9" />
                            </div>
                            <ul className="list-group list-group-flush mb-0">
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Mobile<span className="badge bg-primary badge-pill">25%</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Desktop<span className="badge bg-orange badge-pill">65%</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Tablet<span className="badge bg-success badge-pill">10%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>{/*end row*/}
            </div>





        </FadeOutAnimation>
    )
}

export default Index3