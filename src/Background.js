import React from 'react';

class BackgroundImage extends React.Component {
  componentWillMount() {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    this.setState({x: x,y: y});
  }

  render(){
    return (
      <div><img className='bg' src={'./assets/malta.jpg'} /></div>
    );
  }
}

export default BackgroundImage;
