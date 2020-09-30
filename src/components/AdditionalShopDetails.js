import React, { Component } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class AdditionalShopDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            province: null,
            city: null,
            provinces: [{
                "name": "Вилояти Суғд",
                "id": 149
            },]
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/constants/province/all")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        provinces: result
                    })
                    console.log(this.state.provinces)
                }
            )
    }

    provinceSelect = (event) => {
        var provinceId = event.target.value
        var province = this.state.provinces.find(province => province.id == provinceId)
        this.setState({
            province: province
        })
    
    }

    citySelect = (event) => {
        var cityId = event.target.value
        var city = this.state.province.cities.find(city => city.id == cityId)
        this.setState({
            city: city
        })
    }


    render() {
        return (
            <Container className="pt-5">
                <Form className="justify-content-center">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your first name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your last name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridProvince">
                            <Form.Label>Province</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." onChange={this.provinceSelect}>
                                <option>Choose...</option>
                                {
                                    this.state.provinces.map(function (province) {
                                        return <option key={province.id} value={province.id}>{province.name}</option>
                                    })
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                {
                                    this.state.province?.cities.map(function (city) {
                                        return <option key={city.id} value={city.id}>{city.name}</option>
                                    })
                                }
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPostalCode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="justify-content-end">
                        <Button variant="secondary" type="cancel" className="mr-2">
                            Go Back
                        </Button>
                        <Link to="/dashboard">
                            <Button variant="dark" type="submit">
                                Submit
                            </Button>
                        </Link>
                    </Form.Row>
                </Form>
            </Container>
        )
    }
}
