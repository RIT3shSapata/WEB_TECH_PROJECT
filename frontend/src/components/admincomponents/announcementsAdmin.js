import React from 'react'
import './announcements.css';
import {  Form,Button } from 'react-bootstrap'
function AnnouncementAdmin() {
    return (
        <body>
                 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <div>
                <div className='justify-content-lg-center'>ANNOUNCEMENT DETAILS</div>
                </div>
                <div>
                <Form>
                <Form.Group controlId="formGridAddress1">
                <Form.Label>Title of Announcment</Form.Label>
                <Form.Control placeholder="Announcment Title" />
                </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Description of the Announcment</Form.Label>
    <Form.Control placeholder="Description Announcment" />
  </Form.Group>
      <Button variant="primary" type="submit">
    Send to Residents
    </Button>
    </Form>
            </div>
            </body>
            );
        }
        export default AnnouncementAdmin;