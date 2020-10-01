import { CCard, CCardBody, CCardHeader, CCardText } from '@coreui/react'
import React, { Component } from 'react'

export default class Inventory extends Component {
    render() {
        return (
            <CCard>
                <CCardHeader>
                    Inventory
                </CCardHeader>
                <CCardBody>
                    <CCardText>
                        Coming soon
                    </CCardText>
                </CCardBody>
            </CCard>
        )
    }
}
