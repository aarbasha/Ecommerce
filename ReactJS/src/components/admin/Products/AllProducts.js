import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FadeOutAnimation from "../../../Animation/FadeOutAnimation";
import { https } from "../../../Api/Axios";
import { ToastContainer, toast } from "react-toastify";


const AllProducts = () => {
    const Rediract = useNavigate();

    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [empty, setEmpty] = useState(false)
    const [loding, setLodin] = useState(false);

    useEffect(() => {
        setLodin(true);
        getAllCategorie()
        setTimeout(() => {
            // if (categories.length > 0) {
            //     setLodin(false)
            //     setEmpty(true) 
            // } else {
            getAllproducts();
            // }
        }, 2000);
    }, []);

    const getAllCategorie = (e) => {

        https.get('/categories').then(res => {
            setCategories(res.data.data)
        })
    }



    const getAllproducts = () => {
        https.get("/products").then((res) => {
            if (res.data.status === 200) {

                if (res.data.data.length > 0) {
                    setProducts(res.data.data);
                } else if (res.data.data.length === 0) {
                    setEmpty(true)
                }

            } else {
                setLodin(true);
            }
            setLodin(false);
        });
    };

    const deleteProdact = async (id) => {
        console.log(id);
        await https.post(`/product/${id}`).then(res => {
            Rediract('/admin/Products/All_Products')
            getAllproducts();
            toast.error(" تم الحذف  بنجاح", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }

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
                                    <tr>
                                        <th>#ID</th>
                                        <th>Name</th>
                                        <th>cover</th>
                                        <th>price</th>
                                        <th>Categorie</th>
                                        <th>Data</th>
                                        <th>auther</th>
                                        <th>الكمية</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item) => (
                                        <tr key={item.id}>
                                            <td> {item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-3 cursor-pointer">
                                                    <img
                                                        src={`http://localhost:8000/cover/${item.cover}`}
                                                        className="user-img rounded-circle"
                                                        alt={item.name ? item.name : "username"}
                                                        width={40}
                                                        height={40}
                                                    />
                                                </div>
                                            </td>

                                            <td>{item.price} $</td>
                                            <td>{item.categories.name}</td>

                                            <td>{item.created_at}</td>
                                            <td>{item.auther}</td>

                                            <td>55</td>

                                            <td>
                                                <div className="d-flex align-items-center gap-3 fs-6">
                                                    <Link
                                                        to={"/admin/Products/Single_Products/" + item.id}
                                                        className="text-primary btn"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        data-bs-original-title="View detail"
                                                        aria-label="Views"
                                                    >
                                                        <i className="bi bi-eye-fill" />
                                                    </Link>
                                                    <Link
                                                        to={"/admin/Products/Edit_Products/" + item.id}
                                                        className="text-warning btn"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        data-bs-original-title="Edit info"
                                                        aria-label="Edit"
                                                    >
                                                        <i className="bi bi-pencil-fill" />
                                                    </Link>
                                                    <button
                                                        onClick={() => deleteProdact(item.id)}
                                                        className="text-danger btn"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        data-bs-original-title="Delete"
                                                        aria-label="Delete"
                                                    >
                                                        <i className="bi bi-trash-fill" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {
                            empty ? <h2 className="text-center my-5 text-danger">لا يوجد منتجات لعرضها يرجى اضافة منتج ليتم العرض </h2> : null
                        }

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

export default AllProducts;
