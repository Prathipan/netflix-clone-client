import {
  ArrowDropDown,
  NotificationsActive,
  Search,
} from "@mui/icons-material";
import "./navbar.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logOut } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {user,dispatch} = useContext(AuthContext);
  const navigate = useNavigate()
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    return () => (window.onscroll = null);
  };

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login")
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            className="netflix-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix-logo"
          />
          <Link to="/" className="link">
            <span>Home Page</span>
          </Link>
          <Link to="/series" className="link">
          <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
          <span>Movies</span>
          </Link>
          
          <span>New and popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <NotificationsActive className="icon" />
          <img
            className="profile-pic"
            src={user.profilePic}
            alt="profile-pic"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span style={{cursor : "pointer"}} onClick={handleLogout}>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
