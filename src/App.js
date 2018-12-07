import React, { Component } from 'react';
import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import TableCreate from './TableCreate';

class App extends Component {
  constructor () {
    super()
    this.state = {
      columns: [{ name: '' ,type:'',multiselectOptions:''}],
      options:[
        { value: 'date', label: 'Date' },
        { value: 'number', label: 'Number' },
        { value: 'multi_select', label: 'MultiSelect' }
      ],
      submitClicked:false
    }
  }
  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }
  
  handleColumnNameChange = (idx) => (event) => {
    const newColumns = this.state.columns.map((column, sidx) => {
      console.log("column",column);
      console.log("sidex",sidx);
      if (idx !== sidx){
        return column;
      } else{
        let { name,type,multiselectOptions } = column;
        if (event.target.name === "name"){
          name=event.target.value;
        }
        
        return { ...column, name: name, type:type, multiselectOptions:multiselectOptions };
      }
    });
    
    this.setState({ columns: newColumns });
  }
  handleColumnTypeChange = (id,value) => {
    const newColumns = this.state.columns.map((column, sidx) => {
      console.log("column",column);
      console.log("sidex",sidx);
      if (id !== sidx){
        return column;
      } else{
        let { name,type,multiselectOptions } = column;
        
          type=value.value;
        
          return { ...column, name: name, type:type, multiselectOptions:multiselectOptions };
      }
    });
    
    this.setState({ columns: newColumns });
  }
  handleMultiSelectOptions = (idx) => (event) => {
    const newColumns = this.state.columns.map((column, sidx) => {
      console.log("column",column);
      console.log("sidex",sidx);
      if (idx !== sidx){
        return column;
      } else{
        let { name,type,multiselectOptions } = column;
        if (event.target.name === "multi_select"){
          multiselectOptions=event.target.value;
        }
        
        return { ...column, name: name, type:type, multiselectOptions:multiselectOptions };
      }
    });
    
    this.setState({ columns: newColumns });
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ submitClicked:true });
    

  }
  
  handleAddColumn = () => {
    this.setState({ columns: this.state.columns.concat([{ name: '',type:'',multiselectOptions:'' }]) });
  }
  
  handleRemoveColumn = (idx) => () => {
    this.setState({ columns: this.state.columns.filter((s, sidx) => idx !== sidx) });
  }

  render () {
    return (
      <div className='App'>
        <p className='App-intro'>
          <form onSubmit={this.handleSubmit}>
          <h4>Columns</h4>
        
        {this.state.columns.map((column, id) => (
          <div className="Columns">
            <input
              type="text"
              name="name"
              placeholder={`ColumnName #${id + 1} name`}
              value={column.name}
              onChange={this.handleColumnNameChange(id)}
            />
            <Dropdown options={this.state.options} onChange={(value)=>{this.handleColumnTypeChange(id,value)}} value={column.type} placeholder="Select an option" />
            {
              column.type==="multi_select"?
            <input
              type="text"
              name="multi_select"
              placeholder={`Enter the choices here, separated by commas`}
              value={column.multiselectOptions}
              onChange={this.handleMultiSelectOptions(id)}
            /> 
            :null
          }
            <button type="button" onClick={this.handleRemoveColumn(id)} className="small">-</button>
          </div>
        ))}
            <button type="button" onClick={this.handleAddColumn} className="small">Add Column</button>
            <button
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
        </p>
        <div>
          {
          this.state.submitClicked?
            <TableCreate
              columns={this.state.columns}
            />
            :null            
          }
          </div>
      </div>
    )
  }
}
export default App
