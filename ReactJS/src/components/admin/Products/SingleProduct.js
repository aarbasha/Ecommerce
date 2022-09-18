import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import FadeOutAnimation from "../../../Animation/FadeOutAnimation";
import { https } from "../../../Api/Axios";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SingleProduct = () => {

    const { id } = useParams()
    const [prodacts, setProducts] = useState({})
    const [images, setImages] = useState([])
    const [loding, setLodin] = useState(false);

    const getDataProdactByID = () => {
        https.get(`/product/${id}`).then(res => {

            // info prodact
            console.log(res.data.data[0]);
            setProducts(res.data.data[0])

            // images prodact
            console.log(res.data.data[1]);
            setImages(res.data.data[1])
            setLodin(false);

        })
    }

    useEffect(() => {
        setLodin(true);

        setTimeout(() => {
            getDataProdactByID()
        }, 2000);

    }, [])


    return <FadeOutAnimation>
        <div className="card">
            <div className="card-header py-3">
                <h2>Information from prodact : <span className="text-success"> {prodacts.name}</span></h2>
            </div>
            <div className="card-body">
                <div className={loding ? "d-none" : "row"}>
                    <div className="col-lg-5">
                        <Carousel infiniteLoop autoPlay dynamicHeight height={400}>
                            {
                                images.map(image => (
                                    <div>
                                        <img src={`http://localhost:8000/images/${prodacts.categories.name_folder}/${image.url}`} />
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>

                    <div className="col-lg-7 text-center">
                        infoprodact :
                        <div className="h3">{prodacts.id}</div>
                        {/* <div className="h3 text-info">{prodacts.categories.name}</div> */}
                        <div className="h1">{prodacts.name}</div>
                        <div className="h3 text-danger">{prodacts.price} $</div>
                        <div className="h6 text-warning">{prodacts.description}</div>
                    </div>

                </div>

                {loding ? (
                    <div className="spical-spinner">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    </FadeOutAnimation>;
};

export default SingleProduct;
