import React, { Component } from 'react';
import{
    Row, Col,
    FormGroup, FormControl, FormLabel
} from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';
import Select from 'react-select';

import { 
    comprehensiveOpts,
    ownershipTypeOpts,
    vehicleUsageOtps
} from './variables'

class VehiclesQuoteBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {}
         }
         this.inputRefs = {};
         this.isValidated = this.isValidated.bind(this);
    }


    isValidated() {
        let fields = this.props.quoteForm.vehicles[0];
        let errors = {};
        let formIsValid = true;

        if (!fields['vehicle_identification']['clearcover_vehicle_id']) {
            formIsValid = false;
            errors["clearcover_vehicle_id"] = "Please enter clearcover unique vehicle id - XXXX-XXXX-XXXX-XXXX.";
        }

        if (!fields['mileage']['annual']) {
            formIsValid = false;
            errors["annual"] = "Please enter total annual mileage";
        }

        if (!fields['ownership_type']) {
            formIsValid = false;
            errors["ownership_type"] = "Please select ownership type";
        }

        if (!fields['vehicle_usage']) {
            formIsValid = false;
            errors["vehicle_usage"] = "Please select vehicle usage";
        }

        if (!fields['vehicle_coverages']['comprehensive']['deductible_key']) {
            formIsValid = false;
            errors["comprehensive"] = "Please select vehicle coverages comprehensive";
        }
       
        this.setState({
            errors: errors
        });
        return formIsValid;
    
        // var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // re.test(this.state.email) === false ? this.setState({ emailError: (<small className="text-danger">Email is required and format should be <i>john@doe.com</i>.</small>) }):this.setState({ emailError: null });
        // return re.test(this.state.email);
        // console.log(fields, 'isValidated works as well...');
    }


    updateFieldsState = (quoteForm, key, field, val) => {
        const v = val.target.value
        this.props.onGetUpdateFieldValue(quoteForm, key, field, v);
    };

    updateFieldsSelState = (quoteForm, key, field, selectValOpt) => {
        const v = selectValOpt.value
        this.props.onGetUpdateFieldValue(quoteForm, key, field, v);
    };

    updateFieldsInnerState = (quoteForm, key, innerKey, field, val) => {
        const v = val.target.value
        this.props.onGetUpdateInnerFieldValue(quoteForm, key, innerKey, field, v);
    };  

    updateFieldsSelInnerState = (quoteForm, key, innerKey, field, selectValOpt) => {
        const v = selectValOpt.value
        this.props.onGetUpdateInnerFieldValue(quoteForm, key, innerKey, field, v);
    };

    updateFieldsSelInToInState = (quoteForm, key, innerKey, inToinKey, field, selectValOpt) => {
        const v = selectValOpt.value
        this.props.onGetUpdateInToInFieldValue(quoteForm, key, innerKey, inToinKey, field, v);
    };

    updateFieldsSwitchState = (elem, val, quoteForm, key, field) => {
        this.props.onGetUpdateFieldValue(quoteForm, key, field, val);
    }

    updateFieldsSwitchInToInState = (elem, val, quoteForm, key, innerKey, inToinKey, field) => {
        this.props.onGetUpdateInToInFieldValue(quoteForm, key, innerKey, inToinKey, field, val);
    }

    handleChange = (val) => {
        console.log(val)
    }
    
    render(){
        const { quoteForm } = this.props;
        return(
            <div className="wizard-step">
                <h1 className="text-center m-3">Please tell us vehicles details.</h1>
                { this.props.isLoading ? null :
                    <div className="">      
                        <Row>
                            <Col md={{ span: 5, offset: 1}}>
                                <FormGroup>
                                    <FormLabel>Vehicle identification <span className="text-danger">*</span></FormLabel>
                                    <FormControl 
                                        type="text" 
                                        name="clearcover_vehicle_id" 
                                        placeholder="ex: clearcover unique vehicle id XXXX-XXXX-XXXX-XXXX"
                                        defaultValue={quoteForm.vehicles[0].vehicle_identification.clearcover_vehicle_id}
                                        onChange={(val) => this.updateFieldsInnerState(quoteForm, "vehicles", "vehicle_identification", "clearcover_vehicle_id", val)}
                                    />
                                    <small className="text-danger">{ quoteForm.vehicles[0].vehicle_identification.clearcover_vehicle_id ? null : this.state.errors.clearcover_vehicle_id}</small>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <FormLabel>Is used for rideshare</FormLabel>
                                    <FormGroup>
                                        <Switch
                                            onChange={(el, val) => this.updateFieldsSwitchState(el, val, quoteForm, 'vehicles', 'is_used_for_rideshare')}
                                            defaultValue={quoteForm.vehicles[0].is_used_for_rideshare}
                                        />
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 5, offset: 1}}>
                                <FormGroup>
                                    <FormLabel>Ownership type <span className="text-danger">*</span></FormLabel>
                                    <div className="cv-select">
                                        <Select
                                            placeholder="ownership type"
                                            name="ownership_type"
                                            value={ownershipTypeOpts.filter(o => o.value === quoteForm.vehicles[0].ownership_type)}
                                            options={ownershipTypeOpts}
                                            onChange={(value) => this.updateFieldsSelState(quoteForm, "vehicles", "ownership_type", value)}
                                        />
                                        <small className="text-danger">{ quoteForm.vehicles[0].ownership_type ? null : this.state.errors.ownership_type}</small>
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <FormLabel>Vehicle Usage <span className="text-danger">*</span></FormLabel>
                                    <div className="cv-select">
                                        <Select
                                            placeholder="vehicle usage"
                                            name="vehicle_usage"
                                            value={vehicleUsageOtps.filter(o => o.value === quoteForm.vehicles[0].vehicle_usage)}
                                            options={vehicleUsageOtps}
                                            onChange={(value) => this.updateFieldsSelState(quoteForm, "vehicles", "vehicle_usage", value)}
                                        />
                                        <small className="text-danger">{ quoteForm.vehicles[0].vehicle_usage ? null : this.state.errors.vehicle_usage}</small>
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 5, offset: 1}}>
                                <FormGroup>
                                    <FormLabel>Mileage Annual <span className="text-danger">*</span></FormLabel>
                                    <FormControl 
                                        type="text" 
                                        name="annual" 
                                        maxLength="6"
                                        placeholder="ex: Annual total mileage"
                                        defaultValue={quoteForm.vehicles[0].mileage.annual}
                                        onChange={(val) => this.updateFieldsInnerState(quoteForm, "vehicles", "mileage", "annual", val)}
                                    />
                                    <small className="text-danger">{ quoteForm.vehicles[0].mileage.annual ? null : this.state.errors.annual}</small>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <FormLabel>Total Mileage</FormLabel>
                                    <FormControl 
                                        type="text" 
                                        name="total" 
                                        placeholder="ex: total mileage"
                                        defaultValue={quoteForm.vehicles[0].mileage.total}
                                        onChange={(val) => this.updateFieldsInnerState(quoteForm, "vehicles", "mileage", "total", val)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}><h3 className="text-center m-2">vehicle coverages details</h3></Col>
                            <Col md={{ span: 5, offset: 1}}>
                                <FormGroup>
                                    <FormLabel>Comprehensive <span className="text-danger">*</span></FormLabel>
                                    <div className="cv-select">
                                        <Select
                                            placeholder="Comprehensive"
                                            name="comprehensive"
                                            value={comprehensiveOpts.filter(o => o.value === quoteForm.vehicles[0].vehicle_coverages.comprehensive.deductible_key)}
                                            options={comprehensiveOpts}
                                            onChange={(value) => this.updateFieldsSelInToInState(quoteForm, "vehicles", "vehicle_coverages", "comprehensive", "deductible_key", value)}
                                        />
                                        <small className="text-danger">{ quoteForm.vehicles[0].vehicle_coverages.comprehensive.deductible_key ? null : this.state.errors.comprehensive}</small>
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <FormLabel>Collision</FormLabel>
                                    <FormGroup>
                                        <Switch
                                            onChange={(el, val) => this.updateFieldsSwitchInToInState(el, val, quoteForm, 'vehicles', 'vehicle_coverages', 'collision', 'waived')}
                                            defaultValue={quoteForm.vehicles[0].vehicle_coverages.collision.waived}
                                        />
                                    </FormGroup>
                                    {/* <div className="cv-select">
                                        <Select
                                            placeholder="collision"
                                            name="collision"
                                            value={comprehensiveOpts.filter(o => o.value === quoteForm.vehicles[0].vehicle_coverages.comprehensive.deductible_key)}
                                            options={collisionOpts}
                                            onChange={(value) => this.updateFieldsSelInToInState(quoteForm, "vehicles", "vehicle_coverages", "comprehensive", "deductible_key", value)}
                                        />
                                    </div> */}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 5, offset: 1}}>
                                <FormGroup>
                                    <FormLabel>Rental</FormLabel>
                                    <FormGroup>
                                        <Switch
                                            onChange={(el, val) => this.updateFieldsSwitchInToInState(el, val, quoteForm, 'vehicles', 'vehicle_coverages', 'rental', 'waived')}
                                            defaultValue={quoteForm.vehicles[0].vehicle_coverages.rental.waived}
                                        />
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <FormLabel>Rideshare</FormLabel>
                                    <FormGroup>
                                        <Switch
                                            onChange={(el, val) => this.updateFieldsSwitchInToInState(el, val, quoteForm, 'vehicles', 'vehicle_coverages', 'rideshare', 'waived')}
                                            defaultValue={quoteForm.vehicles[0].vehicle_coverages.rideshare.waived}
                                        />
                                    </FormGroup>
                                </FormGroup>
                            </Col>                            
                        </Row>
                        <Row>
                            <Col md={{ span: 5, offset: 1}}>
                                <FormGroup>
                                    <FormLabel>Roadside</FormLabel>
                                    <FormGroup>
                                        <Switch
                                            onChange={(el, val) => this.updateFieldsSwitchInToInState(el, val, quoteForm, 'vehicles', 'vehicle_coverages', 'roadside', 'waived')}
                                            defaultValue={quoteForm.vehicles[0].vehicle_coverages.roadside.waived}
                                        />
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <FormLabel>Uninsured Motorist Property Damage</FormLabel>
                                    <FormGroup>
                                        <Switch
                                            onChange={(el, val) => this.updateFieldsSwitchInToInState(el, val, quoteForm, 'vehicles', 'vehicle_coverages', 'uninsured_motorist_property_damage', 'waived')}
                                            defaultValue={quoteForm.vehicles[0].vehicle_coverages.uninsured_motorist_property_damage.waived}
                                        />
                                    </FormGroup>
                                </FormGroup>
                            </Col>                            
                        </Row>
                    </div>
                }
            </div>
        )
    }
}

export default VehiclesQuoteBlock