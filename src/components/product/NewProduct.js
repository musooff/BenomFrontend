import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCardText } from '@coreui/react'
import React, { Component } from 'react'

export default class NewProduct extends Component {
    render() {
        return (
            <CCard>
                <CCardHeader>
                    New product
                </CCardHeader>
                <CCardBody>
                    <CCardText>Here add markdown or some editor</CCardText>
                </CCardBody>
                <CCardFooter>
                    <CButton className="btn-primary">Add</CButton>
                </CCardFooter>
            </CCard>
        )
    }
}
