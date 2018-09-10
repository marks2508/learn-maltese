import React from 'react';
import Axios from 'axios';
import RegisterForm from './RegisterForm';
import Auth from '../lib/Auth';

class Register extends React.Component {
  state = {
    user: {
      name: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      favourites: {
        questions: [],
        answers: [] 
      }
    }
  };

  handleChange = ({target: {name, value}}) => {
    const user = Object.assign({}, this.state.user, {[name]: value});
    this.setState({user});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/register', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <RegisterForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Register;
