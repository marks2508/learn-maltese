import React from 'react';

const LoginForm = ({handleChange, handleSubmit, user}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 login">
          <h2 className="logintext">Welcome back!<br /><br />Please login to access our site</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="email address"
                onChange={handleChange}
                value={user.email}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={user.password}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
