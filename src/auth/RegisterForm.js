import React from 'react';
import Backgroundpic from '../assets/malta.jpg';


const background = {
  background: `url(${Backgroundpic})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: 'calc(100vh - 175px'
};

const RegisterForm = ({handleChange, handleSubmit, user}) => {
  return (
    <div style={background}>
      <form onSubmit={handleSubmit}>
        <div className="col-md-3 login">
          <div className="form-group">
            <h2 className="logintext">Join us to start learning Maltese</h2>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={user.name}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={user.username}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={user.email}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="passwordConfirmation"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={user.passwordConfirmation}
                className="form-control"
              />
            </div>
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
