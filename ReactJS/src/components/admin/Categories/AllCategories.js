import React, { useEffect, useState } from "react";
import FadeOutAnimation from "../../../Animation/FadeOutAnimation";
import { useNavigate } from "react-router-dom";
import { https } from "../../../Api/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcOpenedFolder } from "react-icons/fc";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "../ModalDelete";

const AllCategories = () => {
  const Rediract = useNavigate();
  const [loding, setLodin] = useState(false);
  const [categories, setCategories] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setLodin(true);
    setTimeout(() => {
      GetAllCategories();
    }, 1000);
  }, []);

  const GetAllCategories = async () => {
    await https.get("/categories").then((res) => {
      setCategories(res.data.data);
      setLodin(false);
    });
  };

  const deleteCategorie = (id) => {
    https.post("/categorie/" + id).then((res) => {
      // console.log(res);
      setModalShow(false);
      GetAllCategories();
      toast.error(" الجذف بنجاح", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
          <div className={loding ? "d-none" : "table-responsive"}>
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr className="text-center">
                  <th>#ID</th>
                  <th>Name</th>
                  <th>cover</th>
                  <th>
                    name_folder <FcOpenedFolder size={20} />
                  </th>
                  <th>info</th>
                  <th>
                    auther <FaUserAlt color="red" size={15} />
                  </th>
                  <th>Date add </th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr className="text-center" key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                    <td>
                      <img
                        src={"http://127.0.0.1:8000/cover/" + c.cover}
                        className="rounded-circle"
                        width={44}
                        height={44}
                        alt="test"
                      />
                    </td>

                    <td>{c.name_folder}</td>
                    <td>{c.info}</td>

                    <td>{c.auther}</td>
                    <td>{c.created_at}</td>

                    <td>
                      <div className="d-flex justify-content-center align-items-center gap-3 fs-6">
                        <Link
                          to={`/admin/categories/productsGrid/${c.id}`}
                          className="text-primary btn"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="View detail"
                          aria-label="Views"
                        >
                          <i className="bi bi-eye-fill" />
                        </Link>
                        <Link
                          to={`/admin/categories/edit_categories/${c.id}`}
                          className="text-warning btn"
                        >
                          <i className="bi bi-pencil-fill" />
                        </Link>
                        <button
                          variant="primary"
                          onClick={() => setModalShow(true)}
                          // onClick={}
                          className="text-danger btn"
                        >
                          <i className="bi bi-trash-fill" />
                        </button>
                      </div>

                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        onDelete={() => {
                          deleteCategorie(c.id);
                        }}
                        id={c.id}
                        name={c.name}
                        img={c.cover}
                      />
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


export default AllCategories;
