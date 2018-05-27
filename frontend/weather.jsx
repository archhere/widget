import React from 'react';

const APIKEY = "970e69ddc042bb547239631d5b86c0a5";

export default class Weather extends React.Component{
  constructor(props){
    super(props)
    this.state = {city:"who knows",temperature:"0",conditions:"nothing"}
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position)=>{
      this.getLocation(position.coords.latitude, position.coords.longitude);
    });
  }


  getLocation(lat,lon){
    let xhr = new XMLHttpRequest();
    let method = 'GET';
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APIKEY}`
    xhr.onreadystatechange=()=>{
      if(xhr.readyState=== XMLHttpRequest.DONE && xhr.status===200){
        this.setState({city: JSON.parse(xhr.responseText).name})
        this.setState({temperature: JSON.parse(xhr.responseText).main.temp})
        this.setState({conditions: JSON.parse(xhr.responseText).weather[0].description})
      }
      else{
        this.setState({city:"Unable to locate"})
      }
    }
    xhr.open(method,url,true);
    xhr.send();
  }

  render(){
    return(
      <div className="weather">
        <h1><span> You live in </span><span>{this.state.city} 🏡</span></h1>
        <h1><span> It is currently </span><span>{this.state.temperature } F</span></h1>
        <h1><span> If you step out, you might see </span><span>{this.state.conditions}</span></h1>
      </div>
    )

  }
}
