import React from 'react';

import SearchBar from './components/SearchBar'
import WeatherView from './components/WeatherView'

import './App.css';

class App extends React.Component {
  state = {
    placeName: '',
    minTemp: '',
    maxTemp: '',
    conditions: ''
  }

  getWeather(location) {
    const apiKey = '&APPID=1bd7059eca12c52c4302f46ee4dc7da8';
    const url = 'http://api.openweathermap.org/data/2.5/weather?' + 'q=London,uk' + apiKey;

    fetch(url, {mode: 'cors'})
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        //this.setState({placeName: response.name})
      })
  }


  render() {
    return (
      <div className="App">
        <SearchBar getweather={this.getWeather} />
        <WeatherView weather={this.state}/>
      </div>
    );
  }
}

export default App;
