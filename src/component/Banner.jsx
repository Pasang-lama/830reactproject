import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    alldevice: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    }
};

function Banner(pros) {
    return (
        <div className="banner-items">
            <img src={pros.data.img} className='img-fluid' alt="" />
            <div className="banner-content">
                <div className="banner-heading">{pros.data.heading}</div>
                <div className="sub-heading">{pros.data.subheading}</div>
                <a href="">Shop Now</a>
            </div>
        </div>
    )
}


function BannerSlider() {
    const bannerdata = [
        {
            id: 1,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/highcompress-slider_1.jpg?v=1613716582",
            heading: "Man Bags",
            subheading: "New Man's Collection",
        },
        {
            id: 2,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/highcompress-slider_2.jpg?v=1613716582",
            heading: "new Styles",
            subheading: " Bot's Collection for Men",
        }
    ]
    return (
        <>
            <Carousel responsive={responsive}>
                {
                    bannerdata.map((item, index) => (
                        <Banner data={item} key={index} />
                    ))
                }
            </Carousel>

        </>
    )
}

export default BannerSlider
