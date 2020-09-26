import React, { Component } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class AdditionalShopDetails extends Component {
    render() {
        return (
            <Container>
                <Form>
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
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Province</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Khujand</option>
                                <option>Istaravshan</option>
                                <option>Gonchi</option>
                                <option>Nov</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridProvince">
                            <Form.Label>Province</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Sughd</option>
                                <option>NTM</option>
                                <option>Khatlon</option>
                                <option>Badakhshon</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPostalCode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Button variant="secondary" type="cancel">
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
