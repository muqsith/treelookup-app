import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { INVALID, INPROGRESS, CLEAR, FOUND, NOTFOUND } from '../actions/types'

class SearchResultView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='result-area'>
                {this.props.status === INPROGRESS &&
                    <div className='spinner'>
                        <img src='images/SpinnerBig.gif' />
                    </div>
                }
                {this.props.status === CLEAR &&
                    <div className='placeholder'>Result</div>
                }
                {this.props.status === FOUND &&
                    <div className='result found'>Path: {this.props.path}</div>
                }
                {this.props.status === INVALID &&
                    <div className='result notfound'>Please provide a valid number</div>
                }
                {this.props.status === NOTFOUND &&
                    <div className='result notfound'>Number not found</div>
                }
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