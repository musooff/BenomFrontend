import React, { Component } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import * as Yup from 'yup';
import { Formik } from 'formik';

const NOT_SELECTED = "Choose...";

const schema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    phoneNumber: Yup.number().required(),
    password: Yup.string().required(),
    address: Yup.string().required(),
    province: Yup.string()
        .test("", "Province error", function (value) {
            return value != NOT_SELECTED
        }).required(),
    city: Yup.string()
        .test("", "City error", function (value) {
            return value != NOT_SELECTED
        }).required(),
    postalCode: Yup.number().required()
});

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
                }
            )
    }

    createShop = (values) => {
        var shop = {
            name: this.props.match.params.name,
            phoneNumber: values.phoneNumber,
            password: values.password,
            email: "benom@benom.com",
            address: {
                province: values.province,
                city: values.city,
                postalCode: values.postalCode,
                address: values.address
            },
            merchant: {
                firstName: values.firstName,
                lastName: values.lastName
            }

        }
        console.log(shop)
        fetch("http://localhost:8080/shop/create", {
            method: 'POST',

            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(shop)
        })
            .then(() => {
                this.props.history.push(`/dashboard`)
            }, () => {
                alert(`Error occured`);
            }
            )
    }

    provinceSelect = (event) => {
        var provinceName = event.target.value
        var province = this.state.provinces.find(province => province.name == provinceName)
        this.setState({
            province: province
        })

    }

    citySelect = (event) => {
        var cityName = event.target.value
        var city = this.state.province.cities.find(city => city.name == cityName)
        this.setState({
            city: city
        })
    }


    render() {
        return (
            <Formik
                validationSchema={schema}
                onSubmit={this.createShop}
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    password: '',
                    address: '',
                    province: NOT_SELECTED,
                    city: NOT_SELECTED,
                    postalCode: ''
                }}>
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                    setFieldValue
                }) => (
                        <Container className="pt-5">
                            <Form className="justify-content-center" noValidate onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            placeholder="Enter your first name"
                                            onChange={handleChange}
                                            value={values.firstName}
                                            isInvalid={!!errors.firstName} />
                                        <Form.Control.Feedback type="invalid">
                                            First name can not be empty
                                            </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            placeholder="Enter your last name"
                                            onChange={handleChange}
                                            value={values.lastName}
                                            isInvalid={!!errors.lastName} />
                                        <Form.Control.Feedback type="invalid">
                                            Last name can not be empty
                                            </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridPhoneNumber" className="col-3">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Phone number"
                                            onChange={handleChange}
                                            value={values.phoneNumber}
                                            isInvalid={!!errors.phoneNumber} />
                                        <Form.Control.Feedback type="invalid">
                                            Phone number can not be empty
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword" className="col-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            onChange={handleChange}
                                            value={values.password}
                                            isInvalid={!!errors.password} />
                                        <Form.Control.Feedback type="invalid">
                                            Password name can not be empty
                                            </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        placeholder="1234 Main St"
                                        onChange={handleChange}
                                        value={values.address}
                                        isInvalid={!!errors.address}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Address can not be empty
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridProvince">
                                        <Form.Label>Province</Form.Label>
                                        <Form.Control
                                            as="select"
                                            value={values.province}
                                            onChange={(event) => {
                                                this.provinceSelect(event)
                                                setFieldValue("province", event.target.value)
                                            }}
                                            isInvalid={!!errors.province}>
                                            <option>{NOT_SELECTED}</option>
                                            {
                                                this.state.provinces.map(function (province) {
                                                    return <option key={province.id} value={province.name}>{province.name}</option>
                                                })
                                            }
                                        </Form.Control>

                                        <Form.Control.Feedback type="invalid">
                                            Please select province
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            as="select"
                                            value={values.city}
                                            onChange={(event) => {
                                                this.citySelect(event)
                                                setFieldValue("city", event.target.value)
                                            }}
                                            isInvalid={!!errors.city}>
                                            <option>Choose...</option>
                                            {
                                                this.state.province?.cities.map(function (city) {
                                                    return <option key={city.id} value={city.name}>{city.name}</option>
                                                })
                                            }
                                        </Form.Control>

                                        <Form.Control.Feedback type="invalid">
                                            Please select city
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPostalCode">
                                        <Form.Label>Postal Code</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="postalCode"
                                            placeholder="Enter postal code"
                                            onChange={handleChange}
                                            value={values.postalCode}
                                            isInvalid={!!errors.postalCode} />
                                        <Form.Control.Feedback type="invalid">
                                            Postal code can not be empty
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row className="justify-content-end">
                                    <Button variant="secondary" type="cancel" className="mr-2">Go Back</Button>
                                    <Button variant="dark" type="submit">Submit</Button>
                                </Form.Row>
                            </Form>
                        </Container>
                    )}

            </Formik>
        )
    }
}
