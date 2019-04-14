import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../state/actions/index';

import carImg from '../../../assets/images/car/image_car_3.png';
import Spinner from '../../UI/Spinner/Spinner';

class VehicleInfo extends Component{
    constructor(props) {
        super(props);    
        this.state = {
            requestType: 'info',
            vehicleId: '',
         };
    }

    requestTypeHandler = (e) => {   
        const requestType = e.target.value;
        const vehicleId = this.state.vehicleId;
        const accessToken = this.props.accessToken;
        this.props.onGetVehiclesDetails(vehicleId, requestType, accessToken)
        this.setState({requestType : e.target.value});
    }

    vehicleIdHandler = (e) => {
        const requestType = this.state.requestType;
        const vehicleId = e.target.value;
        const accessToken = this.props.accessToken;
        this.props.onGetVehiclesDetails(vehicleId, requestType, accessToken)
        this.setState({vehicleId : e.target.value});
    }

    render(){
        const { vehicleIds } = this.props
        return (
            <div className="Box">
                        <div className="top-bar">
                            <div className="caption">
                                <h2>Vehicle Info</h2>
                            </div>
                            <div className="right_info">
                                <span>?</span>
                            </div>
                        </div>
                        { this.props.isLoading ? <Spinner /> : 
                        <div className="content mt-5 mb-5 row">                       
                            <div className="col-sm-3 align-self-center mobile-center">
                                <img src={carImg} className="img-fluid" alt="" title="" />
                            </div>
                            <div className="col-sm-9">
                                <div className="row form-group Vname">
                                    <div className="col-6">
                                        <label>Vehicle Name</label> 
                                        <select className="form-control" value={this.state.vehicleId} onChange={(val) => this.vehicleIdHandler(val)}>
                                        <option value="">Please select vehicle name</option>
                                        {
                                            Object.keys(vehicleIds).length > 0 ?
                                                Object.keys(vehicleIds).map(v  => {
                                                    return (
                                                        <option value={v} key={v}>{vehicleIds[v].year} {vehicleIds[v].make} {vehicleIds[v].model}</option>
                                                    );
                                                })
                                            : null
                                        }
                                        </select>                               
                                    </div>
                                    <div className="col-6">
                                        <label>Select a request type</label>
                                        <select className="form-control" value={this.state.requestType} onChange={(val) => this.requestTypeHandler(val)}>
                                            <option value="info">Vehicle info</option>
                                            <option value="location">Location</option>
                                            <option value="odometer">Odometer</option>
                                            <option value="lock">Lock doors</option>
                                            <option value="unlock">Unlock doors</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-6">
                                        <h3>Make</h3>
                                        <p>Hyundai</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h3>Modal</h3>
                                        <p>Hyundai Sonata</p>
                                    </div>
                                </div>
    
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h3>Odometer</h3>
                                        <p>125,411 Km</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h3>Vin</h3>
                                        <p>5NPEB4AC0BH210877</p>
                                    </div>
                                </div>
                            </div>                                    
                        </div>
                        }
                    </div>
        );
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
        onGetVehiclesDetails: ( vehicleId, requestType, accessToken ) => dispatch( actions.getVehiclesDetails( vehicleId, requestType, accessToken ) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps)( VehicleInfo );