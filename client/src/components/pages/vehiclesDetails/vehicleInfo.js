import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Switch from "react-switch";
import MapContainer from '../../common/MapContainer'
import * as actions from '../../state/actions/index';

import carImg from '../../../assets/images/car/image_car_3.png';
import Spinner from '../../UI/Spinner/Spinner';


class VehicleInfo extends Component{
    constructor(props) {
        super(props);    
        this.state = {
            requestType: 'info',
            vehicleId: '',
            checked: false
         };
    }

    // requestTypeHandler = (e) => {   
    //     const requestType = e.target.value;
    //     const vehicleId = this.state.vehicleId;
    //     const accessToken = this.props.accessToken;
    //     this.props.onGetVehiclesDetails(vehicleId, requestType, accessToken)
    //     this.setState({requestType : e.target.value});
    // }

    vehicleIdHandler = (e) => {
        //const requestType = this.state.requestType;
        const vehicleId = e.target.value;
        const accessToken = this.props.accessToken;
        this.props.onGetVehiclesDetails(vehicleId, accessToken)
        this.setState({vehicleId : e.target.value});
    }

    onChangeHandler = (value) => {
        const vehicleId = this.state.vehicleId;
        const accessToken = this.props.accessToken;
        this.props.onGetVehiclesLockUnlock(vehicleId, accessToken, value);
    }

    handleChange = (checked) => {
        const vehicleId = this.state.vehicleId;
        const accessToken = this.props.accessToken;
        if(checked){
            this.props.onGetVehiclesLockUnlock(vehicleId, accessToken, 'lock');
        }else {
            this.props.onGetVehiclesLockUnlock(vehicleId, accessToken, 'unlock');
        }
        this.setState({ checked: checked });
    }

    render(){
        const { vehicleIds, vehicleInfo, vehicleLoc, vehicleObometer, vehicleVin, lockdata } = this.props
        //console.log(this.props, 'vehicleData')
        let vehicleOptions = null
        if (vehicleIds==='undefined') {
            vehicleOptions = null
        } else {
            vehicleOptions = Object.keys(vehicleIds).map((v) => {
                return (
                    <option value={v} key={v}>{vehicleIds[v].year} {vehicleIds[v].make} {vehicleIds[v].model}</option>
                );
            });
        }
        let lockMessage = null;
        if(!lockdata.isLoading) {
            lockMessage = (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    {lockdata.data.data}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
            );
        }
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
                <div className="content mt-5 mb-5 row">                       
                    <div className="col-sm-3 align-self-center mobile-center">
                        <img src={carImg} className="img-fluid" alt="" title="" />
                    </div>
                    <div className="col-sm-9">
                        <div className="row form-group Vname">
                            <div className="col-3">
                                <label>Select Vehicle</label> 
                                <select className="form-control" value={this.state.vehicleId} onChange={(val) => this.vehicleIdHandler(val)}>
                                <option value="">Please select vehicle info</option>
                                {vehicleOptions}
                                </select>                               
                            </div>
                            {/* <div className="col-6">
                                <label>Select a request type</label>
                                <select className="form-control" value={this.state.requestType} onChange={(val) => this.requestTypeHandler(val)}>
                                    <option value="info">Vehicle info</option>
                                    <option value="location">Location</option>
                                    <option value="odometer">Odometer</option>
                                    <option value="lock">Lock doors</option>
                                    <option value="unlock">Unlock doors</option>
                                </select>
                            </div> */}
                        </div>
                        { this.props.isLoading ? <Spinner /> : 
                            vehicleLoc.isLoading ? null :
                            <div>
                                <div className="row mb-3">
                                    <div className="col-sm-6">
                                        <div className="row mb-5 mt-3">
                                            <div className="col-sm-6">
                                                <h3>Make</h3>
                                                <p>{ vehicleInfo.isLoading ? null: vehicleInfo.info.data.make }</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <h3>Model</h3>
                                                <p>{ vehicleInfo.isLoading ? null: vehicleInfo.info.data.model }</p>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-sm-6">
                                                <h3>Mileage</h3>
                                                <p>{ vehicleObometer.isLoading ? null: vehicleObometer.odometer.data.data.distance.toFixed(0) } { vehicleObometer.isLoading ? null: vehicleObometer.odometer.data.unitSystem === 'metric' ? 'KM' : 'MI'}</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <h3>VIN</h3>
                                                <p>{ vehicleVin.isLoading ? null: vehicleVin.vin.data }</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h3>Lock/Unlock</h3>
                                                <div className="react-switch-div">
                                                    <label htmlFor="material-switch">
                                                    <span>Lock/Unlock</span>
                                                    <Switch
                                                        checked={this.state.checked}
                                                        onChange={this.handleChange}
                                                        onColor="#d4edda"
                                                        onHandleColor="#155724"
                                                        handleDiameter={30}
                                                        uncheckedIcon={false}
                                                        checkedIcon={false}
                                                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                        height={20}
                                                        width={48}
                                                        className="react-switch"
                                                        id="material-switch"
                                                    />
                                                    </label>
                                                </div>
                                                {/* <RadioGroup onChange={ this.onChangeHandler } horizontal>
                                                    <RadioButton value="lock" iconSize={ 25 } iconInnerSize={ 15 } pointColor={'green'}>
                                                        Lock
                                                    </RadioButton>
                                                    <RadioButton value="unlock" iconSize={ 25 } iconInnerSize={ 15 } pointColor={'green'}>
                                                        Unlock
                                                    </RadioButton>
                                                </RadioGroup> */}
                                                {lockMessage}
                                            </div>
                                        </div>                                            
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h3>Location</h3>
                                                { vehicleLoc.isLoading ? null :
                                                <div className="map">
                                                    <MapContainer 
                                                            latitude={vehicleLoc.location.data.data.latitude} 
                                                            longitude={vehicleLoc.location.data.data.longitude} 
                                                    />
                                                </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>                                  
                            </div>
                        }
                    </div>                                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.accessToken !== null,
        accessToken: state.auth.accessToken,
        isLoading: state.auth.loading,
        vehicleIds: state.auth.vehicles,
        vehicleInfo: state.auth.vehicleInfo,
        vehicleLoc: state.auth.vehicleLoc,
        vehicleVin: state.auth.vehicleVin,
        vehicleObometer: state.auth.vehicleObometer,
        lockdata: state.auth.lockdata
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetVehiclesDetails: ( vehicleId, accessToken ) => dispatch( actions.getVehiclesDetails( vehicleId, accessToken )),
        onGetVehiclesLockUnlock: ( vehicleId, accessToken, type ) => dispatch( actions.getVehiclesLockUnlock( vehicleId, accessToken, type )),
    };
};

export default connect( mapStateToProps, mapDispatchToProps)( VehicleInfo );