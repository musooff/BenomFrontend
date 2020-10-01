import React, { Component } from 'react'

import AllProducts from './AllProducts'
import NoProducts from './NoProducts'

const getProducts = (itemCount) => {
    if (itemCount == 0) {
        return <NoProducts></NoProducts>
    } else {
        return <AllProducts></AllProducts>
    }
}

export default class Products extends Component {
    render() {
        return (
            getProducts(10)
        )
    }
}
