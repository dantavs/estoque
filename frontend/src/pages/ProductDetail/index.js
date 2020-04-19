import React from 'react'

export default function ProductDetail() {
    return (
        <div className="productDetailContainer">
            <header>
                <h2>Product Detail</h2>
            </header>

            <form action="" className="addProduct">
                <input 
                    type="text" 
                    className="productProp"
                    placeholder='Product Name'
                    value=""
                />
                <input 
                    type="text" 
                    className="productProp"
                    placeholder='Quantity'
                    value=""
                />
                <input 
                    type="date" 
                    className="productProp"
                    placeholder='Expiration Date'
                    // value=""
                />
                <input 
                    type="text" 
                    className="productProp"
                    placeholder='Category'
                    value=""
                />
                <button className='button'>Update Product</button>
            </form>
        </div>
    )
}