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
        <div className="navbar-nav">
          { Auth.isAuthenticated() && <Link to="/" className="nav-item nav-link"><img className="navIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnv0tkUzc0YWPdaFw7s-TYOW5BFMMsbR6F_vtWLYmm2dJqst3dIQ" /></Link>}
        </div>
        <div className="navbar-nav ml-md-auto">
          { Auth.isAuthenticated() && <Link to="/words" className="nav-item">Add a word</Link>}
          { !Auth.isAuthenticated() && <Link to="/login" className="nav-item">Login</Link>}
          { !Auth.isAuthenticated() && <Link to="/register" className="nav-item">Register</Link>}
          { Auth.isAuthenticated() && <Link to="#" className="nav-item" onClick={logout}> click here to Logout</Link>}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
