import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import './style.css'

class Prepare extends Component {
  render() {
    return (
      <div className='prepare'>
        <div className='prepare__part'>
          <div className='prepare__header'>
            Prepare to study
          </div>
          <div className='prepare__bottom'>
            <div className='prepare__content'>
              <TaskItem />
              <div className='prepare__add'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Prepare;