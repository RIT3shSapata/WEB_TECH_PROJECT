import React, { useEffect } from 'react';
import './bookings.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    width: '50%',
    marginLeft: '25%',
    marginBottom: '1%',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

function OutlinedCard(props) {
  useEffect(() => {
    console.log('PROPS', props.notification);
  }, []);

  const classes = useStyles();
  return (
    <div>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
        integrity='sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2'
        crossorigin='anonymous'></link>

      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography variant='h4'>Visitor Alert!</Typography>
          <Typography variant='h5' component='p'>
            Name: {props.notification.name ? props.notification.name : null}
          </Typography>
          <Typography variant='h5' component='p'>
            Purpose:{' '}
            {props.notification.purpose ? props.notification.purpose : null}
          </Typography>
          <Typography variant='h5' component='p'>
            Phone Number:{' '}
            {props.notification.phoneNumber
              ? props.notification.phoneNumber
              : null}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default OutlinedCard;
