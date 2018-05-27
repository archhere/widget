import React from 'react';

export default class AutoComplete extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputVal: ""}
    this.updateChange = this.updateChange.bind(this)
    this.changeValue = this.changeValue.bind(this)
  }


  updateChange(e){
    this.setState({inputVal: e.target.value})
  }

  changeValue(e){
    this.setState({inputVal: e.target.innerText})
  }

  render(){
    return(
      <div className="autocomplete">
      <h1> AutoComplete </h1>
        <input className="inputclass" type="text" value={this.state.inputVal} onChange={this.updateChange}/>
        <ul>
          {this.props.names.map((el,index)=>
            (el.toLowerCase()).startsWith(this.state.inputVal.toLowerCase()) ? (
              <li key={index} onClick={this.changeValue}>{el}</li>
            ) : ""
          )}
        </ul>

      </div>
    )

  }

}
