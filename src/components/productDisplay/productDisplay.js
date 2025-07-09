import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './productDisplay.css'
import ProductItem from "../../components/ProductItem/ProductItem";
import { StoreContext } from '../../context/storeContext'
const ProductDisplay = ({category}) => {
    const {product_list} = useContext(StoreContext)
  return (
    <div className='product-display container' id='product-display'>
        <h2 className="ms-3">NEW PRODUCTS</h2>
        <div className='product-display-list'>
            {product_list.map((item, index) => {
                return <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            })}
        </div>
    </div>
  )
} 

export default ProductDisplay