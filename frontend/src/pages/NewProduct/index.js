import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function NewProduct() {
    return (
        <div className='containerNewProduct'>
            <div className="headerNewProduct">
                <h2>New Product</h2>
                <Link to='/'>voltar</Link>
            </div>

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
                <button className='button'>Add Product</button>
            </form>
        </div>
    )
}