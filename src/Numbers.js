import React from 'react';
import Axios from 'axios';

class Numbers extends React.Component {

    state = {
      words: []
    }

    componentDidMount() {
      Axios
        .get('/api/cards')
        .then(res => this.setState({ words: res.data }, () => console.log(this.state.words[0].words[1].word))) // logs 'blue' which is correct
        .catch(err => console.log(err));
    }



    render() {

      let wordsArray = [];
      this.state.words.forEach(x => x.words.forEach(y => wordsArray.push(y)));


      return (
        <div>
          <h1>Numberss</h1>
          <h3>dwdw</h3>
          {wordsArray.map(function (words, i) {
            return(
              <div key={i} className="image-tile col-md-4 col-sm-6 col-xs-12">
                {/* <h3>Category: </h3> */}
                <h4>Word: {words.word}</h4>
                <h4>Translation: {words.translation}</h4>

                {/* <h5>Word: {this.state.words.words.word}</h5>
                  <h5>Translation: {this.state.words.words.translation}</h5> */}
                {/* <h3>Loop: {wordsArray}</h3> */}
              </div>
            );
          })}
        </div>

      );
    }
}


export default Numbers;
