import React from 'react'
import './navbaradmin.css'
import { withRouter,Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HomeIcon from '@material-ui/icons/Home';
function NavbarAdmin(){
  let history = useHistory();
  const loginPage=()=> {
    let path = './login';
    history.push(path);
  }
  const homePage=()=> {
    let path = '/adminhomepage';
    history.push(path);
  }
    return(
        <body>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet"></link>
  <div class='navbar'>
    <div className="flex1"><div class='home' onClick={homePage}><HomeIcon className={"homebutton"}></HomeIcon>  APNA GHAR</div></div>
    <div className="flex2">
    <div class='notifications'><Link to='./notificationsadmin'><AccessAlarmsIcon className={"notificationsbutton"} ></AccessAlarmsIcon></Link></div>
    <div class='announcement'><Link to='./announcementadmin'><AnnouncementIcon className={"notificationsbutton"} ></AnnouncementIcon></Link></div>
    <div class='signout' onClick={loginPage}>SIGN OUT</div>
    </div>
  </div>
  </body>
    );
}
export default withRouter(NavbarAdmin);