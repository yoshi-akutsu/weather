import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div style={searchStyles}>
                <input></input>
                <button 
                onClick={this.props.getweather} 
                >Search</button>
            </div>
        );
    }
}

const searchStyles = {
    paddingTop: "2rem",
    textAlign: "center"
}

export default SearchBar;