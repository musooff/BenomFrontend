import React, { Component } from 'react'
import { Container, Row, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class CreateShop extends Component {

    render() {
        return (
            <Container className="pt-5">
                <Row className="justify-content-center">
                    <Form>
                        <Form.Group controlId="shopName">
                            <Form.Label>Shop name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your shop name" />
                        </Form.Group>
                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="phoneNumber" placeholder="923332211" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter a new password" />
                        </Form.Group>

                        <Link to="/shop/create/additional">
                            <Button variant="dark" type="submit" className="">
                                Create my shop
                            </Button>
                        </Link>
                    </Form>

                </Row>
            </Container>
        );
    }
}
