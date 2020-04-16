import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

export default function Products() {
    return (
        <div className='products-container'>
            <h2> Lista de Produtos </h2>

            <div className="products-header">
                <input type="text" className="buscaProduct" placeholder='Search for a product' />
                <Link to='newProduct' className='button' >Add Product</Link>
            </div>
            <div className="products-content">
                <ul>
                    <li>
                        <strong>Produto A</strong>
                        <span className='categoria' >Produto Não Perecível</span>
                        <span>Qty: 2</span>
                        <span>R$ 20,00</span>
                        <div className="actionItem">
                            <button>X</button>
                            <button>$</button>
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