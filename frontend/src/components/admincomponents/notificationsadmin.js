import React, { useRef } from 'react';
import './homepageadmin.css';
import { Form, Col, Button } from 'react-bootstrap';

import localhost from '../../apis/localhost';

function NotificationAdmin() {
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const flatRef = useRef(null);
    const purposeRef = useRef(null);
    const visitorRef = useRef(null);

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: nameRef.current.value,
            purpose: purposeRef.current.value,
            phoneNumber: phoneRef.current.value,
            flatNo: flatRef.current.value,
            visitorNo: visitorRef.current.value,
        };

        const res = await localhost.post(`/notification`, data);
        if (res.status === 201) {
            alert('Success');
            nameRef.current.value = '';
            purposeRef.current.value = 'Purpose';
            phoneRef.current.value = '';
            flatRef.current.value = '';
            visitorRef.current.value = '';
        }
    };

    return (
        <body>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
                rel="stylesheet"></link>
            <div>
                <div className="justify-content-lg-center">
                    VISITOR DETAILS ENTRY
                </div>
            </div>
            <div className="residentform">
                <Form onSubmit={onFormSubmit}>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            ref={nameRef}
                            placeholder="Please Enter Name"
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            ref={phoneRef}
                            placeholder="Please Enter Phone Number"
                            // pattern='[7-9]{1}[0-9]{10}'
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Flat Number</Form.Label>
                            <Form.Control ref={flatRef} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Purpose of Visit</Form.Label>
                            <Form.Control
                                ref={purposeRef}
                                as="select"
                                defaultValue="Purpose">
                                <option>Personal</option>
                                <option>Delivery</option>
                                <option>Services</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Number Of Visitors</Form.Label>
                            <Form.Control ref={visitorRef} type="number" />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </body>
    );
}
export default NotificationAdmin;
