import React from "react";
import PropTypes from "prop-types";
import ReactTable from "react-table";

export class ColumnAdd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        columnList:[],
        
    }
  }

  add(){
      columnList.push({
        column_name:,
        column_type:
      });
  }
  renderList(){

  }
  render() {
    let divItems = this.columnList.map( ( item, index ) => {
        return <div key={index}>{item.value}</div>
     });
    return (
        let columnItems=this.state.columnList.map((item,index))=>{
            return(

            )
        }
        <form onSubmit={this.handleSubmit}>
            <h3>Add new record</h3>
            <label>
              Column Name:
              <input
                type='text'
                name='columnName'
                value={this.state.columnName}
                onChange={this.handleChange}
              />
            </label>{' '}
            <label>
              Type:
              <input
                type='text'
                name='type'
                value={this.state.type}
                onChange={this.handleChange}
              />
            </label>
            <button
              onClick={() => {
                this.add()
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                console.log("This is where we call create table");
              }}
            >
              Submit
            </button>
          </form>
    );
  }
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;

class IncorporationForm extends React.Component {
    constructor() {
      super();
      this.state = {
        name: '',
        shareholders: [{ name: '' }],
      };
    }
    
    handleNameChange = (evt) => {
      this.setState({ name: evt.target.value });
    }
    
    handleShareholderNameChange = (idx) => (evt) => {
      const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
        if (idx !== sidx) return shareholder;
        return { ...shareholder, name: evt.target.value };
      });
      
      this.setState({ shareholders: newShareholders });
    }
    
    handleSubmit = (evt) => {
      const { name, shareholders } = this.state;
      alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    }
    
    handleAddShareholder = () => {
      this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
    }
    
    handleRemoveShareholder = (idx) => () => {
      this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }
    
    render() {    
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Company name, e.g. Magic Everywhere LLC"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        
          <h4>Shareholders</h4>
        
          {this.state.shareholders.map((shareholder, idx) => (
            <div className="shareholder">
              <input
                type="text"
                placeholder={`Shareholder #${idx + 1} name`}
                value={shareholder.name}
                onChange={this.handleShareholderNameChange(idx)}
              />
              <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
            </div>
          ))}
          <button type="button" onClick={this.handleAddShareholder} className="small">Add Shareholder</button>
          <button>Incorporate</button>
        </form>
      )
    }
  }
  
  ReactDOM.render(<IncorporationForm />, document.body);