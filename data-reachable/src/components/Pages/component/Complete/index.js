import React, { Component } from 'react';
import './style.css'

class Complete extends Component {
  render() {
    return (
      <div className='Complete'>
        <div className='Complete__part'>
          <div className='Complete__header'>
            Complete
          </div>
          <div className='Complete__bottom'>
            <div className='Complete__add'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Complete;