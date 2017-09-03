import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResultView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='result-area'>
                <h4>{(this.props.path)?this.props.path : 'Path not found'}</h4>
            </div>
        );
    }
};

const mapStateToProps = (state) => state;

const SearchResult = connect(
    mapStateToProps
)(SearchResultView);

SearchResult.propTypes = {
    status: PropTypes.string,
    number: PropTypes.string,
    path: PropTypes.string
};

export default SearchResult;