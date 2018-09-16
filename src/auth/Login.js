import React from 'react';
import Axios from 'axios';
import LoginForm from './LoginForm';
import Auth from '../lib/Auth';
import Backgroundpic from '../assets/malta.jpg';


const background = {
  background: `url(${Backgroundpic})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: 'calc(100vh - 200px'
};

class Login extends React.Component {
  state = {
    user: {
      email: '',
      password: ''
    },
    errors: {}
  };

  handleChange = ({target: {name, value}}) => {
    const user = Object.assign({}, this.state.user, {[name]: value});
    this.setState({user});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/login', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        this.props.history.push('/profile');
      })
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render() {
    return (
      <main>
        <div style={background}>
          <LoginForm
            user={this.state.user}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            errors={this.state.errors}
          />
        </div>
      </main>
    );
  }
}

export default Login;
