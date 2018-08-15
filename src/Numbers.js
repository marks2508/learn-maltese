import React from 'react';
import Axios from 'axios';

class Numbers extends React.Component {

    state = {
      words: []
    };

    componentWillMount() {
      Axios
        .get('/api/cards')
        .then(res => this.setState({ words: res.data }, () => console.log(this.state.words[0].words[1].word))) // logs 'blue' which is correct
        .catch(err => console.log(err));
    }


    render() {


      return (
        <div>
          <h1>Numberss</h1>
          <h3>dwdw</h3>
          {this.state.words.map(word => {
            return(
              <div key={word.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <h3>Category: {word.category}</h3>
                {/* <h5>Word: {this.state.words.words.word}</h5>
                <h5>Translation: {this.state.words.words.translation}</h5> */}
              </div>
            );
          })}



        </div>

      );
    }
}


export default Numbers;
