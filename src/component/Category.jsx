import React from 'react'

function Category() {

    const categorydata = [
        {
            id: 1,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/cat-bag-5_670x.jpg?v=1613716577",
            title: "Bag",
        },
        {
            id: 2,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/boot-category-1-3-min_303x.jpg?v=1613716583",
            title: "Footware",
        },
        {
            id: 3,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/cat-watch-2_303x.jpg?v=1613716577",
            title: "watches",
        },
        {
            id: 4,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/wooman-cat_303x.jpg?v=1613716577",
            title: "Women",
        }
    ]

    return (
        <>
        {
            categorydata.map((item, index) => (
                <div className="category-card" key={index}>
                    <a href="">
                        <img src={item.img} className='img-fluid' alt={item.title} />
                        <h3 className="title">{item.title}</h3>
                    </a>
                </div>
            ))
        }
        </>
    )
}

export default Category
