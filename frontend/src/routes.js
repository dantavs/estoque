import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Products from './pages/Products/index'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Products} />
            </Switch>
        </BrowserRouter>

    )
}