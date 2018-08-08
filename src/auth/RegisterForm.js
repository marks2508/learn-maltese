import React from 'react';

const RegisterForm = ({handleChange, handleSubmit, user}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="col-md-6 login">
        <h2 className="logintext">Welcome to Walkies!<br /><br />Please register below: </h2>
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
    </form>
  );
};

export default RegisterForm;
