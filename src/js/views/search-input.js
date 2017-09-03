import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchNumberAsync, clear } from '../actions/search-action';

class SearchInputView extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleKeyUp(event) {
        if (event.keyCode === 13 && this.state.value) {
            this.props.searchNumber(this.state.value);
        } else if (event.keyCode === 8 && !this.state.value) {
            this.props.clear();
        }
    }

    handleClick(event) {
        if (this.state.value) {
            this.props.searchNumber(this.state.value);
        }
    }

    render() {
        return (
            <div className='input-area'>
                <label>
                    Enter number 
                    <input type="text" 
                        onKeyUp={this.handleKeyUp}
                        onChange={this.handleChange}
                        value={this.state.value}
                        />
                </label>
                <button type="button"
                    onClick={this.handleClick}
                    >Search</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchNumber: (number) => {
            dispatch(searchNumberAsync(number));
        },
        clear: () => {
            dispatch(clear());
        }
    }
};

const SearchInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInputView);

SearchInput.propTypes = {
    status: PropTypes.string,
    number: PropTypes.string,
    path: PropTypes.string,
    searchNumber: PropTypes.func
}

export default SearchInput;