import React, { useEffect } from 'react';
import './bookings.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

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
    /*eslint-disable */
    useEffect(() => {
        console.log(props.service);
        console.log(moment(props.service.bookingDate).format('hh mm'));
    }, []);
    /* eslint-enable */

    const classes = useStyles();
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                crossOrigin="anonymous"></link>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h4">
                        {props.service ? props.service.service : null}{' '}
                    </Typography>{' '}
                    <Typography variant="h5" component="p">
                        Flat Number:{' '}
                        {props.service ? props.service.flatNo : null}{' '}
                    </Typography>{' '}
                    <Typography variant="h5" component="p">
                        Reason:{' '}
                        {props.service ? props.service.description : null}{' '}
                    </Typography>{' '}
                    <Typography variant="h5" component="p">
                        Date:{' '}
                        {props.service
                            ? moment(props.service.bookingDate).format(
                                  'DD-MM-YYYY'
                              )
                            : null}{' '}
                    </Typography>{' '}
                    <Typography variant="h5" component="p">
                        Time:{' '}
                        {props.service
                            ? `${moment(props.service.bookingDate).format(
                                  'hh'
                              )}:${moment(props.service.bookingDate).format(
                                  'mm'
                              )}`
                            : null}{' '}
                    </Typography>{' '}
                </CardContent>{' '}
            </Card>{' '}
        </div>
    );
}

export default OutlinedCard;
