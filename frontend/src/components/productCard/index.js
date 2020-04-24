import React from 'react'

import './styles.css'

function handleDelete(){
    alert('Delete')
}

function handleDetail(){
    alert('Detail')
}

export default function ProductCard(data) {
    const product = data.product

    return (
        <div className='container' >
        <div className='productCard' onClick={() => {handleDetail()}} >
            <strong>{product.name}</strong>
            <span>{product.category}</span>
            <span>Qty.: {product.quantity}</span>
            <span>Expiration Date: {product.expirationDate}</span>
        </div>
        <div onClick={() => {handleDelete()}} className='productDelete' >x</div>
        </div>
    )
}