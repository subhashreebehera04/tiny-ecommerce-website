import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'
const ProductModal  = (props) => {
  
  return (
    <>
     <Dialog open={true} className='productModal' onClose={()=>props.closeProductModal()}>
      <Button class='close_' onClick={()=>props.closeProductModal()}><CloseIcon/></Button>
      <h4 className='mb-0'>Linen Digital Print With Silver Jari - 01</h4>
     </Dialog>
    
    </>
  )
}

export default ProductModal;