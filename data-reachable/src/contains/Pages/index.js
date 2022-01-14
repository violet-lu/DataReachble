import React, { Component } from 'react';
import Prepare from './component/Prepare';
import Learning from './component/Learning';
import Complete from './component/Complete';
class Pages extends Component {
  render() {
    return (
      <div>
        <Prepare/>
        <Learning />
        <Complete />
      </div>
    );
  }
}

export default Pages;