import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FadeOutAnimation from "../../../Animation/FadeOutAnimation";
import { ToastContainer, toast } from 'react-toastify'
import { https } from "../../../Api/Axios";

const Users = () => {
    const rediract = useNavigate();
    const [Users, setUser] = useState([]);
    const [loding, setLodin] = useState(false);
    const [inputs, setInputs] = useState({});
    // const [avatarOnline, setAvtarOnline] = useState(null)
    const GetData = async () => {
        await https.get("/user-profile").then((res) => {
            setInputs(res.data.data);
        });
    };

    // const getAvatarOnline = async (e) => {
    //     await https.get(`https://avatars.abstractapi.com/v1/?api_key=ab1055b9128c4a49a64785c90308ed90&name=Claire%20Florentz`)
    // }

    useEffect(() => {
        GetData();
    }, []);

    useEffect(() => {
        setLodin(true);
        setTimeout(() => {
            getAllUsers();
        }, 1000);
    }, []);

    const getAllUsers = async () => {
        await https.get("/users").then((res) => {

            console.log(res.data.data);
            if (res.status == 200) {
                console.log(res.data.data);
                setUser(res.data.data);
            } else if (res.status == 401) {
                setUser(res.data.data);
            }
            setLodin(false);
        });
    };
    const deleteUser = (id) => {
        https.post("/user/" + id).then((res) => {

            if (res.status == 200) {
                getAllUsers();
                toast.error(' الجذف بنجاح', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            setLodin(false);
        });
    };



    return (
        <FadeOutAnimation>
            <div className="card">
                <div className="card-header py-3">
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-6 me-auto">
                            <div className="ms-auto position-relative">
                                <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                    <i className="bi bi-search" />
                                </div>
                                <input
                                    className="form-control ps-5"
                                    type="text"
                                    placeholder="Search Payment"
                                />
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Users</option>
                                <option>Admins</option>
                                <option>Mangers</option>
                            </select>
                        </div>

                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Status</option>
                                <option>Active</option>
                                <option>Disabled</option>
                                <option>Pending</option>
                                <option>Show All</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Show 10</option>
                                <option>Show 30</option>
                                <option>Show 50</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div>
                        <div className={loding ? "d-none" : "table-responsive"}>
                            <table className="table align-middle mb-0">
                                <thead className="table-light">
                                    <tr className="text-center">
                                        <th>#ID</th>
                                        <th>Avatar</th>
                                        <th>Name</th>
                                        <th>username</th>
                                        <th>Email</th>
                                        <th>phone</th>
                                        <th>status</th>
                                        <th>roles</th>

                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {Users.map((user) => (
                                        <tr className="text-center" key={user.id}>
                                            <td> {user.id}</td>
                                            <td>

                                                {
                                                    user.avatar === "avatar" ?
                                                        <img src={
                                                            `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y`
                                                            // `https://avatars.abstractapi.com/v1/?api_key=ab1055b9128c4a49a64785c90308ed90&name=${user.name}`
                                                        }
                                                            className="user-img rounded-circle"
                                                            alt={user.name ? user.name : "username"}
                                                            width={40}
                                                            height={40}

                                                        />
                                                        :
                                                        <>

                                                            <img src={
                                                                `http://127.0.0.1:8000/photos/${user.avatar}`
                                                            }
                                                                className="user-img rounded-circle"
                                                                alt={user.name ? user.name : "username"}
                                                                width={40}
                                                                height={40}

                                                            />

                                                        </>
                                                }
                                            </td>
                                            <td>{user.name}</td>

                                            <td>{user.username}</td>

                                            <td>
                                                <span className="text-primary p-2">{user.email}</span>

                                            </td>
                                            <td>{user.phone}</td>
                                            <td>
                                                {user.rouls == 2 ? (
                                                    <span className="bg-success p-2 text-white">
                                                        User
                                                    </span>
                                                ) : user.rouls == 0 ? (
                                                    <span className="bg-dark p-2 text-white">Manger</span>
                                                ) : (
                                                    <span className="bg-info p-2 text-dark">Admin</span>
                                                )}
                                            </td>

                                            <td>
                                                {user.status == 1 ? (
                                                    <span className="text-success">Active</span>
                                                ) : (
                                                    <span className="text-danger">Not Active</span>
                                                )}
                                            </td>

                                            <td>
                                                <div className="d-flex justify-content-around">
                                                    {inputs.rouls == 0 ? (
                                                        <>
                                                            <Link
                                                                to={"/admin/users/Users_Profiles/" + user.id}
                                                                className="text-primary btn"
                                                            >
                                                                <i className="bi bi-eye-fill" />
                                                            </Link>
                                                            <Link
                                                                to={"/admin/users/Edit_Users/" + user.id}
                                                                className="text-warning btn"
                                                            >
                                                                <i className="bi bi-pencil-fill" />
                                                            </Link>

                                                            <a
                                                                onClick={() => {
                                                                    deleteUser(user.id);
                                                                }}
                                                                className="text-danger btn"
                                                            >
                                                                <i className="bi bi-trash-fill" />
                                                            </a>
                                                        </>
                                                    ) : inputs.rouls == 1 ? (
                                                        <>
                                                            <Link
                                                                to={"/admin/users/Users_Profiles/" + user.id}
                                                                className="text-primary"
                                                            >
                                                                <i className="bi bi-eye-fill" />
                                                            </Link>

                                                            {user.rouls >= 1 ?
                                                                <Link
                                                                    to={"/admin/users/Edit_Users/" + user.id}
                                                                    className="text-warning"
                                                                >
                                                                    <i className="bi bi-pencil-fill" />
                                                                </Link> : null}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Link
                                                                to={"/admin/users/Users_Profiles/" + user.id}
                                                                className="text-primary"
                                                            >
                                                                <i className="bi bi-eye-fill" />
                                                            </Link>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {loding ? (
                            <div className="spical-spinner">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : null}

                        <nav className={loding ? "d-none" : "float-end mt-3"}>
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#">
                                        Previous
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </FadeOutAnimation>
    );
};

export default Users;
