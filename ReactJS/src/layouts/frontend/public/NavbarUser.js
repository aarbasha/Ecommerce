import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { BsSuitHeart } from "react-icons/bs";
import Logo from "../../../images/brand-logo-2.png";
import "../../frontend/public/Style/Navbar.css";
import FullScreenBtn from "../../admin/Extensions/FullScreenBtn";
// import NavbarSerch from "../../admin/Navbar/NavbarSerch"
import { https } from "../../../Api/Axios";
import Spinner from "react-bootstrap/esm/Spinner";
import { getInfoProfile } from "../../../Data/JWT/profileSlice";
import { useDispatch } from "react-redux";

const NavbarUser = (props) => {
  // const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false);
  const Rediract = useNavigate();
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  const SendToMyProfile = () => {
    Rediract("/user/myProfile");
  };

  // useEffect(() => {
  //   dispatch(getInfoProfile())
  // }, [dispatch])

  const Logout = async () => {
    await https.post("/logout").then((res) => {
      // console.log(res);
      localStorage.removeItem("token");
      localStorage.removeItem("roles");
      Rediract("/login");
    });
  };
  return (
    <header>
      <nav className="navbar navbar-user navbar-expand-lg fixed-top rounded-0 border-bottom">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} width={140} />
          </Link>
          <button id="toogle" className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon" /> */}

            <i onClick={handleClick} className={isActive ? "bi bi-chevron-double-up navbar-toggler-icon"
              : "bi bi- bi-chevron-double-down navbar-toggler-icon"}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href=""
                  data-bs-toggle="dropdown">
                  Services
                  <i className="bi bi-chevron-down align-middle ms-2" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/user/card">
                      card
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/user/favorite">
                      favorite
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <ul className="navbar-nav">
                {localStorage.getItem("token") === null ? (
                  <>
                    <div className="d-flex justify-content-center mx-2 ms-3 gap-3">
                      <NavLink to="/login" className="Login btn btn-outline-primary px-3 radius-30">
                        Login
                      </NavLink>
                      <NavLink to="/singup" className="Signup btn btn-outline-primary px-3 radius-30">
                        Sign Up
                      </NavLink>
                    </div>
                  </>
                ) : (
                  <>
                    <li className="nav-item  d-flex align-items-center ">
                      <NavLink to="/user/card"
                        className="btn  btn-outline-primary position-relative me-lg-3 rounded-circle">
                        <FiShoppingCart />
                        <span
                          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          123
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </NavLink>
                    </li>

                    <li className="nav-item  d-flex align-items-center ">
                      <NavLink to="/user/favorite"
                        className="btn btn-outline-danger position-relative me-lg-3 rounded-circle">
                        <BsSuitHeart />
                        <span
                          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          500
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </NavLink>
                    </li>


                    {
                      props.Loading ?
                        <>
                          <span className="mx-3 my-2">
                            <Spinner animation="border" size="md" variant="primary" />
                          </span>

                        </>
                        :

                        <>
                          <li className="nav-item dropdown dropdown-large ml-5">
                            <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
                              data-bs-toggle="dropdown">
                              <div className="user-setting d-flex align-items-center gap-1">

                                {
                                  props.avatarPreview !== null ?
                                    <>
                                      <img src={props.avatarPreview ? props.avatarPreview : props.data.avatar !== "avatar" ?
                                        `http://127.0.0.1:8000/photos/${props.data.avatar}` :
                                        `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y`}
                                        alt={props.data.name ? props.data.name : null}
                                        className="user-img rounded-circle" width={40} height={40} />
                                    </>
                                    :
                                    props.avatarPreview == null ?
                                      <>
                                        <img src={props.data.avatar !== "avatar" ?
                                          `http://127.0.0.1:8000/photos/${props.data.avatar}` :
                                          `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y`}
                                          alt={props.data.name ? props.data.name : null}
                                          className="user-img rounded-circle" width={40} height={40} />

                                      </>
                                      :
                                      null

                                }


                                <div className="user-name d-sm-block mx-2">
                                  {props.data.name ? props.data.name : null}
                                </div>
                              </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <div className="d-flex align-items-center">



                                    {
                                      props.avatarPreview !== null ?
                                        <>
                                          <img src={props.avatarPreview ? props.avatarPreview : props.data.avatar
                                            !== "avatar" ?
                                            `http://127.0.0.1:8000/photos/${props.data.avatar}` :
                                            `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y`}
                                            alt={props.data.name ? props.data.name : null}
                                            className="user-img rounded-circle" width={60}
                                            height={60} />
                                        </>
                                        :
                                        props.avatarPreview == null ?
                                          <>
                                            <img src={props.data.avatar !== "avatar" ?
                                              `http://127.0.0.1:8000/photos/${props.data.avatar}` :
                                              `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y`}
                                              alt={props.data.name ? props.data.name : null}
                                              className="user-img rounded-circle" width={60}
                                              height={60} />

                                          </>
                                          :
                                          null


                                    }




                                    <div className="ms-3">
                                      <h6 className="mb-0 dropdown-user-name">
                                        {props.data.name
                                          ? props.data.name
                                          : null}
                                      </h6>
                                      <small
                                        className="mb-0 dropdown-user-designation text-secondary">
                                        {props.data.username
                                          ? props.data.username
                                          : null}
                                      </small>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>

                              {props.data.rouls == 0 ? (
                                <li>
                                  <Link to="/admin/index" className="dropdown-item btn-info">
                                    <button className="dropdown-item">
                                      <div className="d-flex align-items-center">
                                        <div className="setting-icon">
                                          <i className="bi bi-person-fill" />
                                        </div>
                                        <div className="setting-text ms-3">
                                          <span>Manger Dashboard</span>
                                        </div>
                                      </div>
                                    </button>
                                  </Link>
                                </li>
                              ) : null}


                              {props.data.rouls == 1 ? (
                                <li>
                                  <Link to="/admin/index" className="dropdown-item btn-info">
                                    <button className="dropdown-item">
                                      <div className="d-flex align-items-center">
                                        <div className="setting-icon">
                                          <i className="bi bi-person-fill" />
                                        </div>
                                        <div className="setting-text ms-3">
                                          <span> Admin Dashboard</span>
                                        </div>
                                      </div>
                                    </button>
                                  </Link>
                                </li>
                              ) : null}
                              <li>
                                <button className="dropdown-item" onClick={SendToMyProfile}>
                                  <div className="d-flex align-items-center">
                                    <div className="setting-icon">
                                      <i className="bi bi-person-fill" />
                                    </div>
                                    <div className="setting-text ms-3">
                                      <span>Profile</span>
                                    </div>
                                  </div>
                                </button>
                              </li>

                              <li>
                                <Link to="/" className="dropdown-item">
                                  <div className="d-flex align-items-center">
                                    <div className="setting-icon">
                                      <i className="bi bi-speedometer" />
                                    </div>
                                    <div className="setting-text ms-3">
                                      <span>Dashboard</span>
                                    </div>
                                  </div>
                                </Link>
                              </li>

                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button className="dropdown-item" onClick={Logout}>
                                  <div className="d-flex align-items-center">
                                    <div className="setting-icon bg-danger">
                                      <i className="bi bi-lock-fill text-white" />
                                    </div>
                                    <div className="setting-text ms-3">
                                      <span>Logout</span>
                                    </div>
                                  </div>
                                </button>
                              </li>
                            </ul>
                          </li>
                        </>
                    }

                  </>
                )}

                <li className="nav-item border-none mx-2  d-flex align-items-center">
                  <FullScreenBtn />
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarUser;
