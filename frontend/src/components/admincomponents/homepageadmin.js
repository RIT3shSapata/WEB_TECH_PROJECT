import { React, useRef } from 'react';
import './homepageadmin.css';
import { Form, Col, Button } from 'react-bootstrap';
import Axios from 'axios';

function HomePageAdmin() {
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const phoneRef = useRef(null);
    const flatRef = useRef(null);
    const ownedRef = useRef(null);

    const createUser = async (e) => {
        e.preventDefault();
        const data = {
            username: nameRef.current.value,
            phoneNo: phoneRef.current.value,
            password: passwordRef.current.value,
            flatNo: flatRef.current.value,
            owned: ownedRef.current.value,
        };
        //const response = await Axios.get('http://localhost:4000/user/signup', data);
        await Axios.post('http://localhost:4000/user/signup', data)
            .then((res) => {
                console.log(res.data);
                alert('Success');
            })
            .catch((err) => console.log(err));
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
            <div className="hometitle">WELCOME HOME !</div>
            <div>
                <div className="justify-content-lg-center">
                    ADD A NEW RESIDENT
                </div>
            </div>
            <div className="residentform">
                <Form onSubmit={createUser}>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            ref={nameRef}
                            placeholder="Please enter name"
                            required="required"
                            width="200px"
                        />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            ref={passwordRef}
                            placeholder="Please enter password"
                            required="required"
                            width="200px"
                            type="password"
                            maxlength="6"
                        />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                            ref={phoneRef}
                            placeholder="Please Enter Phone Number"
                            // pattern='[7-9]{1}[0-9]{10}'
                            type="phone"
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Flat Number</Form.Label>
                            <Form.Control ref={flatRef} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Owned/Rented</Form.Label>
                            <Form.Control
                                ref={ownedRef}
                                as="select"
                                defaultValue="Owned">
                                <option>Owned</option>
                                <option>Rented</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Create a resident
                    </Button>
                </Form>
            </div>
        </body>
    );
}
export default HomePageAdmin;
