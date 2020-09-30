import React, { Component } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <Container fluid className="bg pt-5">
                <Row className="justify-content-center">
                    <h1>With Benom you can create online shops with just few clicks</h1>
                </Row>
                <Row className="justify-content-center">
                    <Link to="/shop/create">
                        <Button variant="light" size="lg" class="align-self-center">Create my shop</Button>
                    </Link>
                </Row>
            </Container>
        )
    }
}
