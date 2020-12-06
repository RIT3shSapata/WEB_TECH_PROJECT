import React from 'react'
import './styling.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
      minWidth: 100,
      width:'50%',
      marginLeft: '25%',
      fontFamily:'Raleway'
    },
    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
export default function OutlinedCard() {
  const classes = useStyles();
    return (
    <body>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
    <div>
        <div className='justify-content-lg-center'>BOOKING CONFIRMATIONS</div>
    </div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div ClassName="Title">
          BOOKING DETAILS
        </div>
        <div className="description">
          Flat Number
        </div>
        <div className="description">
        Facility Required
        </div>
        <div className="description">
          Time Range
        </div>
        <div className="description">
          Date
        </div>
      </CardContent>
          </Card>
    </body>
  );
}