import React from 'react';
import './bookings.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import PowerIcon from '@material-ui/icons/Power';
import BuildIcon from '@material-ui/icons/Build';
import Form from './form';
function Bookings() {
  return (
    <div>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
        integrity='sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2'
        crossOrigin='anonymous'></link>
      <link rel='preconnect' href='https://fonts.gstatic.com'></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap'
        rel='stylesheet'></link>
      <div>
        <div className='justify-content-lg-center'>YOUR BOOKINGS</div>
        <h3 className='cheese'>Your services are a tap away!</h3>
        <h6 className='note'>
          Please Note : The bookings depend on the timings and availability.
        </h6>
      </div>
      <Accordion className='accordion'>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='0' className='titles'>
            <LocalConvenienceStoreIcon></LocalConvenienceStoreIcon> Community
            Hall
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <Form service='Community Hall'></Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='1' className='titles'>
            <SportsTennisIcon></SportsTennisIcon> Badminton Court
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='1'>
            <Card.Body>
              <Form service='Badminton Court'></Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='2' className='titles'>
            <PowerIcon></PowerIcon> Electrician
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='2'>
            <Card.Body>
              <Form service='Electrician'></Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='3' className='titles'>
            <BuildIcon></BuildIcon> Plumber
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='3'>
            <Card.Body>
              <Form service='Plumber'></Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
export default Bookings;
