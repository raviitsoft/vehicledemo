import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../state/actions/index';

import VehicleInfo from '../vehiclesDetails/vehicleInfo';


class Vehicle extends Component {
    constructor(props) {
        super(props);    
        this.state = { };
    }

    componentWillMount(){
        if(this.props.accessToken){
            this.props.onGetVehiclesData(this.props.accessToken);
        }
    }

    componentDidUpdate(prevProps) {
        //console.log(prevProps, 'vehicle - prevProps');
    }

    render(){
        let authRedirect = null;
        if (this.props.isLoading && !this.props.accessToken) {
            authRedirect = <Redirect to='/' />;
        }
        return(
            <div>
                {authRedirect}
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <VehicleInfo vehicleIds={this.props.vehicleIds} isLoading={this.props.isLoading} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.accessToken !== null,
        accessToken: state.auth.accessToken,
        isLoading: state.auth.loading,
        vehicleIds: state.auth.vehicles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetVehiclesData: ( accessToken ) => dispatch( actions.getVehiclesData( accessToken ) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps)( Vehicle );