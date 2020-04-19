import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FiTrash2, FiDollarSign } from 'react-icons/fi'

import './styles.css'
import api from '../../services/api'


export default function Products() {
    const history = useHistory()

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() =>{
        api.get('products').then(response => {
            setProducts(response.data)
            console.log(response.data)
        })
    }, [])

    function handleProductDetail(productId){
        history.push(`productDetail/${productId}`)
    }

    return (
        <div className='products-container'>
            <h2> Lista de Produtos </h2>

            <div className="products-header">
                <input type="text" className="buscaProduct" placeholder='Search for a product' />
                <Link to='newProduct' className='button' >Add Product</Link>
            </div>
            <div className="products-content">
                <ul>
                    {products
                        .map(product =>(
                            <li onClick={() => handleProductDetail(product.id)} key={product.id}>
                                <strong>{product.name}</strong>
                                <span className="categoria">{product.category}</span>
                                <span>Qty: {product.quantity}</span>
                                <span>Expiration date: {product.expirationDate}</span>
                                <div className="actionItem">
                                    <button className="productAction"><FiTrash2 /></button>
                                    <button className="productAction"><FiDollarSign /></button>
                                </div>
                            </li>
                        ))

                    }
                    <li onClick={handleProductDetail}>
                        <strong>Produto A</strong>
                        <span className='categoria' >Produto Não Perecível</span>
                        <span>Qty: 2</span>
                        <span>R$ 20,00</span>
                        <div className="actionItem">
                            <button className="productAction"><FiTrash2 /> </button>
                            <button className="productAction"><FiDollarSign /></button>
                        </div>
                    </li>
                    <li>
                        <strong>Produto A</strong>
                        <span className='categoria' >Produto Não Perecível</span>
                        <span>Qty: 2</span>
                        <span>R$ 20,00</span>
                    </li>                
                    <li>
                        <strong>Produto A</strong>
                        <span className='categoria' >Produto Não Perecível</span>
                        <span>Qty: 2</span>
                        <span>R$ 20,00</span>
                    </li>
                    <li>
                        <strong>Produto A</strong>
                        <span className='categoria' >Produto Não Perecível</span>   
                        <span>Qty: 2</span>
                        <span>R$ 20,00</span>
                    </li>                                    
                    <li>
                        <strong>Produto A</strong>
                        <span className='categoria' >Produto Não Perecível</span>   
                        <span>Qty: 2</span>
                        <span>R$ 20,00</span>
                    </li>                          <li>
                        <strong>Produto A</strong>
                        <span className='categoria' >Produto Não Perecível</span>   
                        <span>Qty: 2</span>
                        <span>R$ 20,00</span>
                    </li>                          <li>
                        <strong>Produto A</strong>
                        <span className='categoria' >Produto Não Perecível</span>   
                        <span>Qty: 2</span>
                        <span>R$ 20,00</span>
                    </li>
      
                </ul>
            </div>
        </div>
    )
}