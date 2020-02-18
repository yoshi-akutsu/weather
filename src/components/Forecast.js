import React from 'react';

class Forecast extends React.Component {
    getDayOfWeek = (index) => {
        let day;
        if (index > 6) {
            index = index - 7;
        }
        switch (index) {
            case 0:
                day = "Sunday";
              break;
            case 1:
                day = "Monday";
              break;
            case 2:
                day = "Tuesday";
              break;
            case 3:
                day = "Wednesday";
              break;
            case 4:
                day = "Thursday";
              break;
            case 5:
                day = "Friday";
              break;
            case 6:
                day = "Saturday";
                break;
            default:
                day = '';
          }
          return day;
          
    }

    render() {
        const today = new Date();

        if (this.props.cOrF === 'to \u00B0C') {
            return (
                <React.Fragment>
                    {this.props.weatherForecast.weather.tempToday ? (
                        <div className="forecast">
                            <div className="forecastCard">
                                <h4>Tomorrow</h4>
                                <p>{this.props.weatherForecast.weather.conditionsTomorrow}</p>
                                {this.props.toF(this.props.weatherForecast.weather.minTempTomorrow) + '\u00B0F'}
                            </div>

                            <div className="forecastCard">
                                <h4>{this.getDayOfWeek(today.getDay() + 3)}</h4>
                                <p>{this.props.weatherForecast.weather.conditionsAssate}</p>
                                {this.props.toF(this.props.weatherForecast.weather.minTempAssate) + '\u00B0F'}
                            </div>

                            <div className="forecastCard">
                                <h4>{this.getDayOfWeek(today.getDay() + 4)}</h4>
                                <p>{this.props.weatherForecast.weather.conditionsNext}</p>
                                {this.props.toF(this.props.weatherForecast.weather.minTempNext) + '\u00B0F'}
                            </div>

                            <div className="forecastCard">
                                <h4>{this.getDayOfWeek(today.getDay() + 5)}</h4>
                                <p>{this.props.weatherForecast.weather.conditionsNext2}</p>
                                {this.props.toF(this.props.weatherForecast.weather.minTempNext2) + '\u00B0F'}
                            </div>

                            <div className="forecastCard">
                                <h4>{this.getDayOfWeek(today.getDay() + 6)}</h4>
                                <p>{this.props.weatherForecast.weather.conditionsNext3}</p>
                                {this.props.toF(this.props.weatherForecast.weather.minTempNext3) + '\u00B0F'}
                            </div>
                        </div>
                
                    ) : (<div></div>)
                    
                    }   
                </React.Fragment>
            );
        }
        else {
            return (
                <React.Fragment>
                    {this.props.weatherForecast.weather.tempToday ? (
                        <div className="forecast">
                            <div className="forecastCard">
                                <h4>Tomorrow</h4>
                                <p>{this.props.weatherForecast.weather.conditionsTomorrow}</p>
                                {this.props.toC(this.props.weatherForecast.weather.minTempTomorrow) + '\u00B0C'}
                            </div>

                            <div className="forecastCard">
                                <h4>{this.getDayOfWeek(today.getDay() + 3)}</h4>
                                <p>{this.props.weatherForecast.weather.conditionsAssate}</p>
                                {this.props.toC(this.props.weatherForecast.weather.minTempAssate) + '\u00B0C'}
                            </div>

                            <div className="forecastCard">
                                <h4>{this.getDayOfWeek(today.getDay() + 4)}</h4>
                                <p>{this.props.weatherForecast.weather.conditionsNext}</p>
                                {this.props.toC(this.props.weatherForecast.weather.minTempNext) + '\u00B0C'}
                            </div>

                            <div className="forecastCard">
                                <h4>{this.getDayOfWeek(today.getDay() + 5)}</h4>
                                <p>{this.props.weatherForecast.weather.conditionsNext2}</p>
                                {this.props.toC(this.props.weatherForecast.weather.minTempNext2) + '\u00B0C'}
                            </div>

                            <div className="forecastCard">
                                <h4>{this.getDayOfWeek(today.getDay() + 6)}</h4>
                                <p>{this.props.weatherForecast.weather.conditionsNext3}</p>
                                {this.props.toC(this.props.weatherForecast.weather.minTempNext3) + '\u00B0C'}
                            </div>
                        </div>
                
                    ) : (<div></div>)
                    
                    }   
                </React.Fragment>
            )
        }
        
        
    }
}

export default Forecast;