import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState } from 'react'

function Reacthook() {
    var [count, setCount] = useState(6)
    
    return (
        <>
            <Header />
            <section className="container my-5 py-5">
                <h1 className="text-center">React Hook page</h1>
                <h2>Initial count : {count}</h2>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </section>
            <Footer />
        </>

    )
}

export default Reacthook
