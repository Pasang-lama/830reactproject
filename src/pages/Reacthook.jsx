import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState , useEffect} from 'react'
function Reacthook() {

    var [count , setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000);
    })


    
    return (
        <>
            <Header />
            <section className="container my-5 py-5">
                <h1 className="text-center">React hook {count}</h1>
                <button onClick={() => setCount(count + 1)}>increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>

            </section>
            <Footer />
        </>

    )
}

export default Reacthook
