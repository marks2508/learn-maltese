import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from './lib/Auth';


const Navbar = ({ history}) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navIcon">
          <Link to="/" className="nav-item nav-link"><img className="navIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnv0tkUzc0YWPdaFw7s-TYOW5BFMMsbR6F_vtWLYmm2dJqst3dIQ" /></Link>
        </div>
        <div className="navbar-nav ml-md-auto">
          { Auth.isAuthenticated() && <Link to="/cards" className="nav-item nav-link">Index</Link>}
          { !Auth.isAuthenticated() && <Link to="/login" className="nav-item nav-link">Login</Link>}
          { !Auth.isAuthenticated() && <Link to="/register" className="nav-item nav-link">Register</Link>}
          { Auth.isAuthenticated() && <Link to="#" className="nav-item nav-link" onClick={logout}>Logout</Link>}
          { Auth.isAuthenticated() && <Link to="/profile" className="nav-item nav-link">Profile</Link>}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
