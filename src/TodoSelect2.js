import React , {Component} from 'react';
import './bulma.css';
import {TodoSelect} from './TodoSelect.js';
export class TodoSelect2 extends Component {
state={
  ValueState:''
}
HandleValue=(event)=>{
  this.setState({ValueState:event.target.value});
}
render(){
  var BoxArray=[];
  for (var i = 1; i <= this.state.ValueState; i++) {
    BoxArray.push(
      <div className="column notification is-primary has-text-centered"><TodoSelect/></div>);
  }
  return(
    <div>
      <span className="select" onChange={this.HandleValue} value={this.state.ValueState}>
          <select>
             <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
          </select>
      </span>
      <div className="columns">{BoxArray}</div>
    </div>
  );
}

}
