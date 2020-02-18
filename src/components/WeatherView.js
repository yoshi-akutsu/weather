import React from 'react';
import Forecast from './Forecast';

class WeatherView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          cOrF: 'to \u00B0C'
        };
    };
    toF = (temp) => {
        if (temp) {
            return Math.round((temp * (9/5) - 459.67) * 100 / 100);
        }
        return;
    }
    toC = (temp) => {
        if (temp) {
            return Math.round((temp - 273.15) * 100 / 100);
        }
        return;
    }
    toggleUnit = () => {
        (this.state.cOrF === 'to \u00B0C') ? this.setState({cOrF: 'to \u00B0F'}): this.setState({cOrF: 'to \u00B0C'}); 

    }
    render() {
        return (
            <div className='weatherContainer' style={weatherStyle}>
                <div className='weatherCard' style={cardStyle}>
                    <h1>{this.props.weather.placeName} {this.props.weather.countryCode}</h1>
                    <button
                        onClick={this.toggleUnit.bind(this)}
                        >{this.state.cOrF}
                    </button>
                    <h5>{this.props.weather.conditionsToday}</h5>
                    {this.state.cOrF === 'to \u00B0C' ? (
                        <h5>{this.toF(this.props.weather.tempToday)} {this.props.weather.tempToday ? '\u00B0F' : ''}</h5>
                        ) : (
                        <h5>{this.toC(this.props.weather.tempToday)} {this.props.weather.tempToday ? '\u00B0C' : ''}</h5>
                    )}
                    {this.props.weather.tempToday ? 
                        (this.state.cOrF === 'to \u00B0C' ? 
                            <p>{this.toF(this.props.weather.minTempToday) + '\u00B0F'} - {this.toF(this.props.weather.maxTempToday) + '\u00B0F'}</p> :
                            <p>{this.toC(this.props.weather.minTempToday) + '\u00B0C'} - {this.toC(this.props.weather.maxTempToday) + '\u00B0C'}</p>) :
                        <p></p>
                    }
                </div>
                <Forecast cOrF={this.state.cOrF} weatherForecast={this.props} toF={this.toF} toC={this.toC}/>
            </div>
        );
    }
}

const weatherStyle = {
    padding: "1rem",
    margin: "2rem",
    textAlign: "center",
    border: "1px solid black"
}

const cardStyle = {
    background: "light gray",
    margin: "2rem",
    border: "1px solid black"
}

export default WeatherView;