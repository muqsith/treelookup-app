import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchInput from './search-input.js';
import SearchResult from './search-result.js';

import { connect } from 'react-redux';

class AppView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        /**
         * Create the treesearch object and keep it in global scope.
         */
        var treelookup = new TreeLookup();
        window.treesearch = new TreeSearch(treelookup);        
    }

    render() {
        return (
            <div className='container'>
                <SearchInput />
                <SearchResult />
            </div>
        );
    }
    
}

const mapStateToProps = (state) => state;
  
const App = connect(
    mapStateToProps
)(AppView);
  
App.propTypes = {
    status: PropTypes.string,
    number: PropTypes.string,
    path: PropTypes.string
}

export default App;