import React from 'react';

class WeatherView extends React.Component {
    render() {
        return (
            <div className='weatherContainer' style={weatherStyle}>
                <div className='weatherCard' style={cardStyle}>
                    <h1>City</h1>
                    <h5>02/20/2020 Monday</h5>
                    <p>Temperature: </p>
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