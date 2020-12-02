import React from 'react'
import './bookings.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 100,
      width:'50%',
      marginLeft: '25%',
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
    <div>
        <div className='justify-content-lg-center'>NOTIFICATIONS</div>
    </div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4" >
          Visitor Alert!
        </Typography>
        <Typography variant="h5" component="p">
          Name
        </Typography>
        <Typography variant="h5" component="p">
          Purpose
        </Typography>
        <Typography variant="h5" component="p">
          Phone Number
        </Typography>
      </CardContent>
          </Card>
    </body>
  );
}