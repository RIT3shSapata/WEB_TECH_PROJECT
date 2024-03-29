import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUser } from '../actions';

import './homepage.css';
function Homepage(props) {
    let history = useHistory();
    /*eslint-disable */
    useEffect(() => {
        if (props.user[0]) {
            if (props.user[0].username === 'admin') {
                history.push('/admin');
            }
        }
    }, [props.user[0]]);
    /* eslint-enable */

    console.log('>>>>Helllo');
    console.log(props.user);
    const user = props.user[0];
    console.log(user);

    return (
        <body>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                crossorigin="anonymous"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
                rel="stylesheet"></link>
            <div>
                <div className="hometitle">WELCOME HOME !</div>
                <div className="forprofile">
                    <div className="forimage">
                        <svg
                            width="20em"
                            height="20em"
                            viewBox="0 0 17 16"
                            class="bi bi-image"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M14.002 2h-12a1 1 0 0 0-1 1v9l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15.002 9.5V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                            />
                        </svg>
                    </div>
                    <div className="details">
                        <div className="alert alert-info">
                            Name of the Resident : {user ? user.username : null}
                        </div>
                        <div className="alert alert-info">
                            Contact Number:{user ? user.phoneNo : null}
                        </div>
                        <div className="alert alert-info">
                            Door Number:{user ? user.flatNo : null}
                        </div>
                        <div className="alert alert-info">
                            Owned/Rented: {user ? user.owned : null}
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, { fetchUser })(Homepage);
