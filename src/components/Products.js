import React, {useEffect,useState} from 'react'
import Product from './ProductList'
import { connect } from 'react-redux'


const Products = () => {
    const [data,setData] = useState(null);
    const [categories,setCategories] = useState(null);

    useEffect( () => {
        fetch("http://localhost:1592/products")
          .then((response) => response.json())
          .then((json) => {
            setData(json)
          });
        fetch("http://localhost:1592/categories")
          .then((response) => response.json())
          .then((json) => {
            setCategories(json)
        });
    }, [])
  return (
    <>
    <div className="relative bg-red-100 min-h-[calc(100vh-7rem)] py-8">
            {data && categories && <Product data={data} categories={categories} />}
            
        </div>
    </>
  )
}

export default connect()(Products)
