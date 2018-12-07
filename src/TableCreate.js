import React from "react";
import PropTypes from "prop-types";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class TableCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      columns:[],
      tabledata:[]
    };
  }
  componentWillMount(){
    this.getColumns(this.props.columns);
  }
  componentWillReceiveProps(nextProps) {
    const {visible} = nextProps;
  }
  renderEditable = cellInfo => {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          let row = this.state.data[cellInfo.index];
          row[cellInfo.column.id] = e.target.innerHTML;
          this.listPrimitive.update(cellInfo.index, row);
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };
  overrideValue = (index, override) => {
    let tabledata = [...this.state.tabledata]
    tabledata[index].override = override
    tabledata[index].overridden = true
    this.setState({ tabledata })
}
  getColumns=(columnArray)=>{
    let columns=[];
    let count=0;
    let self=this;
    columnArray.forEach(function(item){
      self.state.columns.push({
        Header: item.name,
        accessor: item.name,
        Cell: props => <input onChange={e => self.overrideValue(props.index, e.target.value)}/>
      })
    })
  
  }
  render() {
    console.log("props columns",this.props.columns);
   // let columns = this.getColumns(this.props.columns);
  //  console.log("columns",columns);
    //let data=[];
  //console.log("data",data);
    return (
        <ReactTable
        data={this.state.tabledata}
        columns={this.state.columns}
        defaultPageSize={20}
        className="-striped -highlight"
      />
    );
  }
}
