import React, { useState } from "react";
import ScaleInAnimation from "../../Animation/ScaleInAnimation";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./style/auth.css";
import { AuthSingUp } from "../../Data/JWT/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from 'react-bootstrap/Spinner';

const Singup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [inputs, setInputs] = useState({});
  const [avatar, setAvatar] = useState([]);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [errorlist, setErrorlist] = useState({});

  const { Loading } = useSelector(state => state.auth)
  const { success } = useSelector(state => state.auth)
  const { status } = useSelector(state => state.auth)
  const { error } = useSelector(state => state.auth)
  




  console.log(Loading);

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handelChangAvatar = (e) => {
    setAvatar({ avatar: e.target.files[0] });
    if (e.target.files) {
      setAvatarPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const SingUpSubmit = (e) => {

    e.preventDefault();

    const data = new FormData()
    data.append('name', inputs.name)
    data.append('username', inputs.username)
    data.append('email', inputs.email)
    data.append('phone', inputs.phone)
    data.append('password', inputs.password)
    data.append('avatar', avatar.avatar)

    dispatch(AuthSingUp(data))

    setTimeout(() => {

      if (status === 201) {
        navigate("/login");
      } else if (status === 400) {
        navigate(location.pathname);
      }

    }, 2000);


  };

  const RemoveAvatar = (e) => {

    e.preventDefault();
    setAvatarPreview(null)
  };
  return (
    <ScaleInAnimation>
      <div className="content-auth-singup ">
        <div className="">
          <div className="card shadow rounded-0 overflow-hidden">
            <div className="row g-0">
              <div className="col-lg-6 bg-login d-flex align-items-center justify-content-center">
                <img
                  src={
                    avatarPreview !== null
                      ? avatarPreview
                      : `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y`
                  }
                  className=" user-img rounded-circle"
                  alt={null}
                  width={200}
                  height={200}
                />
              </div>


              <div className="col-lg-6">
                {
                  success ? <div className="success  h3">{success}</div> : null
                }
                {
                  error ?  <div className="success  h3">{error}</div> : null
                }

                <div className="card-body p-4 p-sm-5">
                  {
                    Loading ? <>
                      <Spinner animation="border" variant="success" role="status" className="float-right Spinner-auth">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </> :
                      null
                  }
                  <h5 className="card-title h3 text-center">Sign Up</h5>
                  <p className="card-text text-center mb-5">
                    See your growth and get consulting support!
                  </p>
                  <form onSubmit={SingUpSubmit} className="form-body">

                    <div className="row  g-4">
                      <div className="col-6 ">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-person-circle" />
                          </div>
                          <input
                            type="text"
                            className="form-control radius-30 ps-5"
                            id="name"
                            placeholder="Enter Name"
                            name="name"
                            onChange={handelChange}
                            value={inputs.name}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-person-circle" />
                          </div>
                          <input
                            type="text"
                            className="form-control radius-30 ps-5"
                            id="username"
                            placeholder="username"
                            name="username"
                            onChange={handelChange}
                            value={inputs.username}
                          />
                        </div>
                      </div>

                      <div className="col-6 ">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-envelope-fill" />
                          </div>
                          <input
                            type="email"
                            className="form-control radius-30 ps-5"
                            id="email"
                            placeholder="Enter Email"
                            name="email"
                            onChange={handelChange}
                            value={inputs.email}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-envelope-fill" />
                          </div>
                          <input
                            type="tel"
                            className="form-control radius-30 ps-5"
                            id="phone"
                            placeholder="phone"
                            name="phone"
                            onChange={handelChange}
                            value={inputs.phone}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <label htmlFor="password" className="form-label">
                          Enter Password
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-lock-fill" />
                          </div>
                          <input
                            type="password"
                            className="form-control radius-30 ps-5"
                            id="password"
                            placeholder="Enter Password"
                            name="password"
                            onChange={handelChange}
                            value={inputs.password}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <label htmlFor="avatar" className="form-label">
                          Select Avatar
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3"></div>
                          <input
                            type="file"
                            className="form-control radius-30 ps-5 d-none"
                            id="file"
                            name="avatar"
                            onChange={handelChangAvatar}
                          />

                          <div className="d-flex align-items-center justify-content-center">
                            <label
                              htmlFor="file"
                              className="form-label mx-3 radius-30 btn btn-success"
                            >
                              + Add
                            </label>

                            <button
                              htmlFor="file"
                              className="form-label px-3  mx-3  radius-30 btn btn-danger"
                              onClick={RemoveAvatar}
                              disabled={avatarPreview === null}
                            >
                              - Remove
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            I Agree to the Trems &amp; Conditions
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-grid">

                          {
                            Loading ? <>
                              <button
                                type="submit"
                                className="btn btn-primary radius-30"
                                disabled
                              >
                                <Spinner animation="border" role="status" size="sm">
                                  <span className="visually-hidden">Loading...</span>
                                </Spinner>
                              </button>
                            </>
                              :
                              <button
                                type="submit"
                                className="btn btn-primary radius-30"
                              >
                                Sign in
                              </button>
                          }


                        </div>
                      </div>
                      <div className="col-12">
                        <p className="mb-0">
                          Already have an account?{" "}
                          <a href="authentication-signin.html">Sign up here</a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScaleInAnimation>
  );
};

export default Singup;
