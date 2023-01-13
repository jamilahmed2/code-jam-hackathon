import React, { useState } from 'react'
import Carditem from '../components/carditem/Carditem'



const Home = (props) => {

    // const [category,setCategory] = useState("Burger")
    // const category = 'burger'
    const [data, setData] = useState([])

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    React.useEffect(() => {
        // document.title = `${capitalizeFirstLetter(props.category)} - J.A-Foods`
        fetch(`https://api.spoonacular.com/food/products/search?query=${props.category}&apiKey=4df32ad9a2c24ed8b72096710375c685`)
            .then(response => response.json())
            .then(data => {
                setData(data.products)
                console.log(data)
            }
            );
    }, [])

    return (
        <>
        <h1 className='text-center'>Order  {capitalizeFirstLetter(props.category)}  Now</h1>
            <div className="container">
                    {data?.map((product, indx) => {
                        return <Carditem title={product.title} id={product.id} image={product.image} />
                    })}
            </div>
        </>
    )
}

export default Home
