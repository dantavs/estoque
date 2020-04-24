import React from 'react'

import ProductCard from '../productCard'

export default function ProductList(data){
    const productList = data.products
    const search = data.search
    console.log('search: ', data.search)

    return (
        <div>
            <h2>Product list</h2>
            <ul className='productList' >
                {productList
                    .filter(product => {
                        return product.name.toLowerCase().includes(search)
                    })
                    .map(product => (
                        <li>
                            <ProductCard product={product} />
                        </li>
                    ))
                } 
            </ul>
        </div>
    )
}