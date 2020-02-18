import React from 'react';

import SearchBar from './components/SearchBar'
import WeatherView from './components/WeatherView'

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      placeName: '',
      countryCode: '',
      message: '',

      minTempToday: '',
      maxTempToday: '',
      tempToday: '',
      conditionsToday: '',
     
      minTempTomorrow: '',
      maxTempTomorrow: '',
      conditionsTomorrow: '',
     
      minTempAssate: '',
      maxTempAssate: '',
      conditionsAssate: '',
    
      minTempNext: '',
      maxTempNext: '',
      conditionsNext: '',
   
      minTempNext2: '',
      maxTempNext2: '',
      conditionsNext2: '',
      
      minTempNext3: '',
      maxTempNext3: '',
      conditionsNext3: '',
      
    };
  };

  getWeather(location) {
    console.log(location);
    const apiKey = '&APPID=1bd7059eca12c52c4302f46ee4dc7da8';
    const base = 'http://api.openweathermap.org/data/2.5/forecast?';
    const url = base + 'q=' + location + apiKey;

    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response)
      if (response.message.length > 2) {
        throw Error(response.message);
      }
      this.setState({message: ''})
      this.setState({placeName: response.city.name + ','});
      this.setState({countryCode: response.city.country});
      this.setState({minTempToday: response.list[0].main.temp_min});
      this.setState({maxTempToday: response.list[0].main.temp_max});
      this.setState({tempToday: response.list[0].main.temp});
      this.setState({conditionsToday: response.list[0].weather[0].main});

      this.setState({minTempTomorrow: response.list[7].main.temp_min});
      this.setState({conditionsTomorrow: response.list[7].weather[0].main});

      this.setState({minTempAssate: response.list[15].main.temp_min});
      this.setState({conditionsAssate: response.list[15].weather[0].main});

      this.setState({minTempNext: response.list[23].main.temp_min});
      this.setState({conditionsNext: response.list[23].weather[0].main});

      this.setState({minTempNext2: response.list[31].main.temp_min});
      this.setState({conditionsNext2: response.list[31].weather[0].main});

      this.setState({minTempNext3: response.list[39].main.temp_min});
      this.setState({conditionsNext3: response.list[39].weather[0].main});

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
