import Loginpage from './components/loginpage';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Bookings from './components/bookings';
import Notifications from './components/notifications';
import Announcements from './components/announcements';
import Footer from './components/footer';
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
    </Switch>
    </Router>
  );
}

export default App;

