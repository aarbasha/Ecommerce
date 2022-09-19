import React, { useState, useEffect } from "react";
import FadeOutAnimation from "../../../Animation/FadeOutAnimation";
import { https } from "../../../Api/Axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/esm/Spinner";

const Add_Users = () => {
    const Rediract = useNavigate();
    const location = useLocation();
    const [errorlist, setErrorlist] = useState({});
    const [inputs, setInputs] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        description: "",
        status: "",
        rouls: "",
        password: "",
    });
    const [images, setImages] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.value);
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handelChangeImage = (e) => {
        setImages({ avatar: e.target.files[0] });
        if (e.target.files[0]) {
            setImagePreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const addUserFromAdmin = (e) => {
        setLoading(true);
        e.preventDefault();
        const formData = new FormData();
        formData.append("avatar", images.avatar);
        formData.append("name", inputs.name);
        formData.append("username", inputs.username);
        formData.append("email", inputs.email);
        formData.append("phone", inputs.phone);
        formData.append("password", inputs.password);
        formData.append("description", inputs.description);
        formData.append("status", inputs.status);
        formData.append("rouls", inputs.rouls);
        // console.log(formData);
        https.post("/add-user", formData).then((res) => {
            setTimeout(() => {
                if (res.data.status === 200) {
                    Rediract("/admin/users/all_users");
                    toast.success(" تم الاضافة بنجاح", {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else if (res.data.status === 401) {
                    Rediract(location.pathname);
                    setErrorlist(res.data.Massage);
                }
                setLoading(false);
            }, 2000);
        });
    };

    const [myData, setMyData] = useState({});
    const GetData = async () => {
        await https.get("/user-profile").then((res) => {
            setMyData(res.data.data);
        });
    };

    useEffect(() => {
        GetData();
    }, []);

    const imageRemove = (e) => {
        e.preventDefault();
        setImagePreview(null);
        setImages([])
    };


    return (
        <FadeOutAnimation>
            <div className="card">
                <div className="card-body">
                    <div className="">
                        <form onSubmit={addUserFromAdmin} className="row g-3">
                            <div className="row">
                                <div className="col-4 my-2">
                                    <label className="form-label"> Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter Name"
                                        value={inputs.name}
                                        onChange={handelChange}
                                    />

                                    {errorlist ? (
                                        <div className="m-2 text-danger">{errorlist.name}</div>
                                    ) : null}
                                </div>

                                <div className="col-4 my-2">
                                    <label className="form-label"> Username </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter username"
                                        name="username"
                                        value={inputs.username}
                                        onChange={handelChange}
                                    />

                                    {errorlist ? (
                                        <div className="m-2 text-danger">{errorlist.username}</div>
                                    ) : null}
                                </div>

                                <div className="col-4 my-2">
                                    <label className="form-label">Email </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        name="email"
                                        value={inputs.email}
                                        onChange={handelChange}
                                    />

                                    {errorlist ? (
                                        <div className="m-2 text-danger">{errorlist.email}</div>
                                    ) : null}
                                </div>

                                <div className="col-6 my-2">
                                    <label className="form-label"> Phone </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter phone"
                                        name="phone"
                                        value={inputs.phone}
                                        onChange={handelChange}
                                    />

                                    {errorlist ? (
                                        <div className="m-2 text-danger">{errorlist.phone}</div>
                                    ) : null}
                                </div>

                                <div className="col-6 my-2">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        name="password"
                                        value={inputs.password}
                                        onChange={handelChange}
                                    />
                                    {errorlist ? (
                                        <div className="m-2 text-danger">{errorlist.password}</div>
                                    ) : null}
                                </div>

                                <div className="col-6 my-2">
                                    <label className="form-label">Status</label>
                                    <select
                                        className="form-select"
                                        onChange={handelChange}
                                        name="status"
                                        value={inputs.status}
                                    >
                                        <option>select status</option>
                                        <option value="1">Active</option>
                                        <option value="0">Not Active</option>
                                    </select>

                                    {errorlist ? (
                                        <div className="m-2 text-danger">{errorlist.status}</div>
                                    ) : null}
                                </div>

                                <div className="col-6 my-2">
                                    <label className="form-label">Type</label>
                                    <select
                                        className="form-select"
                                        onChange={handelChange}
                                        name="rouls"
                                        value={inputs.rouls}
                                    >
                                        <option>select rouls</option>
                                        {myData.rouls == 0 ? (
                                            <option value="0">Manger</option>
                                        ) : null}

                                        <option value="1">Admin</option>
                                        <option value="2">User</option>
                                    </select>

                                    {errorlist ? (
                                        <div className="m-2 text-danger">{errorlist.rouls}</div>
                                    ) : null}
                                </div>

                                <div className="col-12 my-2 user-image-uplode">
                                    <input
                                        className="form-control d-none"
                                        type="file"
                                        onChange={handelChangeImage}
                                        name="avatar"
                                        id="files"
                                    />

                                    <label
                                        className="form-label btn btn-danger px-5 "
                                        htmlFor="files"
                                    >
                                        uplode Image Avatar
                                    </label>

                                    <button
                                        disabled={imagePreview === null}
                                        className="form-label mx-3 btn btn-primary"
                                        onClick={imageRemove}
                                    >
                                        Remove Image
                                    </button>

                                    {loading ? (
                                        <>
                                            <span className=" form-label mx-5 user-img rounded-circle">
                                                <Spinner
                                                    animation="grow"
                                                    variant="warning"
                                                    size="md"
                                                    className="Spinner"
                                                />
                                            </span>
                                        </>
                                    ) : (
                                        <img
                                            src={
                                                imagePreview !== null
                                                    ? imagePreview
                                                    : `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y`
                                            }
                                            className="mx-5 user-img rounded-circle"
                                            width={100}
                                            height={100}
                                            alt="test"
                                        />
                                    )}
                                </div>

                                <div className="col-12 my-2">
                                    <label className="form-label">Full description</label>
                                    <textarea
                                        className="form-control"
                                        onChange={handelChange}
                                        name="description"
                                        value={inputs.description || ""}
                                        placeholder="Full description"
                                        rows={3}
                                        cols={4}
                                        defaultValue={
                                            errorlist ? (
                                                <div className="m-2 text-danger">
                                                    {errorlist.description}
                                                </div>
                                            ) : (
                                                " "
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-6 my-2"></div>
                            </div>

                            <div className="col-12">
                                {loading ? (
                                    <>
                                        <button type="submit" className="btn btn-primary px-5">
                                            <Spinner animation="border" variant="danger" size="sm" />
                                        </button>
                                    </>
                                ) : (
                                    <button type="submit" className="btn btn-primary px-4">
                                        Save Add User
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </FadeOutAnimation>
    );
};

export default Add_Users;
