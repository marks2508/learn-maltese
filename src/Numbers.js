import React from 'react';
import Axios from 'axios';
import NumbersCard from './NumbersCard';
import TimeCard from './TimeCard'

class Numbers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      words: [],
      showComponent: false
    },
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true
    });
  }

  componentWillMount() {
    Axios
      .get('/api/cards')
      .then(res => this.setState({ words: res.data }, () => console.log(this.state.words))) // logs 'blue' which is correct
      .catch(err => console.log(err));
  }



  render() {

    // const wordsArray = [];
    // this.state.words.forEach(x => x.words.forEach(y => wordsArray.push(y)));
    // console.log('Word Array:', wordsArray[0]);


    return (
      <div>
        <button>Numbers 1 to 10:</button>
        <button onClick={this._onButtonClick}>Button</button>
        {this.state.showComponent ?
          <NumbersCard /> :
          null
        }
        <button onClick={this._onButtonClick}>Button</button>
        {this.state.showComponent ?
          <TimeCard /> :
          null
        }
      </div>

    );
  }
}


export default Numbers;
