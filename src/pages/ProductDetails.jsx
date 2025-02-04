import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function ProductDetails() {

    const [produt_data, setProductData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(jsondata => setProductData(jsondata))

    }, [])

    const { id } = useParams()

    const result = produt_data.filter((item) => item.id == id)
    console.log(result);

    return (
        <>
            <Header />
            <section className="container my-5">
                <h1 className="border-bottom">Product details: {result[0]?.title}</h1>
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <figure>
                            <img src={result[0]?.image} alt="" className='img-fluid' />
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <h3>{result[0]?.title}</h3>
                        <div className="price">${result[0]?.price}</div>
                        <div className="rating">{result[0]?.rating.rate}(Rating)</div>
                        <p className="description">{result[0]?.description}</p>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProductDetails
