import { connect } from 'react-redux';

import Loginpage from './components/loginpage';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Bookings from './components/bookings';
import Notifications from './components/notifications';
import Announcements from './components/announcements';
import Footer from './components/footer';
import HomePageAdmin from './components/admincomponents/homepageadmin';
import NavbarAdmin from './components/admincomponents/navbaradmin';
import NotificationAdmin from './components/admincomponents/notificationsadmin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookingAdmin from './components/admincomponents/bookingAdmin';
import AnnouncementAdmin from './components/admincomponents/announcementsAdmin';

function App({ user }) {
    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <NavbarAdmin> </NavbarAdmin>{' '}
                    <HomePageAdmin> </HomePageAdmin> <Footer> </Footer>{' '}
                </Route>{' '}
                <Route path="/notificationsadmin">
                    <NavbarAdmin> </NavbarAdmin>{' '}
                    <NotificationAdmin> </NotificationAdmin>{' '}
                </Route>{' '}
                <Route path="/bookingsadmin">
                    <NavbarAdmin> </NavbarAdmin> <BookingAdmin />
                </Route>{' '}
                <Route path="/announcementadmin">
                    <NavbarAdmin> </NavbarAdmin>{' '}
                    <AnnouncementAdmin> </AnnouncementAdmin>{' '}
                </Route>{' '}
                <Route exact path="/dashboard">
                    <Navbar> </Navbar> <Homepage> </Homepage> <Footer> </Footer>
                </Route>
                <Route exact path="/">
                    <Loginpage> </Loginpage>
                </Route>
                <Route path="/notifications">
                    <Navbar> </Navbar> <Notifications> </Notifications>
                </Route>
                <Route path="/announcement">
                    <Navbar> </Navbar> <Announcements> </Announcements>
                </Route>
                <Route path="/bookings">
                    <Navbar> </Navbar> <Bookings> </Bookings>
                </Route>
            </Switch>{' '}
        </Router>
    );
}

// const mapStateToProps = (state) => {
//     return { user: state.user };
// };

export default connect()(App);
