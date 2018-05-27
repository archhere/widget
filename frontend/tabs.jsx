import React from 'react'

export default class Tabs extends React.Component{
  constructor(props){
    super(props)
    this.state = {index: 0};
  }

  myIndex(idx){
    this.setState({index: idx})
  }

  render(){
    return (
      <div className="my-tabs">
        {this.props.panes.map((el,index)=>{
          if (index === this.state.index) {
            return (
              <div key={index} className="selected">
                <h3 onClick={()=>this.myIndex(index)}>{el.title}</h3>
                <article>{el.content}</article>
              </div>
            )
          }
          else{
            return(
              <div key={index} className="unselected">
                <h3 onClick={()=>this.myIndex(index)}>{el.title}</h3>

              </div>
            )
          }
        })}
      </div>
    )

  }

}
