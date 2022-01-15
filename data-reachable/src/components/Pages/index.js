import React, { Component } from 'react';
import Prepare from './component/Prepare';
import Learning from './component/Learning';
import Complete from './component/Complete';
import TaskItem from './component/TaskItem';

class Pages extends Component {
  render() {
    return (
      <div>
        <Prepare ondrop="drop(event)" ondragover="allowDrop(event)">
          
        
          
        </Prepare>
        <Learning ondrop="drop(event)" ondragover="allowDrop(event)">

        </Learning>
        <Complete ondrop="drop(event)" ondragover="allowDrop(event)">

        </Complete>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchTodos();

  }

  allowDrop = (ev) => {
    ev.preventDefault();
  }

  drag = (ev) => {
    ev.dataTransfer.setData("Text",ev.target.id);
  }

  drop = (ev) => {
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
  }

}

export default Pages;