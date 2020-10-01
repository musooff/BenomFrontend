import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCardText } from '@coreui/react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NoProducts extends Component {
    render() {
        return (
            <>
                <CCard>
                    <CCardHeader>
                        No Products found
                    </CCardHeader>
                    <CCardBody className="text-center">
                        <CCardText>Add new products to your store</CCardText>
                        <Link to="/products/create">
                            <CButton className="btn-primary">New Product</CButton>
                        </Link>
                    </CCardBody>

                </CCard>
            </>
        )
    }
}
