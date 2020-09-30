import React, { Component } from 'react'
import { Container, Button, Form, Jumbotron } from 'react-bootstrap'
import * as Yup from 'yup';
import { Formik } from 'formik';

const schema = Yup.object({
    name: Yup.string().required(),
});

export default class CreateShop extends Component {

    isShopAvailable = (name) => {
        fetch(`http://localhost:8080/shop/exists?name=${name}`)
            .then(res => res.json())
            .then((result) => {
                if (result.value) {
                    alert(`A shop with a name ${name} already exists`);
                }
                else {
                    this.props.history.push(`/shop/create/additional/${name}`)
                }
            }
            )
    }

    render() {
        return (
            <Formik
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    this.isShopAvailable(values.name)
                }}
                initialValues={{
                    name: ''
                }}>
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors
                }) => (
                        <Container className="pt-5">
                            <Jumbotron>
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Row className="justify-content-center">
                                        <Form.Group controlId="shopName">
                                            <Form.Label>Shop name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Enter your shop name"
                                                onChange={handleChange}
                                                value={values.name}
                                                isInvalid={!!errors.name} />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter shop name
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row className="justify-content-center">
                                        <Button variant="dark" type="submit">Create my shop</Button>
                                    </Form.Row>
                                </Form>
                            </Jumbotron>
                        </Container>
                    )}

            </Formik>
        );
    }
}
