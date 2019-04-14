import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import queryString from 'query-string';
import * as actions from '../state/actions/index';

class Auth extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
    }
    componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        const code = values.code;
        if (!this.props.accessToken && !code) {
            this.props.history.push('/')
        } else {
            this.props.onExchangeCode(code);
        }
           
    }
    render(){
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to='/' />;
        }
        return(
            <div>{authRedirect}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.accessToken !== null,
        accessToken: state.auth.accessToken
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onExchangeCode: ( code ) => dispatch( actions.getExchangeCode( code ) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps)( Auth );