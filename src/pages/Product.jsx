import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState, useEffect } from 'react'
import { Link } from "react-router";

function Product() {
const [produt_data, setProductData] = useState([])

useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(jsondata => setProductData(jsondata))

}, [])


    return (
        <>
            <Header />

            <section className="container my-5">
                <h1 className="text-center">Product</h1>

<div className="row gy-4">
    {
        produt_data.map((item, index) => (
            <div className="col-md-3" key={index}>
                <div className="product-card">
                    <img src={item.image} height={200} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <div className="rating">{item.rating.rate}</div>
                        <h5 className="card-title">{item.title}</h5>
                        <p className="price">${item.price}</p>
                        <p className="category">{item.category}</p>
                        <div className="action-btn d-flex gap-3">
                        <button className="btn btn-primary">Add to cart</button>
                        <Link to={`/products/${item.id}`} className="btn btn-primary">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }
</div>

            </section>
            <Footer />
        </>
    )
}

export default Product
