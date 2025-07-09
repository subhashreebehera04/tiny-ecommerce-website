import React, { useState } from 'react';
import './ProductItem.css'
import { GiExpand } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import Button from '@mui/material/Button';
import ProductModal from '../ProductModal';
const ProductItem = ({id, name, price, image}) => {
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const viewProductDetails=(id)=>{
    setisOpenProductModal(true);
  }
  const closeProductModal=()=>{
    setisOpenProductModal(false);
  }
  return (
    <>
        <div className='product-item'>
        <div className='product-item-img-container'>
            <img className='product-item-image' src={image} alt=''/>
            <div className='actions'>
              <Button onClick={()=>viewProductDetails(1)}><GiExpand/></Button>
              <Button><GoHeart style={{fontSize:'20px'}}/></Button>
            </div>
        </div>
        <div className='product-item-info'>
            <div className='product-item-name-price'>
                <p className='product-item-name'>{name}</p>
                <p className='product-item-price'>₹{price}</p>
            </div>
            
        </div>
    </div>
    {
      isOpenProductModal===true && <ProductModal closeProductModal=
      {closeProductModal}/>
    }
    {/*  */}
    </>
  );
};

export default ProductItem;