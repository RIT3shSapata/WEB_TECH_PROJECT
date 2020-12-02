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
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Switch>
      <Route path="/login">
        <Loginpage></Loginpage>
      </Route>
      <Route exact path='/'>
        <Navbar></Navbar>
        <Homepage></Homepage>
        <Footer></Footer>
      </Route>
      <Route path='/notifications'>
        <Navbar></Navbar>
        <Notifications></Notifications>
      </Route>
      <Route path='/announcement'>
        <Navbar></Navbar>
        <Announcements></Announcements>
      </Route>
      <Route path='/bookings'>
        <Navbar></Navbar>
        <Bookings></Bookings>
      </Route>
      <Route path='/adminhomepage'>
      <NavbarAdmin></NavbarAdmin>
        <HomePageAdmin></HomePageAdmin>
      </Route>
      <Route path='/notificationsadmin'>
        <NavbarAdmin></NavbarAdmin>
        <NotificationAdmin></NotificationAdmin>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;

