import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import * as smartcar from 'smartcar';

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          accessToken: localStorage.getItem('accessToken'),
          vehicle: {},
        };
    
        this.authorize = this.authorize.bind(this);
    }

    authorize() {
        const client = new smartcar.AuthClient({
            clientId: process.env.REACT_APP_CLIENT_ID,
            clientSecret: process.env.REACT_APP_CLIENT_SECRET,
            redirectUri: process.env.REACT_APP_REDIRECT_URI,
            scope: ['read_vehicle_info', 'read_location', 'read_odometer', 'control_security', 'read_vin'],
            testMode: true,
        })
        const authUrl = client.getAuthUrl();
        window.location.assign(authUrl);
        console.log(authUrl, 'authUrl');
    }

    render(){
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to='/vehicle' />;
        }
        return(
            
            <div className="row justify-content-center align-items-center">
                <div className="login-btn">
                    {authRedirect}
                    <h1>Smartcar Vehicle</h1>
                    <p>
                        This is a Vehicle application that walks through using the Smartcar API to authenticate with and make requests to vehicles.
                    </p>
                    <button className="btn btn-lg btn-success" onClick={this.authorize}> Connect to your car</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.accessToken !== null
    };
};

export default connect( mapStateToProps)( Home );