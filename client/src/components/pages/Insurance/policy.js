import React, { Component } from 'react';
import{
    Row, Col,
    FormGroup, FormControl, FormLabel
} from 'react-bootstrap';
import Datetime from 'react-datetime';
import Select from 'react-select';

import { 
    bodilyInjuryOpts, 
    propertyDamageOpts, 
    medicalPaymentsOpts, 
    uninsuredMotoristBodilyInjuryOpts, 
    underinsuredMotoristBodilyInjuryOpts,
    stateOpts
} from './variables';

class PolicyQuoteBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            emailError: null,
            singleSelect: null,
        }
    }

    onChangeHandler = (val) =>{
        console.log(val);
    }
    
    render(){
        return(
            <div className="wizard-step">
                <h1 className="text-center m-3">Please tell us policy details.</h1>
                <Row>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>Policy Effective Date</FormLabel>
                            <Datetime
                                timeFormat={false}
                                inputProps={{placeholder:"Policy Effective Date"}}
                                defaultValue={new Date()}
                                onChange={this.onChangeHandler}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>Term In Months</FormLabel>
                            <FormControl type="text" name="term_in_months" placeholder="ex: Term In Months"/>
                        </FormGroup>
                    </Col>
                </Row>                    
                <Row>
                    <Col md={12}><h3 className="text-center m-2">Coverages Policy</h3></Col>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>Coverage Bodily Injury</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="Coverage Bodily Injury"
                                    name="bodily_injury"
                                    value={this.state.singleSelect}
                                    options={bodilyInjuryOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>                            
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>Coverage Property Damage</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="Coverage Property Damage"
                                    name="property_damage"
                                    value={this.state.singleSelect}
                                    options={propertyDamageOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>                            
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>Coverage Medical Payments</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="Coverage Medical Payments"
                                    name="medical_payments"
                                    value={this.state.singleSelect}
                                    options={medicalPaymentsOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>                            
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>Uninsured Motorist Bodily Injury</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="Uninsured Motorist Bodily Injury"
                                    name="uninsured_motorist_bodily_injury"
                                    value={this.state.singleSelect}
                                    options={uninsuredMotoristBodilyInjuryOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>                            
                        </FormGroup>
                    </Col>
                    <Col md={{ span: 10, offset: 1}}>
                        <FormGroup>
                            <FormLabel>Underinsured Motorist Bodily Injury</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="Underinsured Motorist Bodily Injury"
                                    name="underinsured_motorist_bodily_injury"
                                    value={this.state.singleSelect}
                                    options={underinsuredMotoristBodilyInjuryOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>                            
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}><h3 className="text-center m-2">Mailing Address</h3></Col>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>line one</FormLabel>
                            <FormControl type="text" name="line_one" placeholder="ex: line one"/>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>line two</FormLabel>
                            <FormControl type="text" name="line_two" placeholder="ex: line two"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>City</FormLabel>
                            <FormControl type="text" name="city" placeholder="ex: City"/>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>State</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="Select State"
                                    name="state"
                                    value={this.state.singleSelect}
                                    options={stateOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>
                        </FormGroup>
                    </Col>
                </Row> 
                <Row>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>zip code</FormLabel>
                            <FormControl type="text" name="zip_code" placeholder="ex: zip code"/>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>zip four</FormLabel>
                            <FormControl type="text" name="zip_four" placeholder="ex: zip four"/>
                        </FormGroup>
                    </Col>
                </Row> 
                {/* <Row>
                    <Col md={{ span: 10, offset: 1}}>
                        <FormGroup>
                            <FormLabel>Email <span className="text-danger">*</span></FormLabel>
                            <FormControl type="email" name="email" placeholder="ex: hello@creative-tim.com" onChange={ (event) => this.setState({ email: event.target.value }) }/>
                            {this.state.emailError}
                        </FormGroup>
                    </Col>
                </Row> */}
            </div>
        )
    }
}

export default PolicyQuoteBlock