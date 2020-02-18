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
      maxTemp: '',
      countryCode: '',
      temp: '',
      conditions: '',
      message: ''
    };
  };

  getWeather(location) {
    console.log(location);
    const apiKey = '&APPID=1bd7059eca12c52c4302f46ee4dc7da8';
    const base = 'http://api.openweathermap.org/data/2.5/weather?';
    const url = base + 'q=' + location + apiKey;

    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response)
      if (response.message) {
        throw Error(response.message);
      }
      this.setState({message: ''})
      this.setState({placeName: response.name + ','});
      this.setState({minTemp: response.main.temp_min});
      this.setState({maxTemp: response.main.temp_max});
      this.setState({countryCode: response.sys.country});
      this.setState({temp: response.main.temp});
      this.setState({conditions: response.weather[0].main});
    })
    .catch(error => {
      this.setState({message: error.message});
    })
  }


  render() {
    return (
      <div className="App">
        <SearchBar getweather={this.getWeather.bind(this)} message={this.state.message}/>
        <WeatherView weather={this.state}/>
      </div>
    );
  }
}

export default App;
