import React, { useState, useEffect } from "react";
import FadeOutAnimation from "../../../Animation/FadeOutAnimation";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { https } from "../../../Api/Axios";

const MasterProducts = () => {
  const Rediract = useNavigate();
  const location = useLocation();
  const slice = location.pathname;
  const my = slice.split("/");

  const [categories, setCategories] = useState([]);
  const getAllCategorie = (e) => {
    https.get('/categories').then(res => {
      setCategories(res.data.data)
    })
  }

  // console.log(categories?.length);

  useEffect(() => {
    getAllCategorie()
  }, [])

  return (
    <FadeOutAnimation>
      <div>
        <div className="page-breadcrumb  d-flex align-items-center mx-2 mb-3">
          <div className="breadcrumb-title pe-3">Ecommerce</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item px-2 text-danger">
                  <a>
                    <i className="bx bx-home-alt mx-3" />
                    {my[2]}
                  </a>
                </li>
                <li className="breadcrumb-item px-2 text-warning">
                  <a>
                    <i className="bx bx-home-alt mx-3" />
                    {my[3]}
                  </a>
                </li>
              </ol>
            </nav>
          </div>

          <div className="ms-auto">



            <NavLink
              to={"/admin/Products/All_Products"}
              type="button"
              className="btn btn-dark mx-2"
            >
              All Products
            </NavLink>


            <button disabled={categories?.length === 0} className={'btn btn-primary mx-2'}>
              <NavLink
                to={"/admin/Products/Add_Products"}
                className="text-white"
              >
                Add Products
              </NavLink>

            </button>


            <div className="d-flex flex-row-reverse">
              <button
                className="btn btn-danger m-3"
                onClick={() => Rediract(-1)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
        {/*end breadcrumb*/}
        <Outlet />
      </div>
    </FadeOutAnimation>
  );
};

export default MasterProducts;
