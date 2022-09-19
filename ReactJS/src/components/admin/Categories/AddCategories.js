import React, { useState, useEffect } from "react";
import FadeOutAnimation from "../../../Animation/FadeOutAnimation";
import { useLocation, useNavigate } from "react-router-dom";
import { https } from "../../../Api/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";

const AddCategories = () => {
  const Rediract = useNavigate();
  const location = useLocation();
  const [previewCover, setPreviewCover] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    name_folder: "",
    info: "",
    auther: "",
  });
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({});
  const [images, setImages] = useState([]);
  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handelChangeImages = (e) => {
    setImages({ cover: e.target.files[0] });
    setPreviewCover(URL.createObjectURL(e.target.files[0]));
  };
  const submitForm = (e) => {
    setLoading(true)
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("name_folder", inputs.name_folder);
    formData.append("info", inputs.info);
    formData.append("cover", images.cover);
    formData.append("auther", myData.username);

    https.post("/add-categorie", formData).then((res) => {
      console.log(res);

      setTimeout(() => {
        if (res.data.status === 200) {
          console.log(res);
          Rediract("/admin/categories/all_categories");
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
          setError(res.data.Massage);
          Rediract(location.pathname);
        }

        setLoading(false)
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

  const RemoveImage = (e) => {
    e.preventDefault()
    setPreviewCover(null)
    setImages([])
  }

  return (
    <FadeOutAnimation>
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="">
                <form onSubmit={submitForm} className="row g-3">
                  <div className="row">
                    <div className="col-12 my-2">
                      <label className="form-label"> Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        value={inputs.name || ""}
                        onChange={handelChange}
                        name="name"
                      />
                    </div>
                    {error ? (
                      <div className="text-danger">{error.name}</div>
                    ) : null}

                    <div className="col-12 my-2">
                      <label className="form-label">
                        {" "}
                        Name folder Images Prodacts{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        value={inputs.name_folder || ""}
                        onChange={handelChange}
                        name="name_folder"
                      />
                    </div>
                    {error ? (
                      <div className="text-danger">{error.name_folder}</div>
                    ) : null}

                    <input
                      type="text"
                      hidden
                      className="form-control"
                      placeholder="Enter Name"
                      value={myData.username}
                      onChange={handelChange}
                      name="auther"
                    />

                    {/* <div className="col-6 my-2">
                    <label className="form-label"> Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"

                    />
                  </div>

                  <div className="col-6 my-2">
                    <label className="form-label"> Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"

                    />
                  </div> */}

                    {/* <div className="col-6 my-2">
                    <label className="form-label">Status</label>
                    <select name="status" className="form-select">
                      <option value={1} >Active</option>
                      <option value={0}>Not Active</option>
                    </select>
                  </div>

                  <div className="col-6 my-2">
                    <label className="form-label">Type</label>
                    <select name="roles" className="form-select">
                      <option value={2}>User</option>
                      <option value={1}>Admin</option>
                      <option value={0}>Manger</option>
                    </select>
                  </div> */}

                    <div className="col-12 my-2">

                      <input
                        name="cover"
                        onChange={handelChangeImages}
                        className="form-control d-none"
                        type="file"
                        id="file"
                      />
                      <label className="form-label my-2 btn btn-secondary" htmlFor="file">
                        Cover Tha Categorie + <i className="bi bi-image mx-3" />
                      </label>

                      <button className="btn btn-primary mx-3" onClick={RemoveImage} disabled={previewCover === null} > Remove image </button>

                      {error ? (
                        <div className="text-danger">{error.cover}</div>
                      ) : null}

                    </div>

                    <div className="col-12 my-2">
                      <label className="form-label">Full description</label>
                      <textarea
                        className="form-control"
                        placeholder="Full description"
                        rows={5}
                        cols={4}
                        defaultValue={""}
                        value={inputs.info || ""}
                        onChange={handelChange}
                        name="info"
                      />

                      {error ? (
                        <div className="text-danger">{error.info}</div>
                      ) : null}

                    </div>

                    <div className="col-6 my-2"></div>
                  </div>

                  <div className="col-12">

                    {
                      loading ?

                        <button type="submit" className="btn btn-dark px-4 mx-2" disabled>
                          <span className="px-4"><Spinner variant="primary" animation="border" size="sm" /></span>
                        </button>
                        :
                        <button type="submit" className="btn btn-dark px-4 mx-2">
                          Add Categories
                        </button>
                    }
                    <button
                      onClick={() => Rediract(-1)}
                      className="btn btn-danger px-4 mx-2"
                    >
                      Back
                    </button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card shadow-sm border-0 overflow-hidden">
            <div className="card-body">
              <div className="profile-avatar text-center">
                {previewCover !== null ? (
                  <img
                    src={previewCover}
                    className="rounded-circle shadow"
                    width={200}
                    height={200}
                    alt="test"
                  />
                ) : null}
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
                  University of Information Technology Lorem University of
                  Information Technology Lorem University of Information
                  Technology Lorem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeOutAnimation>
  );
};

export default AddCategories;
