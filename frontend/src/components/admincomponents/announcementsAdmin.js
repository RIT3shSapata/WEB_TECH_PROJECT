import React from 'react'
import './announcements.css';
import {  Form,Button } from 'react-bootstrap'
function AnnouncementAdmin() {
    return (
        <body>
                 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
        href='https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap'
        rel='stylesheet'></link>
                <div>
                <div className='justify-content-lg-center'>ANNOUNCEMENT DETAILS</div>
                </div>
                <div className='formcomponent'>
                <Form>
                <Form.Group controlId="formGridAddress1">
                <Form.Label>Title of Announcment</Form.Label>
                <Form.Control placeholder="Announcment Title" required='required'/>
                </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Description of the Announcment</Form.Label>
    <Form.Control placeholder="Description Announcment" required='required'/>
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