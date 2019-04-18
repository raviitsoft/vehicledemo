import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect,  } from 'react-redux';

import { Header } from '../common';
import { 
    Home,
    Auth,
    Vehicle,
    QuoteForm,
    Logout
} from '../pages';

import * as actions from '../state/actions/index';

class AppRouter extends Component {

    componentDidMount () {
        this.props.onTryAutoSignup();
    }

    render () {
        let routes = (
            <Switch>                
                <Route path='/auth' component={Auth} />
                <Route path='/vehicle' component={Vehicle} />
                <Route path='/insurance' component={QuoteForm} />
                <Route path='/Logout' component={Logout} />
                <Route path='/' component={Home} exact={true} />
            </Switch>
        );
        return (
            <div className="">
                <BrowserRouter>
                    <Fragment>
                        <Header isAuth={this.props.isAuthenticated} />  
                        {routes}
                    </Fragment>
                </BrowserRouter>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.accessToken !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch( actions.authCheckState() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps)( AppRouter );
