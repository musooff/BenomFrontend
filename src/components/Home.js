import React, { Component } from 'react'
import { Container, Button, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <Container className="pt-5">
                <Jumbotron>
                    <h1>With Benom you can create online shops with just few clicks</h1>
                    <Link to="/shop/create">
                        <Button variant="light" size="lg">Create my shop</Button>
                    </Link>
                </Jumbotron>
            </Container>
        )
    }
}
