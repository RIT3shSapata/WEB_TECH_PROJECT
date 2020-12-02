import React from 'react'
import './homepageadmin.css';
import {  Form,Col,Button } from 'react-bootstrap'
function NotificationAdmin() {
    return (
        <body>
                 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
            <div>
                <div className='justify-content-lg-center'>VISITOR DETAILS ENTRY</div>
                </div>
                <div class='residentform'>
                <Form>
                <Form.Group controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Please enter name" />
                </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control placeholder="Please Enter Phone Number" pattern='[7-9]{1}[0-9]{10}'/>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Flat Number</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Purpose of Visit</Form.Label>
      <Form.Control as="select" defaultValue="Purpose">
        <option>Personal</option>
        <option>Delivery</option>
        <option>Services</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Number Of Visitors</Form.Label>
      <Form.Control type='number'/>
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