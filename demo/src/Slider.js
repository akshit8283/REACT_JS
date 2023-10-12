import React from 'react'
import img from "./image/6.jpeg"
import img1 from "./image/7.jpeg"
import img2 from "./image/8.jpeg"

const Slider = () => {
    return (
        <>
            <div id="carouselExampleIndicators w-100 m-auto" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" ></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img} className="d-block h-75" alt="i1" style={{ width: "100%" }} />
                    </div>
                    <div className="carousel-item">x
                        <img src={img1} className="d-block h-75" alt="i2" style={{ width: "50%" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block h-75" alt="i3" style={{ width: "50%" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default Slider
