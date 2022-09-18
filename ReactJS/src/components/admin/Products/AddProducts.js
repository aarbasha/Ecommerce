import React, { useState, useEffect } from "react";
import FadeOutAnimation from "../../../Animation/FadeOutAnimation";
import { useLocation, useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { https } from "../../../Api/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";
import ProgressBar from 'react-bootstrap/ProgressBar';

const AddProducts = () => {
  const Rediract = useNavigate();
  const location = useLocation();
  const [categorys, setCategorys] = useState([]);
  const [cover, setCover] = useState('');
  const [fileUplode, setFileUplode] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [coverPreview, setCoverPreview] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progressBar, setProgressBar] = useState(null)
  // const dispatch = useDispatch()
  // const data = useSelector(state => state.categorie.data)

  // console.log(fileUplode.length === 0);
  // console.log();

  const getAllcategory = async () => {
    await https.get("/categories").then((res) => {
      // console.log(res.data.data);
      setCategorys(res.data.data);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getAllcategory();
    }, 1000);
  }, []);

  const [inputs, setInputs] = useState({
    name: "",
    Categorie_id: "",
    price: "",
    auther: "",
    cover: "",
    images: [],
    description: "",
  });

  const handelChangeInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handelChangeCover = (e) => {
    setCover({ cover: e.target.files[0] });

    setCoverPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handelImages = (e) => {
    setFileUplode(e.target.files);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    // console.log("source: ", source);
    return source.map((photo) => {
      return (
        <img src={photo} key={photo} alt="test" width={100} height={100} />
      );
    });
  };


  const uplodeToServer = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    for (let i = 0; i < fileUplode.length; i++) {
      formData.append("images[]", fileUplode[i]);
    }
    formData.append("name", inputs.name);
    formData.append("auther", myData.username);
    formData.append("Categorie_id", inputs.Categorie_id);
    formData.append("price", inputs.price);
    formData.append("description", inputs.description);
    formData.append("cover", cover.cover);
    https.post("/add-product/", formData, {
      onUploadProgress: (data) => {
        // console.log(Math.floor(((data.loaded / data.total) * 100)));
        setProgressBar(Math.floor(((data.loaded / data.total) * 100)));
      }
    }).then((res) => {
      setTimeout(() => {
        if (res.data.status === 200) {
          Rediract("/admin/Products/All_Products");
          toast.success(" تم الاضافةالمنتج بنجاح", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (res.data.status === 401) {
          // console.log(res.data.Massage);
          setError(res.data.Massage);
          Rediract(location.pathname);
        }
        setLoading(false);
      }, 1000);
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

  const resetForm = (e) => {
    e.preventDefault()
    setSelectedFiles([]);
    setCoverPreview(null);
    setInputs({
      name: "",
      Categorie_id: "",
      price: "",
      auther: "",
      cover: "",
      images: [],
      description: "",
    })
  }

  return (
    <FadeOutAnimation>
      <div className="card">
        <div className="card-body">
          <form onSubmit={uplodeToServer} encType="multipart/form-data">
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mx-3 d-flex justify-content-center"
            >
              <Tab eventKey="home" title="Information Prodact">
                <FadeOutAnimation>
                  <div className="row">
                    <div className="col-4 my-2">
                      <label className="form-label"> name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Product Name"
                        onChange={handelChangeInputs}
                        value={inputs.name}
                        name="name"
                      />
                      {error ? (
                        <span className="text-danger my-1">{error.name}</span>
                      ) : null}
                    </div>

                    <div className="col-4 my-2">
                      <label className="form-label"> price </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Product Price"
                        onChange={handelChangeInputs}
                        value={inputs.price}
                        name="price"
                      />
                      {error ? (
                        <span className="text-danger my-1">{error.price}</span>
                      ) : null}
                    </div>

                    {/* ------------------------------------------------------------------ */}
                    <input
                      hidden
                      type={"text"}
                      name="auther"
                      value={myData.username}
                      onChange={handelChangeInputs}
                    />
                    {/* ------------------------------------------------------------------ */}

                    <div className="col-4 my-2">
                      <label className="form-label">number </label>
                      <input
                        disabled
                        type="email"
                        className="form-control"
                        placeholder="Product Serial Number"
                      />
                    </div>

                    <div className="col-4 my-2">
                      <label className="form-label"> quantity</label>
                      <input
                        disabled
                        type="number"
                        className="form-control"
                        placeholder="Enter Product Quantity"
                      />
                    </div>

                    <div className="col-4 my-2">
                      <label className="form-label"> discount </label>
                      <input
                        disabled
                        type="number"
                        className="form-control"
                        placeholder="Enter Product Discount"
                      />
                    </div>

                    <div className="col-4 my-2">
                      <label className="form-label">Status</label>
                      <select
                        disabled
                        className="form-select mb-3"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value={1}>available</option>
                        <option value={2}>not available</option>
                      </select>
                    </div>

                    <div className="col-4 my-2">
                      <label className="form-label"> colors</label>
                      <input
                        disabled
                        type="color"
                        className="form-control"
                        placeholder="Enter Name"
                      />
                    </div>

                    <div className="col-4 my-2">
                      <label className="form-label"> Sizes </label>
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                      />
                    </div>

                    <div className="col-4 my-2">
                      <label className="form-label">Brands </label>
                      <input
                        disabled
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Date time:</label>
                      <input
                        disabled
                        type="datetime-local"
                        className="form-control"
                      />
                    </div>

                    <div className="col-6 my-2">
                      <label className="form-label"> Main Categories </label>
                      <select
                        className="form-select mb-3"
                        aria-label="Default select example"
                        onChange={handelChangeInputs}
                        value={inputs.Categorie_id}
                        name="Categorie_id"
                      >
                        <option selected>Open this select menu</option>

                        {categorys.map((item) => (
                          <option value={item.id}>{item.name}</option>
                        ))}
                      </select>
                      {error ? (
                        <span className="text-danger my-1">
                          {error.Categorie_id}
                        </span>
                      ) : null}
                    </div>

                    <div className="col-6 my-2">
                      <label className="form-label">
                        {" "}
                        Branched Categories{" "}
                      </label>
                      <select
                        disabled
                        className="form-select mb-3"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                  </div>
                </FadeOutAnimation>
              </Tab>

              <Tab eventKey="contact" title="Discription and Sava Prodact ">
                <FadeOutAnimation>
                  <div className="row">
                    <div className="col-12 my-1">
                      <label className="form-label">Full description</label>
                      <textarea
                        className="form-control"
                        placeholder="Full description"
                        rows={14}
                        cols={4}
                        defaultValue={""}
                        onChange={handelChangeInputs}
                        value={inputs.description}
                        name="description"
                      />
                    </div>
                    {error ? (
                      <span className="text-danger">{error.description}</span>
                    ) : null}


                  </div>
                </FadeOutAnimation>
              </Tab>

              <Tab eventKey="profile" title="Uplode Photos Prodact">
                <FadeOutAnimation>
                  <div className="row">
                    <div className="col-lg-4 col-12 my-2 d-flex justify-content-center ">
                      <input
                        className="form-control d-none"
                        name="cover"
                        type="file"
                        id="file"
                        onChange={handelChangeCover}
                      />
                      <label className="form-label my-2 btn btn-success" htmlFor="file">
                        product cover + <i className="bi bi-image mx-4" />
                      </label>
                      {error ? (
                        <span className="text-danger my-1">{error.cover}</span>
                      ) : null}
                    </div>

                    <div onClick={e => resetForm(e)} className="col-lg-4 col-12 my-2 d-flex justify-content-center ">
                      <button className="my-2 btn btn-primary" >
                        Reset OR Clear all input fields x
                      </button>
                    </div>

                    <div className="col-lg-4 col-12 my-2 d-flex justify-content-center">
                      <input
                        className="form-control d-none"
                        name="images[]"
                        type="file"
                        multiple
                        id="files"
                        onChange={handelImages}
                      />
                      <label className="form-label my-2 btn btn-danger " htmlFor="files">
                        images / Multiple +++ / <i className="bi bi-images mx-4 " />
                      </label>
                      {error ? (
                        <span className="text-danger my-1">{error.images}</span>
                      ) : null}
                    </div>


                    <div className="row ">
                      <div className=" mx-1 card-body border border-dark d-flex my-2 justify-content-around" style={{ 'min-height': '135px' }}>


                        {coverPreview !== null ? (
                          <img
                            className="previewimg"
                            src={coverPreview}
                            alt="test"
                            width={100}
                            height={100}
                          />
                        ) : null}

                      </div>

                      <div className=" d-flex my-2  mx-1 card-body border border-info flex-wrap justify-content-around" style={{ 'min-height': '135px' }}>

                        {renderPhotos(selectedFiles)}


                      </div>



                      {progressBar === null ? null :

                        <div className="progress p-0 mt-2" style={{ "font-size": '16px', height: "30px" }}>
                          <div

                            className={
                              progressBar <= 35 ? "progress-bar bg-danger " :
                                progressBar <= 66 ? "progress-bar bg-warning " :
                                  progressBar <= 100 ? "progress-bar bg-success " : null}
                            role="progressbar"
                            style={{ width: `${progressBar}%` }}
                            aria-valuenow={progressBar}
                            aria-valuemin='0'
                            aria-valuemax='100'>
                            {`${progressBar}%`}
                          </div>
                        </div>

                      }


                      {/* <ProgressBar
                          className="p-0 progressBar"
                          animated
                          max={100}
                          min={0}
                          // variant="success"
                          now={progressBar}
                          label={`${progressBar}%`} />  */}


                    </div>


                    <div className="col-12 mt-3 mx-2 d-flex justify-content-center">
                      {loading ? (
                        <>
                          <button
                            type="submit"
                            className="btn btn-dark  mx-2"
                            style={{ width: "200px" }}
                            disabled
                          >
                            <span className="px-2">
                              <Spinner
                                animation="border"
                                variant="primary"
                                size="sm"
                              />
                            </span>
                            Add Prodact
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="submit"
                            className="btn btn-dark  mx-2"
                            style={{ width: "200px" }}
                          >
                            Add Prodact
                          </button>
                        </>
                      )}

                      <button
                        onClick={() => Rediract(-1)}
                        className="btn btn-danger px-4 mx-2"
                        style={{ width: "200px" }}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </FadeOutAnimation>
              </Tab>
            </Tabs>
          </form>
        </div>
      </div>
    </FadeOutAnimation>
  );
};

export default AddProducts;
