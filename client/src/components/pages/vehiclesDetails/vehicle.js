import React, { Component } from 'react';
//import { bindActionCreators } from 'redux'
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
        console.log(prevProps, 'vehicle - prevProps');
    }

    render(){
        return(
            <div>
                <div className="row">
                <div className="col-lg-6 col-md-12">
                    <VehicleInfo vehicleIds={this.props.vehicleIds} isLoading={this.props.isLoading} />
                </div>

            <div className="col-lg-6 col-md-12">
                <div className="Box">
                    <div className="top-bar">
                        <div className="caption">
                            <h2>Engine Faults</h2>
                        </div>
                        <div className="right_info">
                            <span>?</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="row ghy">
                            <div className="col-sm-6">
                                <h3>28 Total Faults</h3>
                            </div>
                            <div className="col-sm-6 text-right">
                                <span className="range">High to Low</span>
                                <span><img src="img/select.jpg" alt="" title="" width="15" /></span>
                            </div>
                        </div>
                        <ul className="list_search list-group">
                            <li>
                                <i className="fa fa-flag" aria-hidden="true"></i> Lorem ipsum dolor sit amet, consectetur
                                <span className="count pull-right">x9</span>
                            </li>
                            <li>
                                <i className="fa fa-flag" aria-hidden="true"></i> Lorem ipsum dolor sit amet, consectetur
                                <span className="count pull-right">x9</span>
                            </li>
                            <li>
                                <i className="fa fa-flag" aria-hidden="true"></i> Lorem ipsum dolor sit amet, consectetur
                                <span className="count pull-right">x9</span>
                            </li>
                            <li>
                                <i className="fa fa-flag" aria-hidden="true"></i> Lorem ipsum dolor sit amet, consectetur
                                <span className="count pull-right">x9</span>
                            </li>
                            <li>
                                <i className="fa fa-flag" aria-hidden="true"></i> Lorem ipsum dolor sit amet, consectetur
                                <span className="count pull-right">x9</span>
                            </li>
                            <li>
                                <i className="fa fa-flag" aria-hidden="true"></i> Lorem ipsum dolor sit amet, consectetur
                                <span className="count pull-right">x9</span>
                            </li>
                            <li>
                                <i className="fa fa-flag" aria-hidden="true"></i> Lorem ipsum dolor sit amet, consectetur
                                <span className="count pull-right">x9</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        <div className="row mb-3">
            <div className="col-lg-6 col-md-12">
                <div className="Box Box2">
                    <div className="top-bar">
                        <div className="caption">
                            <h2>Fuel Usage</h2>
                        </div>
                        <div className="right_info">
                            <span>?</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="row ghy">
                            <div className="col-sm-6 ft">
                                <h3>From</h3>
                                <span className="date"><i className="fa fa-calendar" aria-hidden="true"></i> Today</span>
                                <span className="time"><i className="fa fa-clock-o" aria-hidden="true"></i> 09:00 AM</span>
                            </div>
                            <div className="col-sm-6 ft">
                                <h3>To</h3>
                                <span className="date"><i className="fa fa-calendar" aria-hidden="true"></i> Today</span>
                                <span className="time"><i className="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM</span>
                            </div>
                        </div>
                        <div className="row equalSpace">
                            <div className="col-sm-2 text-center">
                                <h3>Fuel Economy</h3>
                                <p>125.5</p>
                            </div>
                            <div className="col-sm-8 text-center">
                                <h3>Distance</h3>
                                <div className="progressBar">
                                    <div className="progressBarUpdate" style={{width: '55%'}}><span className="numberCount">103.1</span></div>
                                </div>
                            </div>
                            <div className="col-sm-2 text-center">
                                <h3>Fuel Used</h3>
                                <p>0.8</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-md-12">
                <div className="Box Box2">
                    <div className="top-bar">
                        <div className="caption">
                            <h2>Number of Stops</h2>
                        </div>
                        <div className="right_info">
                            <span>?</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="row ghy">
                            <div className="col-sm-6 ft">
                                <h3>From</h3>
                                <span className="date"><i className="fa fa-calendar" aria-hidden="true"></i> Today</span>
                                <span className="time"><i className="fa fa-clock-o" aria-hidden="true"></i> 09:00 AM</span>
                            </div>
                            <div className="col-sm-6 ft">
                                <h3>To</h3>
                                <span className="date"><i className="fa fa-calendar" aria-hidden="true"></i> Today</span>
                                <span className="time"><i className="fa fa-clock-o" aria-hidden="true"></i> 10:00 AM</span>
                            </div>
                        </div>
                        <ul className="list_number list-group">
                            <li>
                                <div className="row">
                                    <label className="col-sm-4 col-4">Short Stops</label>
                                    <div className="col-sm-8 col-8 text-right">
                                        <div className="prgy">
                                            <span className="PRBar" style={{width: '80%'}}></span>
                                        </div>
                                        <span className="count ">80</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <label className="col-sm-4 col-4">10 Min</label>
                                    <div className="col-sm-8 col-8 text-right">
                                        <div className="prgy">
                                            <span className="PRBar" style={{width: '70%'}}></span>
                                        </div>
                                        <span className="count ">70</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <label className="col-sm-4 col-4">20 Min</label>
                                    <div className="col-sm-8 col-8 text-right">
                                        <div className="prgy">
                                            <span className="PRBar" style={{width: '30%'}}></span>
                                        </div>
                                        <span className="count ">30</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <label className="col-sm-4 col-4">30 Min</label>
                                    <div className="col-sm-8 col-8 text-right">
                                        <div className="prgy">
                                            <span className="PRBar" style={{width: '40%'}}></span>
                                        </div>
                                        <span className="count ">40</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <label className="col-sm-4 col-4">40 Min</label>
                                    <div className="col-sm-8 col-8 text-right">
                                        <div className="prgy">
                                            <span className="PRBar" style={{width: '20%'}}></span>
                                        </div>
                                        <span className="count ">20</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <label className="col-sm-4 col-4">Long Stops</label>
                                    <div className="col-sm-8 col-8 text-right">
                                        <div className="prgy">
                                            <span className="PRBar" style={{width: '100%'}}></span>
                                        </div>
                                        <span className="count ">120</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
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