import React from 'react';

class WeatherView extends React.Component {
    render() {
        return (
            <div className='weatherContainer' style={weatherStyle}>
                <div className='weatherCard' style={cardStyle}>
                    <h1>{this.props.weather.placeName}</h1>
                    <p>{this.props.weather.minTemp} K</p>
                    <p>{this.props.weather.maxTemp} K</p>
                </div>
            </div>
        );
    }
}

const weatherStyle = {
    padding: "1rem",
    marginTop: "2rem",
    textAlign: "center",
    border: "1px solid black"
}

const cardStyle = {
    background: "light gray",
    margin: "2rem",
    border: "1px solid red"
}

export default WeatherView;