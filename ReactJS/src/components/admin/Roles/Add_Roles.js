import React, { useState } from "react";
import GlobalAnimation from "../../../Animation/GlobalAnimation";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import { FaUserAlt } from "react-icons/fa"
import { GrUserAdmin } from "react-icons/gr"
import { ImUserTie } from "react-icons/im"
import { RiUser2Fill } from "react-icons/ri"
import { FaUserGraduate, FaUserShield, FaUserSecret, FaUserNurse } from "react-icons/fa"
import { MdVerifiedUser } from "react-icons/md"

const Add_Roles = () => {

    const [inputs, setInputs] = useState({
        name: '',
        number: ''
    })
    const [cover, setCover] = useState('')
    const [Checked, setChecked] = useState({
        addCategories: false,
        addProducts: false,
        deleteCategories: false,
        deleteProducts: false,
        editCategories: false,
        editProducts: false,
        showCategories: false,
        showProducts: false,
    })


    const handelChangeInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setInputs((values) => ({ ...values, [name]: value }))
    }

    const handelChangechecked = (e) => {
        const name = e.target.name;
        const value = e.target.checked
        setChecked((values) => ({ ...values, [name]: value }))


    }
    return (
        <GlobalAnimation>
            <div className="card">
                <div className="card-body">
                    <form encType="multipart/form-data">
                        <div className="row">
                            <div className="col-6 my-1">
                                <label className="form-label"> Name Roles</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Product Name"
                                    onChange={handelChangeInputs}
                                    value={inputs.name}
                                    name="name"
                                />
                                {/* {error ? (
                                    <span className="text-danger my-1">{error.name}</span>
                                ) : null} */}
                            </div>
                            <div className="col-6 my-1">
                                <label className="form-label"> Number Roles</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Product Name"
                                    onChange={handelChangeInputs}
                                    value={inputs.number}
                                    name="number"
                                />
                                {/* {error ? (
                                    <span className="text-danger my-1">{error.name}</span>
                                ) : null} */}
                            </div>



                            <div className="col-12 my-1">
                                <label className="form-label mt-1 mb-0"> Cover Roles</label>
                                <hr />
                                <div className="row d-flex">
                                    <div className="col-12 h2 d-flex justify-content-around">
                                        <div className="d-flex flex-column">
                                            <FaUserAlt />
                                            <input type='radio' name="cover" value={'FaUserAlt'} className="mt-2"
                                                onChange={e => setCover(e.target.value)} defaultChecked />
                                        </div>

                                        <div className="d-flex flex-column">
                                            <MdVerifiedUser />
                                            <input type='radio' name="cover" value={'MdVerifiedUser'} className="mt-2"
                                                onChange={e => setCover(e.target.value)} />
                                        </div>

                                        <div className="d-flex flex-column">
                                            <GrUserAdmin />
                                            <input type='radio' name="cover" value={'GrUserAdmin'} className="mt-2"
                                                onChange={e => setCover(e.target.value)} />
                                        </div>


                                        <div className="d-flex flex-column">
                                            <ImUserTie />
                                            <input type='radio' name="cover" value={'ImUserTie'} className="mt-2"
                                                onChange={e => setCover(e.target.value)} />
                                        </div>

                                        <div className="d-flex flex-column">
                                            <FaUserShield />
                                            <input type='radio' name="cover" value={'FaUserShield'} className="mt-2"
                                                onChange={e => setCover(e.target.value)} />
                                        </div>

                                        <div className="d-flex flex-column">
                                            <RiUser2Fill />
                                            <input type='radio' name="cover" value={'RiUser2Fill'} className="mt-2"
                                                onChange={e => setCover(e.target.value)} />
                                        </div>

                                        <div className="d-flex flex-column">
                                            <FaUserGraduate />
                                            <input type='radio' name="cover" value={'FaUserGraduate'} className="mt-2"
                                                onChange={e => setCover(e.target.value)} />
                                        </div>

                                        <div className="d-flex flex-column">
                                            <FaUserSecret />
                                            <input type='radio' name="cover" value={'FaUserSecret'} className="mt-2"
                                                onChange={e => setCover(e.target.value)} />
                                        </div>

                                        <div className="d-flex flex-column">
                                            <FaUserNurse />
                                            <input type='radio' name="cover" value={'FaUserNurse'} className="mt-2"
                                                onChange={e => setCover(e.target.value)} />
                                        </div>

                                    </div>

                                </div>

                            </div>



                            <hr className="my-2" />
                            <div className="col-12 mt-3 d-flex justify-content-center">
                                <h3 className="text-danger">Permissions</h3>
                            </div>

                            <div className="col-12 my-2">

                                <Tabs
                                    defaultActiveKey="1"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                    fill
                                >

                                    <Tab eventKey="1" title="1">

                                        <div className="row  d-flex justify-content-start">


                                            <div className="col-3 bg-secondary text-white p-3">
                                                <h5 className="text-center">Categories</h5>
                                                <hr />

                                                <div className="d-flex justify-content-between  form-switch">
                                                    <label className="h5"> show categories :</label>
                                                    <input
                                                        className="form-check-input "
                                                        type="checkbox"
                                                        id="Checked"
                                                        style={{ width: "60px", height: "20px" }}
                                                        onChange={(e) => handelChangechecked(e)}
                                                        name="showCategories"
                                                        value={Checked.showCategories}

                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between  form-switch">
                                                    <label className="h5"> Add categories :</label>
                                                    <input
                                                        className="form-check-input "
                                                        type="checkbox"
                                                        id="Checked"
                                                        style={{ width: "60px", height: "20px" }}
                                                        onChange={(e) => handelChangechecked(e)}
                                                        name="addCategories"
                                                        value={Checked.addCategories}

                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between  form-switch">
                                                    <label className="h5"> Edit categories :</label>
                                                    <input
                                                        className="form-check-input "
                                                        type="checkbox"
                                                        id="Checked"
                                                        style={{ width: "60px", height: "20px" }}
                                                        onChange={(e) => handelChangechecked(e)}
                                                        name="editCategories"
                                                        value={Checked.editCategories}

                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between  form-switch">
                                                    <label className="h5"> Delete categories :</label>
                                                    <input
                                                        className="form-check-input "
                                                        type="checkbox"
                                                        id="Checked"
                                                        style={{ width: "60px", height: "20px" }}
                                                        onChange={(e) => handelChangechecked(e)}
                                                        name="deleteCategories"
                                                        value={Checked.deleteCategories}

                                                    />
                                                </div>
                                            </div>

                                            <div className="col-3 bg-success   p-3">

                                                <h5 className="text-center">Products</h5>
                                                <hr />

                                                <div className="d-flex justify-content-between  form-switch">
                                                    <label className="h5"> show Products :</label>
                                                    <input
                                                        className="form-check-input "
                                                        type="checkbox"
                                                        id="Checked"
                                                        style={{ width: "60px", height: "20px" }}
                                                        onChange={(e) => handelChangechecked(e)}
                                                        name="showProducts"
                                                        value={Checked.showProducts}

                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between  form-switch">
                                                    <label className="h5"> Add Products :</label>
                                                    <input
                                                        className="form-check-input "
                                                        type="checkbox"
                                                        id="Checked"
                                                        style={{ width: "60px", height: "20px" }}
                                                        onChange={(e) => handelChangechecked(e)}
                                                        name="addProducts"
                                                        value={Checked.addProducts}

                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between  form-switch">
                                                    <label className="h5"> Edit Products :</label>
                                                    <input
                                                        className="form-check-input "
                                                        type="checkbox"
                                                        id="Checked"
                                                        style={{ width: "60px", height: "20px" }}
                                                        onChange={(e) => handelChangechecked(e)}
                                                        name="editProducts"
                                                        value={Checked.editProducts}

                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between  form-switch">
                                                    <label className="h5"> Delete Products :</label>
                                                    <input
                                                        className="form-check-input "
                                                        type="checkbox"
                                                        id="Checked"
                                                        style={{ width: "60px", height: "20px" }}
                                                        onChange={(e) => handelChangechecked(e)}
                                                        name="deleteProducts"
                                                        value={Checked.deleteProducts}

                                                    />
                                                </div>

                                            </div>

                                            <div className="col-3 bg-info   p-3">
                                                <h5 className="text-center">Brands</h5>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> show Brands :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Add Brands :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Edit Brands :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Delete Brands :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-3 bg-warning   p-3">
                                                <h5 className="text-center">Cobone</h5>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> show Cobone :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Add Cobone :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Edit Cobone :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Delete Cobone :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </Tab>
                                    <Tab eventKey="2" title="2">

                                        <div className="row  d-flex justify-content-start">
                                            <div className="col-3 bg-dark text-white p-3">
                                                <h5 className="text-center">Users</h5>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> show Users :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Add Users :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Edit Users :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Delete Users :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Upgrade Users :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-3 bg-danger text-white p-3">
                                                <h5 className="text-center">Roles</h5>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> show Roles :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Add Roles :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Edit Roles :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Delete Roles :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-3 bg-info text-white p-3">
                                                <h5 className="text-center">XXXXX</h5>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> show XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Add XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Edit XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Delete XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-3 bg-secondary text-white p-3">
                                                <h5 className="text-center">XXXXX</h5>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> show XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Add XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Edit XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Delete XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="3" title="3">

                                        <div className="row d-flex justify-content-start">

                                            <div className="col-3 bg-info text-white p-3">
                                                <h5 className="text-center">XXXXX</h5>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> show XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Add XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Edit XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Delete XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-3 bg-secondary text-white p-3">
                                                <h5 className="text-center">XXXXX</h5>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> show XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Add XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Edit XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Delete XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-3 bg-info text-white p-3">
                                                <h5 className="text-center">XXXXX</h5>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> show XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Add XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Edit XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Delete XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-3 bg-secondary text-white p-3">
                                                <h5 className="text-center">XXXXX</h5>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> show XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Add XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Edit XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <label className="h5"> Delete XXXXX :</label>

                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        className="h5"
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                    </Tab>

                                </Tabs>

                            </div>

                            <hr className="my-2" />

                            <div className="col-12">
                                <button className="btn btn-lg btn-primary mx-3"> Save Roles </button>

                                <button className="btn btn-lg btn-danger mx-3"> Back</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </GlobalAnimation>
    );
};

export default Add_Roles;
