import { CCard, CCardHeader, CCardBody, CRow, CDataTable, CImg, CButton, CFooter } from '@coreui/react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const fields = ['name', 'stockCount', 'price']

const sampleProducts = [
    { thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxw-fxctdmJe4w3St3D-sADIpPfAMMMVNktvAq6rtgezO9-HRDwYpMYQmsto56sqFIWgZ_sDDV_BU&usqp=CAc', name: 'Macbook Pro', stockCount: 100, price: '$1900' },
    { thumbnail: 'https://images.unsplash.com/photo-1544896916-6c9b00a2ca30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80', name: 'Macbook Pro', stockCount: 100, price: '$1900' },
    { thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxw-fxctdmJe4w3St3D-sADIpPfAMMMVNktvAq6rtgezO9-HRDwYpMYQmsto56sqFIWgZ_sDDV_BU&usqp=CAc', name: 'Macbook Pro', stockCount: 100, price: '$1900' },
    { thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxw-fxctdmJe4w3St3D-sADIpPfAMMMVNktvAq6rtgezO9-HRDwYpMYQmsto56sqFIWgZ_sDDV_BU&usqp=CAc', name: 'Macbook Pro', stockCount: 100, price: '$1900' },
    { thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxw-fxctdmJe4w3St3D-sADIpPfAMMMVNktvAq6rtgezO9-HRDwYpMYQmsto56sqFIWgZ_sDDV_BU&usqp=CAc', name: 'Macbook Pro', stockCount: 100, price: '$1900' },
    { thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxw-fxctdmJe4w3St3D-sADIpPfAMMMVNktvAq6rtgezO9-HRDwYpMYQmsto56sqFIWgZ_sDDV_BU&usqp=CAc', name: 'Macbook Pro', stockCount: 100, price: '$1900' },
    { thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxw-fxctdmJe4w3St3D-sADIpPfAMMMVNktvAq6rtgezO9-HRDwYpMYQmsto56sqFIWgZ_sDDV_BU&usqp=CAc', name: 'Macbook Pro', stockCount: 100, price: '$1900' },
    { thumbnail: 'https://images.unsplash.com/photo-1544896916-6c9b00a2ca30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80', name: 'Macbook Pro', stockCount: 100, price: '$1900' },
    { thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxw-fxctdmJe4w3St3D-sADIpPfAMMMVNktvAq6rtgezO9-HRDwYpMYQmsto56sqFIWgZ_sDDV_BU&usqp=CAc', name: 'Macbook Pro', stockCount: 100, price: '$1900' },
    { thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxw-fxctdmJe4w3St3D-sADIpPfAMMMVNktvAq6rtgezO9-HRDwYpMYQmsto56sqFIWgZ_sDDV_BU&usqp=CAc', name: 'Macbook Pro', stockCount: 100, price: '$1900' },
    { thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxw-fxctdmJe4w3St3D-sADIpPfAMMMVNktvAq6rtgezO9-HRDwYpMYQmsto56sqFIWgZ_sDDV_BU&usqp=CAc', name: 'Macbook Pro', stockCount: 100, price: '$1900' },
    { thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxw-fxctdmJe4w3St3D-sADIpPfAMMMVNktvAq6rtgezO9-HRDwYpMYQmsto56sqFIWgZ_sDDV_BU&usqp=CAc', name: 'Macbook Pro', stockCount: 100, price: '$1900' },
    { thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxw-fxctdmJe4w3St3D-sADIpPfAMMMVNktvAq6rtgezO9-HRDwYpMYQmsto56sqFIWgZ_sDDV_BU&usqp=CAc', name: 'Macbook Pro', stockCount: 100, price: '$1900' },

]

const getThumbnail = (thumnbailSrc) => {
    return (
        <td style={{ width: 250 }}>
            <CImg
                style={{ width: 200, height: 200 }}
                src={thumnbailSrc}
                className="img-thumbnail m-3"
            >
            </CImg>
        </td>
    )
}

export default class AllProducts extends Component {
    render() {
        return (
            <>
                <CCard>
                    <CCardHeader>
                        All Products
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={sampleProducts}
                            field={fields}
                            striped
                            itemsPerPage={10}
                            pagination
                            scopedSlots={{
                                'thumbnail': (items) => (getThumbnail(items.thumbnail))
                            }}>
                        </CDataTable>
                    </CCardBody>
                    <CFooter>
                        <Link to="/products/create">
                            <CButton className="btn-primary">New Product</CButton>
                        </Link>
                    </CFooter>
                </CCard>
            </>

        )
    }
}
