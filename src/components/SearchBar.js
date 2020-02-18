import React from 'react';
import { findByTestId } from '@testing-library/react';

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          searchTerm: '',
        };
    };
    
    onChange = (e) => {
        this.setState({ searchTerm: e.target.value });  
    }

    sendSearch = () => {
        this.props.getweather(this.state.searchTerm);
        this.setState({ searchTerm: '' });
    }
    render() {
        return (
            <div style={searchStyles}>
                <input
                    type="text"
                    name="search"
                    placeholder="Enter a city..."
                    value={this.state.searchTerm}
                    onChange={this.onChange}
                ></input>
                <button 
                onClick={this.sendSearch} 
                >Search</button>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

const searchStyles = {
    paddingTop: "2rem",
    textAlign: "center"
}

export default SearchBar;