import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FiTrash2, FiDollarSign } from 'react-icons/fi'

import './styles.css'
import api from '../../services/api'

import ProductList from '../../components/productList'


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

    function handleInput(e) {
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
    }

    async function handleDelete(id) {
        try {
            await api.delete(`products/${id}`)

            setProducts(products.filter(product => product.id != id))
        } catch(err){
            alert('Delete failed. Please, try again.')
        }

    }

    return (
        <div className='products-container'>
            <h2> Lista de Produtos </h2>

            <div className="products-header">
                <input 
                    type="text" 
                    className="buscaProduct" 
                    placeholder='Search for a product' 
                    onChange={handleInput}
                />
                <Link to='newProduct' className='button' >Add Product</Link>
            </div>
            <div className="products-content">
                <ul>
                    {products
                        .filter((product) => {
                            return product.name.toLowerCase().includes(search)
                        })
                        .map(product =>(
                            <li  key={product.id}>
                                <div onClick={() => handleProductDetail(product.id)} className="productData">
                                    <strong>{product.name}</strong>
                                    <span className="categoria">{product.category}</span>
                                    <span>Qty: {product.quantity}</span>
                                    <span>Expiration date: {product.expirationDate}</span>
                                </div>
                                <div className="actionItem">
                                    <button 
                                        className="productAction"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        <FiTrash2 />
                                    </button>
                                    <button className="productAction"><FiDollarSign /></button>
                                </div>
                            </li>
                        ))

                    }
      
                </ul>

                <ProductList products={products} search={search} />

            </div>
        </div>
    )
}