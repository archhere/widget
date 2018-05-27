import React from 'react'

export default class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount(){
    this.intervalID = setInterval(()=>this.tick(),1000)
  }

  componentWillUnMount(){
    clearInterval(this.intervalId)
  }

  tick(){
    this.setState({time: new Date()});
  }

  render(){
    return <div className = "full-clock">
            <h1> CLOCK ⏰</h1>
            <div className = "clock">
            <p>Time:<span>{this.state.time.toLocaleString().slice(10)} PDT</span></p>
            <p>Date:<span>{this.state.time.toDateString()} {this.state.time.toLocaleString().slice(0,9)}</span></p>
            </div>
           </div>
  }

}
