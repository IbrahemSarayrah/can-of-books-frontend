import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/Profile">Profile</Link>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
