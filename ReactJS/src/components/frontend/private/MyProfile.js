import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GlobalAnimation from "../../../Animation/GlobalAnimation";
import { https } from "../../../Api/Axios";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/esm/Spinner";
import {
  setAvatarPreview,
  setProfileInfo,
} from "../../../Data/JWT/profileSlice";
import { useDispatch, useSelector } from "react-redux";

const MyProfile = () => {
  const dispatch = useDispatch();

  // const { avatar } = useSelector((state) => state.profile.data);
  const { avatarPreview } = useSelector((state) => state.profile);

  const [loading, setLoading] = useState(false);
  const Rediract = useNavigate();
  const location = useLocation();
  // const [avatar, setAvatar] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    avatar: "",
    description: "",
    rouls: "",
    status: "",
  });
  const [Images, setImages] = useState([]);
  const [errorList, setErrorList] = useState({});
  const [errorlist, setErrorlist] = useState({});
  const [disabled, setDisabled] = useState(true)

  const GetData = async () => {
    await https.get("/user-profile").then((res) => {
      console.log(res.data.data);
      setInputs(res.data.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      GetData();
    }, 1000);
  }, []);

  const handelChange = (e) => {
    if (e.target.value) {
      setDisabled(false)
    }
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handelImages = (e) => {
    if (e.target.files) {
      setImages({ avatar: e.target.files[0] });
      // setAvatar(URL.createObjectURL(e.target.files[0]));
      dispatch(setAvatarPreview(URL.createObjectURL(e.target.files[0])));
    }
  };
  // فانكشن الخاصة بلرفع
  const submitForm = (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", Images.avatar);
    formData.append("name", inputs.name);
    formData.append("username", inputs.username);
    if (Checked === false) {
      formData.append("password", inputs.password)
    }
    formData.append("email", inputs.email);
    formData.append("phone", inputs.phone);
    formData.append("description", inputs.description);
    formData.append("rouls", inputs.rouls);
    formData.append("status", inputs.status);
    // console.log(formData);
    https.post("/user/" + inputs.id + "/up", formData).then((res) => {
      console.log(res);
      setTimeout(() => {
        dispatch(
          setProfileInfo({
            avatar: Images.avatar,
            name: inputs.name,
            username: inputs.username,
            email: inputs.email,
            phone: inputs.phone,
          })
        );
        if (res.data.status == 200) {
          Rediract("/");
          toast.success(" تم التحديث بنجاح", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          setErrorList(res.data.Massage);
          Rediract(location.pathname);
        }
        setLoading(false);
      }, 2000);
    });
  };

  const [Checked, setChecked] = useState(true)

  console.log(Checked);
  const handelChangechecked = (e) => {

    console.log(e.target.checked);
    if (e.target.checked === true) {
      // document.querySelector("#password").setAttribute('disabled', '');
      setChecked(false)
      // document.querySelector("#password").removeAttribute('disabled');
      // document.querySelector("#password").setAttribute('value', '');
    } else {
      setChecked(true)
      // document.querySelector("#password").setAttribute('disabled', '');
      // document.querySelector("#password").removeAttribute('value');
    }


  }
  return (
    <GlobalAnimation>
      <div className="row mt-5">
        <div className="col-12 col-lg-8">
          <div className="card">
            <div className="card-body">
              {/* <div className="w-100 d-flex justify-content-center " style={{ height: "500px" }}>
                      <div className="d-flex align-item-center">
                        <Spinner
                          size="md"
                          animation="grow"
                          variant="info"
                          className="Spinner-content"
                        />
                      </div>
                    </div> */}

              <div className="">
                <form
                  onSubmit={submitForm}
                  className="row g-3"
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-6 my-2">
                      <label className="form-label"> Name</label>
                      <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={handelChange}
                        className="form-control"
                        placeholder="Enter Name"
                      />
                      {errorList ? (
                        <div className="text-danger mt-1">{errorList.name}</div>
                      ) : null}
                    </div>

                    <div className="col-6 my-2">
                      <label className="form-label"> Username </label>
                      <input
                        type="text"
                        name="username"
                        value={inputs.username}
                        onChange={handelChange}
                        className="form-control"
                        placeholder="Enter username"
                      />

                      {errorList ? (
                        <div className="text-danger my-1">
                          {errorList.username}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-12 my-2">
                      <label className="form-label">Email </label>
                      <input
                        type="email"
                        name="email"
                        value={inputs.email}
                        onChange={handelChange}
                        className="form-control"
                        placeholder="Enter Email"
                      />

                      {errorList ? (
                        <div className="text-danger my-1">
                          {errorList.email}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-6 my-2">
                      <label className="form-label"> Phone </label>
                      <input
                        type="number"
                        name="phone"
                        value={inputs.phone}
                        onChange={handelChange}
                        className="form-control"
                        placeholder="Enter phone"
                      />
                      {errorList ? (
                        <div className="text-danger my-1">
                          {errorList.phone}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-6 my-2">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        name="password"
                        id="password"
                        value={Checked ? inputs.password : null}
                        disabled={Checked}
                        onChange={handelChange}
                      />
                      {errorlist ? (
                        <div className="m-2 text-danger">{errorlist.password}</div>
                      ) : null}



                      <div className="form-check form-switch">
                        <input
                          className="form-check-input "
                          type="checkbox"
                          id="Checked"
                          style={{ width: "60px", height: "20px" }}
                          onChange={(e) => handelChangechecked(e)}

                        />
                        <label
                          className={Checked ?
                            "form-check-label mx-3  px-5 my-1 bg-warning  text-dark " :
                            "form-check-label mx-3 px-5  my-1  bg-danger text-white"
                          }
                          htmlFor="Checked"
                          style={{ width: 'auto', height: "20px", "border-radius": "30px" }}
                        >
                          <i className="bi bi-check-circle-fill mx-2" />
                          Change Password ?
                        </label>
                      </div>
                    </div>




                    {
                      inputs.rouls <= 2 ? null : <>

                        <div className="col-6 my-2">
                          <label className="form-label">Type</label>
                          <select className="form-select" name="rouls" onChange={handelChange} value={inputs.rouls}>

                            <option >Select Roules</option>
                            <option value={'2'}>User</option>
                            <option value={'1'}>Admin</option>
                            <option value={'0'}>Manger</option>


                          </select>
                        </div>

                        <div className="col-6 my-2">
                          <label className="form-label">Status</label>
                          <select className="form-select" name="status" onChange={handelChange} value={inputs.status}>
                            <option >Select Status</option>
                            <option value={'1'}>Active</option>
                            <option value={'0'}>Not Active</option>
                          </select>
                        </div>
                      </>
                    }



                    <div className="col-12 my-2">
                      <input
                        name="avatar"
                        onChange={handelImages}
                        className="d-none"
                        type="file"
                        id="file"
                      />
                      <label
                        className="form-label my-3 btn btn-primary"
                        htmlFor="file"
                      >
                        Uplode Image Avatar
                        <i className="bi bi-camera-fill p-2" />
                      </label>
                    </div>

                    <div className="col-12 my-2">
                      <label className="form-label">Full description</label>
                      <textarea
                        onChange={handelChange}
                        className="form-control"
                        defaultValue={''}
                        name="description"

                      />
                    </div>

                    <div className="col-6 my-2"></div>
                  </div>

                  <div className="col-12">
                    {loading ? (
                      <>
                        <button
                          type="submit"
                          style={{ width: "200px" }}
                          className="btn btn-dark px-4 mx-2"
                          disabled={loading}
                        >
                          <Spinner
                            size="sm"
                            animation="border"
                            variant="info"
                          />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="submit"
                          style={{ width: "200px" }}
                          className="btn btn-dark px-4 mx-2"
                          disabled={disabled}
                        >
                          Update User
                        </button>
                      </>
                    )}

                    <button
                      onClick={() => Rediract(-1)}
                      className="btn btn-danger px-4 mx-2"
                      disabled={loading}
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
              {loading ? (
                <>
                  <div
                    className="w-100 d-flex justify-content-center"
                    style={{ width: "250px", height: "250px" }}
                  >
                    <Spinner
                      animation="border"
                      // animation="grow"
                      size="md"
                      variant="primary"
                      className="Spinner-img"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="profile-avatar text-center">
                    {avatarPreview !== null ? (
                      <>
                        <img
                          src={
                            avatarPreview
                              ? avatarPreview
                              : inputs.avatar !== "avatar"
                                ? `http://127.0.0.1:8000/photos/${inputs.avatar}`
                                : `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y`
                          }
                          alt={inputs.name ? inputs.name : null}
                          className="user-img rounded-circle"
                          width={300}
                          height={300}
                        />
                      </>
                    ) : avatarPreview == null ? (
                      <>
                        <img
                          src={
                            inputs.avatar !== "avatar"
                              ? `http://127.0.0.1:8000/photos/${inputs.avatar}`
                              : `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y`
                          }
                          alt={inputs.name ? inputs.name : null}
                          className="user-img rounded-circle"
                          width={300}
                          height={300}
                        />
                      </>
                    ) : (
                      setLoading(true)
                    )}
                  </div>
                </>
              )}

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
              <div className="text-start"></div>
            </div>
          </div>
        </div>
      </div>
    </GlobalAnimation>
  );
};

export default MyProfile;
