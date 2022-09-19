import React, { useEffect, useState } from "react";
import FadeOutAnimation from "../../../Animation/FadeOutAnimation";
import { useNavigate, useParams } from "react-router-dom";
import { https } from "../../../Api/Axios";
const Users_Profiles = () => {
    
    const rediract = useNavigate();
    const { id } = useParams();
    const [inputs, setInputs] = useState({});
    const GetUserInfo = async () => {
        await https.get("Users/Users_Profiles/" + id).then((res) => {
            setInputs({
                name: res.data.name,
                email: res.data.email,
                username: res.data.username,
                // password: res.data.password,
                phone: res.data.phone,
                roles: res.data.roles,
                status: res.data.status,
            });
        });
    };

    useEffect(() => {
        GetUserInfo();
    }, []);


    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };
    // فانكشن الخاصة بلرفع
    const submitForm = () => {
        https.post('Users/Users_Profiles/' + id + '/update', inputs).then((res) => {
            rediract("/admin/users/all_users");
        });
    };

    return (
        <FadeOutAnimation>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="">
                                {/* <form className="row g-3"> */}
                                <div className="row">
                                    <div className="col-6 my-2">
                                        <label className="form-label"> Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Enter Name"
                                            value={inputs.name || ""}
                                            onChange={handelChange}
                                        />
                                    </div>

                                    <div className="col-6 my-2">
                                        <label className="form-label"> Username </label>
                                        <input
                                            disabled
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            placeholder="Enter username"
                                            value={inputs.username || ""}
                                        // onChange={handelChange}
                                        />
                                    </div>

                                    <div className="col-12 my-2">
                                        <label className="form-label">Email </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter Email"
                                            value={inputs.email || ""}
                                            onChange={handelChange}
                                        />
                                    </div>

                                    <div className="col-6 my-2">
                                        <label className="form-label"> Phone </label>
                                        <input
                                            type="number"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Enter phone"
                                            value={inputs.phone || ""}
                                            onChange={handelChange}
                                        />
                                    </div>

                                    {/* <div className="col-6 my-2">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Enter Password"
                                            value={inputs.password || ""}
                                            onChange={handelChange}
                                        />
                                    </div> */}

                                    <div className="col-6 my-2">
                                        <label className="form-label">Status</label>
                                        <select name="status" value={inputs.status || ""} onChange={handelChange} className="form-select">
                                            <option value={1} >Active</option>
                                            <option value={0}>Not Active</option>
                                        </select>
                                    </div>

                                    <div className="col-6 my-2">
                                        <label className="form-label">Type</label>
                                        <select name="roles" value={inputs.roles || ""} onChange={handelChange} className="form-select">
                                            <option value={2}>User</option>
                                            <option value={1}>Admin</option>
                                            <option value={0}>Manger</option>
                                        </select>
                                    </div>

                                    <div className="col-12 my-2">
                                        <label className="form-label">Images</label>
                                        <input className="form-control" type="file" />
                                    </div>

                                    <div className="col-12 my-2">
                                        <label className="form-label">Full description</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="Full description"
                                            rows={3}
                                            cols={4}
                                            defaultValue={""}
                                        />
                                    </div>

                                    <div className="col-6 my-2"></div>
                                </div>

                                <div className="col-12">
                                    <button onClick={submitForm} className="btn btn-primary px-4 mx-2">
                                        Update User
                                    </button>

                                    <button
                                        onClick={() => rediract(-1)}
                                        className="btn btn-danger px-4 mx-2"
                                    >
                                        Back
                                    </button>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="card shadow-sm border-0 overflow-hidden">
                        <div className="card-body">
                            <div className="profile-avatar text-center">
                                <img
                                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                                    className="rounded-circle shadow"
                                    width={120}
                                    height={120}
                                    alt="test"
                                />
                            </div>
                            <div className="d-flex align-items-center justify-content-around mt-5 gap-3">
                                <div className="text-center">
                                    <h4 className="mb-0">45</h4>
                                    <p className="mb-0 text-secondary">Friends</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="mb-0">15</h4>
                                    <p className="mb-0 text-secondary">Photos</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="mb-0">86</h4>
                                    <p className="mb-0 text-secondary">Comments</p>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h4 className="mb-1">Jhon Deo, 27</h4>
                                <p className="mb-0 text-secondary">Sydney, Australia</p>
                                <div className="mt-4" />
                                <h6 className="mb-1">HR Manager - Codervent Technology</h6>
                                <p className="mb-0 text-secondary">
                                    University of Information Technology
                                </p>
                            </div>
                            <hr />
                            <div className="text-start">
                                <h5 className>About</h5>
                                <p className="mb-0">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem.
                                </p>
                                <p className="mb-0">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem.
                                </p>
                                <p className="mb-0">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FadeOutAnimation>
    );
};

export default Users_Profiles;
