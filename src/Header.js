import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import PinterestIcon from '@material-ui/icons/Pinterest';
import PageviewIcon from '@material-ui/icons/Pageview';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';




function Header() {
    return (
        <div className="app_header">
            <div className="header_wrapper">
          
                <div className="header_logo">
                    <p> <PinterestIcon /> </p>

                </div>
                <div className="header_buttonHomepage">
                 <span>   <p>Home</p></ span >
                </div>
                <br />
                <div className="header_buttonFollowing">
                  <span> <p>Following</p> </ span>
                </div> 
                

                

                {/* Searching Section*/}
                <div className="header_search">
                    <div className="header_searchContainer">
                        
                        <TextField
                            color="secondary"
                            id="input-with-icon-textfield"
                            
                            
                            InputProps={{
                    
                                startAdornment: (
                                    <InputAdornment position="start"> 
                                        <PageviewIcon style={{ fontSize: 40 }} />{ /* SEARCH ICON PageviewIcon */ }
                                    </InputAdornment>
                                ),
                            } }
                        />

                    </div>
                </div>
                <div className="header_menuItems">
            
                    <NotificationsIcon />
                    <ChatIcon />
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        
        </div>
    )
}

export default Header

