import React, { Component } from 'react';
import Cover from 'react-video-cover';

const style = {
  width: '100vh',
  height: '100vh',
  position: 'relative',
  top: 0,
  left: 0,
  zIndex: -100,
};
class CoverExample extends Component {

  state = {
    resizeNotifier: () => {},
  }

  render() {
    const videoOptions = {
      src: 'https://www.videvo.net/videvo_files/converted/2015_08/preview/Baking_Cookies_Alt.mp421867.webm',
      autoPlay: true,
      loop: true,
    };

    return (
      <div style={style} >
        <Cover
          videoOptions={videoOptions}
          remeasureOnWindowResize
          getResizeNotifier={resizeNotifier => {
            this.setState({
              resizeNotifier,
            });
          }}
        />
      </div>
    );
  }
}

export default CoverExample;