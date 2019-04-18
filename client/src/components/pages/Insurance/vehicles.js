import React, { Component } from 'react';
import{
    Row, Col,
    FormGroup, FormControl, FormLabel
} from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';
import Select from 'react-select';

import { 
    comprehensiveOpts,
    collisionOpts,
    ownershipTypeOpts,
    vehicleUsageOtps
} from './variables'

class VehiclesQuoteBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleSelect: null,
         }
    }

    handleChange = (val) => {
        console.log(val)
    }
    
    render(){
        return(
            <div className="wizard-step">
                <h1 className="text-center m-3">Please tell us vehicles details.</h1>
                <Row>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>Vehicle identification</FormLabel>
                            <FormControl type="text" name="partial_vin" placeholder="ex: partial vin"/>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>mileage</FormLabel>
                            <FormControl type="text" name="annual" placeholder="ex: total mileage annual"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>vehicle usage</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="vehicle usage"
                                    name="vehicle_usage"
                                    value={this.state.singleSelect}
                                    options={vehicleUsageOtps}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>Ownership type</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="ownership type"
                                    name="ownership_type"
                                    value={this.state.singleSelect}
                                    options={ownershipTypeOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}><h3 className="text-center m-2">vehicle coverages details</h3></Col>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>comprehensive</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="Comprehensive"
                                    name="comprehensive"
                                    value={this.state.singleSelect}
                                    options={comprehensiveOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>collision</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="collision"
                                    name="collision"
                                    value={this.state.singleSelect}
                                    options={collisionOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>rental</FormLabel>
                            <FormGroup>
                                <Switch
                                    onChange={this.handleChange}
                                    defaultValue={true}
                                />
                            </FormGroup>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>roadside</FormLabel>
                            <FormGroup>
                                <Switch
                                    onChange={this.handleChange}
                                    defaultValue={false}
                                />
                            </FormGroup>
                        </FormGroup>
                    </Col>
                    
                </Row>
            </div>
        )
    }
}

export default VehiclesQuoteBlock