import React, { useState } from 'react'
import Carditem from '../components/carditem/Carditem'



const Home = (props) => {

    // const [category,setCategory] = useState("Burger")
    const category = 'burger'
    const [data, setData] = useState([])

    React.useEffect(() => {
        fetch(`https://api.spoonacular.com/food/products/search?query=${category}&apiKey=3afb518361e54e0b94c53614023a5a2a`)
            .then(response => response.json())
            .then(data => {
                setData(data.products)
                console.log(data)
            }
            );
    }, [])

    return (
        <>
            <div className="container">
                    {data?.map((product, indx) => {
                        return <Carditem title={product.title} id={product.id} image={product.image} />
                    })}
            </div>
        </>
    )
}

export default Home
