import React, { Component } from 'react';
import{
    Row, Col,
    FormGroup, FormControl, FormLabel
} from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';
import Datetime from 'react-datetime';
import Select from 'react-select';

import { 
    genderOpts,
    maritalStatusOpts,
    relationshipToApplicantOpts,
    currentEducationOpts
} from './variables'

class DriversQuoteBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    
    render(){
        return(
            <div className="wizard-step">
                <h1 className="text-center m-3">Please tell us drivers details.</h1>
                <Row>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>exclude from quote</FormLabel>
                            <FormGroup>
                                <Switch
                                    onChange={this.handleChange}
                                    defaultValue={false}
                                />
                            </FormGroup>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>contact information <span className="text-danger">*</span></FormLabel>
                            <FormControl type="email" name="email_address" placeholder="ex: hello@getcarvi.com" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}><h3 className="text-center m-2">driver information</h3></Col>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>first name</FormLabel>
                            <FormControl type="text" name="first_name" placeholder="ex: first name"/>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>middle name</FormLabel>
                            <FormControl type="text" name="middle_name" placeholder="ex: middle name"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>last name</FormLabel>
                            <FormControl type="text" name="last_name" placeholder="ex: last name"/>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>date of birth</FormLabel>
                            <Datetime
                                timeFormat={false}
                                inputProps={{placeholder:"date of birth"}}
                                defaultValue={new Date()}
                                onChange={this.onChangeHandler}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>gender</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="gender"
                                    name="gender"
                                    value={this.state.singleSelect}
                                    options={genderOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>marital status</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="marital status"
                                    name="marital_status"
                                    value={this.state.singleSelect}
                                    options={maritalStatusOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 1}}>
                        <FormGroup>
                            <FormLabel>relationship to applicant</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="relationship to applicant"
                                    name="relationship_to_applicant"
                                    value={this.state.singleSelect}
                                    options={relationshipToApplicantOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>                     
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <FormLabel>current education</FormLabel>
                            <div className="cv-select">
                                <Select
                                    placeholder="current education"
                                    name="current_education"
                                    value={this.state.singleSelect}
                                    options={currentEducationOpts}
                                    onChange={(value) => this.setState({ singleSelect: value})}
                                />
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
                <div className="wizard-finish-button">
                <button type="button" className="btn btn-prev btn-success btn-fill pull-right btn-wd">Finish</button>
                </div>
            </div>
        )
    }
}

export default DriversQuoteBlock