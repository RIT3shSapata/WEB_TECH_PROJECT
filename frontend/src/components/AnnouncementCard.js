import React from 'react';
import moment from 'moment';
import { Card } from 'react-bootstrap';

function AnnouncementCard(props) {
    return (
        <div>
            <div className="mt-1">
                <Card style={{ width: '80%' }}>
                    <div className="description">
                        <Card.Header>
                            {' '}
                            {props.announcement
                                ? props.announcement.title
                                : null}{' '}
                        </Card.Header>
                    </div>
                    <Card.Body>
                        <div className="description">
                            <Card.Text>
                                {props.announcement
                                    ? props.announcement.description
                                    : null}{' '}
                            </Card.Text>
                        </div>
                        <div className="date">
                            <Card.Text>
                                {' '}
                                Date:
                                {props.announcement
                                    ? moment(props.announcement.time).format(
                                          'DD-MM-YYYY'
                                      )
                                    : null}{' '}
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default AnnouncementCard;
