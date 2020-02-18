import React from 'react';

import SearchBar from './components/SearchBar'
import WeatherView from './components/WeatherView'

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      placeName: '',
      minTemp: '',
      maxTemp: ''
    };
  };

  

  getWeather(location) {
    console.log(location)
    let location = 'q=London,uk';
    const apiKey = '&APPID=1bd7059eca12c52c4302f46ee4dc7da8';
    const base = 'http://api.openweathermap.org/data/2.5/weather?';
    const url = base + location + apiKey;s


    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response)
        this.setState({placeName: response.name});
        this.setState({minTemp: response.main.temp_min});
        this.setState({maxTemp: response.main.temp_max});
      })
  }


  render() {
    return (
      <div className="App">
        <SearchBar getweather={this.getWeather.bind(this)} />
        <WeatherView weather={this.state}/>
      </div>
    );
  }
}

export default App;
