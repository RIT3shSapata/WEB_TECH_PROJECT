import React, { useEffect } from 'react';
import './styling.css';
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
        fontFamily: 'Raleway',
    },
    pos: {
        marginBottom: 12,
    },
});

function OutlinedCard(props) {
    /*eslint-disable */
    useEffect(() => {
        console.log('PROPS', props.notification);
    }, []);
    /* eslint-enable */

    const classes = useStyles();
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                crossorigin="anonymous"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
                rel="stylesheet"></link>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <div className="title">
                        <Typography>VISITOR ALERT!</Typography>
                    </div>
                    <div className="description">
                        <Typography>
                            Name:{' '}
                            {props.notification.name
                                ? props.notification.name
                                : null}
                        </Typography>
                    </div>
                    <div className="description">
                        <Typography>
                            Purpose:{' '}
                            {props.notification.purpose
                                ? props.notification.purpose
                                : null}
                        </Typography>
                    </div>
                    <div className="description">
                        <Typography>
                            Phone Number:{' '}
                            {props.notification.phoneNumber
                                ? props.notification.phoneNumber
                                : null}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default OutlinedCard;
