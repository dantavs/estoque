import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Products from './pages/Products/index'
import NewProduct from './pages/NewProduct/index'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Products} />
                <NewProduct path='/newProduct' component={NewProduct} />
            </Switch>
        </BrowserRouter>

    )
}