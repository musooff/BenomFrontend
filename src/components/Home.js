import React, { Component } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h1>With Benom you can create online shops with just few clicks</h1>
                </Row>
                <Row>
                    <Link to="/shop/create">
                        <Button variant="dark" >Create my shop</Button>
                    </Link>
                </Row>
            </Container>
        )
    }
}
