import React, { useState, useEffect } from "react";
import FadeOutAnimation from "../../../Animation/FadeOutAnimation";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { https } from "../../../Api/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/esm/Spinner";

const EditCategories = () => {
  const { id } = useParams();
  const Rediract = useNavigate();
  const location = useLocation();
  const [inputs, setInputs] = useState({
    name: "",
    name_folder: "",
    info: "",
    auther: "",
  });

  const [error, setError] = useState({});
  const [previewCover, setPreviewCover] = useState(null);
  const [images, setImages] = useState([]);
  const [Loading, setLoading] = useState(false)
  const [LoadingPreview, setLoadingPreview] = useState(false);
  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const getOldData = (e) => {
    https.get(`/categorie/${id}`).then((res) => {
      if (res.data.status === 200) {
        setInputs(res.data.data[0]);
        setLoadingPreview(false);
      }
    });
  };

  useEffect(() => {
    setLoadingPreview(true);
    setTimeout(() => {
      getOldData();
    }, 2000);
  }, []);

  const handelChangeImages = (e) => {
    setImages({ cover: e.target.files[0] });
    if (e.target.files[0]) {
      setPreviewCover(URL.createObjectURL(e.target.files[0]));
    }
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

    https.post(`/categorie/${id}/up`, formData).then((res) => {
      console.log(res);

      setTimeout(() => {
        if (res.status === 200) {
          Rediract("/admin/categories/all_categories");
          toast.success(' تم التحديث بنجاح', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (res.data.status === 401) {
          setError(res.data.Massage)
          Rediract(location.pathname);
        }
        setLoading(false)
      }, 3000);

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

  const OldImage = (e) => {
    e.preventDefault()
    setPreviewCover(null)
  }

  return (
    <FadeOutAnimation>
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="">
                <form
                  onSubmit={submitForm}
                  className="row g-3"
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-12 my-2">
                      <label className="form-label"> Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        value={inputs.name}
                        onChange={handelChange}
                        name="name"
                      />

                      {error ? <span className="text-danger">{error.name}</span> : null}
                    </div>

                    <div className="col-12 my-2">
                      <label className="form-label">
                        Name folder Images Prodacts
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        value={inputs.name_folder}
                        onChange={handelChange}
                        name="name_folder"
                      />
                    </div>

                    {/* <div className="col-6 my-2">
                    <label className="form-label"> Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"

                    />
                  </div> */}

                    {/* <div className="col-6 my-2">
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
                  </div> */}

                    {/* <div className="col-6 my-2">
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
                        id="file"
                        onChange={handelChangeImages}
                        className="form-control d-none"
                        type="file"
                      />
                      <label
                        className="form-label my-3 btn btn-info"
                        htmlFor="file"
                      >
                        Images
                      </label>

                      <button
                        className="btn btn-danger mx-2"
                        disabled={previewCover === null}
                        onClick={OldImage}
                      >
                        Back old Image
                      </button>
                    </div>

                    <div className="col-12 my-2">
                      <label className="form-label">Full description</label>
                      <textarea
                        className="form-control"
                        placeholder="Full description"
                        rows={6}
                        cols={6}
                        defaultValue={""}
                        value={inputs.info}
                        onChange={handelChange}
                        name="info"
                      />
                    </div>

                    <div className="col-6 my-2"></div>
                  </div>

                  <div className="col-12">

                    {
                      Loading ? <>
                        <button disabled={Loading} type="submit" className="btn btn-primary px-5  mx-2">
                          <Spinner variant="danger" animation="border" size="sm"/>
                        </button>
                      </> :
                        <>
                          <button type="submit" className="btn btn-primary px-5 mx-2">
                            Update Categories
                          </button>
                        </>
                    }


                    <button
                      onClick={() => Rediract(-1)}
                      className="btn btn-danger px-4 mx-2"
                      disabled={Loading}
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
            <div className="card-body img-view-content">
              <div className="profile-avatar text-center">
                {LoadingPreview ? (
                  <span className="rounded-circle shadow">
                    <Spinner
                      animation="border"
                      variant="warning"
                      size="md"
                      className="Spinner-cat"
                    />
                  </span>
                ) : previewCover !== null ? (
                  <img
                    src={previewCover}
                    className="rounded-circle shadow"
                    width={250}
                    height={250}
                    alt="test"
                  />
                ) : (
                  <img
                    src={"http://127.0.0.1:8000/cover/" + inputs.cover}
                    className="rounded-circle shadow"
                    width={250}
                    height={250}
                    alt="test"
                  />
                )}
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

export default EditCategories;
