import React, { useState } from "react";
import ScaleInAnimation from "../../Animation/ScaleInAnimation";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./style/auth.css";
import { useDispatch, useSelector } from "react-redux";
// import { setAuthInfo } from "../../Data/JWT/authSlice"
import { AuthLogin } from "../../Data/JWT/authSlice";
import { getInfoProfile } from "../../Data/JWT/profileSlice";
import Spinner from "react-bootstrap/esm/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { status } = useSelector(state => state.auth)
  const { token } = useSelector(state => state.auth)
  const { Loading } = useSelector(state => state.auth)
  const [inputs, setInputs] = useState({});

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    dispatch(AuthLogin(inputs));

    setTimeout(() => {
      dispatch(getInfoProfile())
    }, 1000)


    if (localStorage.getItem('token') === token && status === 200) {

      setTimeout(() => {
        if (location.pathname !== "/login") {
          navigate(location.pathname);
        }
        else if (location.pathname === "/login") {
          navigate("/");
        }

      }, 2000);
    } else if (localStorage.getItem('tooken') === null && status === 401) {
      navigate(location.pathname)
    }

    // if (localStorage.getItem("token") !== null) {
    //   dispatch(getInfoProfile())
    //   if (location.pathname !== "/login") {
    //     navigate(location.pathname);
    //   }
    //   else if (location.pathname === "/login") {
    //  navigate("/");
    //   }
    // }
    // if (status === 200 ) {

    // } else if (status === 401) {
    //   navigate(location.pathname)
    // }


  };

  return (
    <ScaleInAnimation>
      <div className="content-auth ">
        <div className="">
          <div className="card shadow rounded-0 overflow-hidden">
            <div className="row g-0">
              <div className="col-lg-6 bg-login d-flex align-items-center justify-content-center">
                <img
                  src="assets/images/error/login-img.jpg"
                  className="img-fluid"
                  alt={null}
                />
              </div>
              <div className="col-lg-6">
                <div className="card-body p-4 p-sm-5">

                  {
                    Loading ? <>
                      <Spinner animation="border" variant="success" role="status" className="float-right Spinner-auth">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </> :
                      null
                  }


                  <h5 className="card-title">Sign In</h5>
                  <p className="card-text mb-5">
                    See your growth and get consulting support!
                  </p>
                  <form onSubmit={handelLogin} className="form-body">
                    <div className="d-grid">
                      <a className="btn btn-white radius-30" href="#">
                        <span className="d-flex justify-content-center align-items-center">
                          <img
                            className="me-2"
                            src="assets/images/icons/search.svg"
                            width={16}
                            alt={null}
                          />
                          <span>Sign in with Google</span>
                        </span>
                      </a>
                    </div>
                    <div className="login-separater text-center mb-4">
                      {" "}
                      <span>OR SIGN IN WITH EMAIL</span>
                      <hr />
                    </div>
                    <div className="row g-3">
                      <div className="col-12">
                        <label
                          htmlFor="inputEmailAddress"
                          className="form-label"
                        >
                          Email Address
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-envelope-fill" />
                          </div>
                          <input
                            type="email"
                            className="form-control radius-30 ps-5"
                            id="inputEmailAddress"
                            placeholder="Email Address"
                            name="email"
                            onChange={handelChange}
                            value={inputs.email}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="inputChoosePassword"
                          className="form-label"
                        >
                          Enter Password
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-lock-fill" />
                          </div>
                          <input
                            type="password"
                            className="form-control radius-30 ps-5"
                            id="inputChoosePassword"
                            placeholder="Enter Password"
                            name="password"
                            onChange={handelChange}
                            value={inputs.password}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        {" "}
                        <a href="authentication-forgot-password.html">
                          Forgot Password ?
                        </a>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          {
                            Loading ?
                              <>
                                <button
                                  type="submit"
                                  className="btn btn-primary radius-30"
                                  disabled
                                >
                                  <Spinner animation="border" variant="success" size="sm" />
                                </button>
                              </>
                              :
                              <>
                                <button
                                  type="submit"
                                  className="btn btn-primary radius-30"
                                  disabled={Loading}
                                >
                                  Login
                                </button>

                              </>
                          }

                        </div>
                      </div>
                      <div className="col-12">
                        <p className="mb-0">
                          Don't have an account yet?{" "}
                          <a href="authentication-signup.html">Sign up here</a>
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

export default Login;
