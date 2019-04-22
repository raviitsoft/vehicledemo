import React, { Component } from 'react';
import{
    Row, Col,
    FormGroup, FormControl, FormLabel
} from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';
import Datetime from 'react-datetime';
import Select from 'react-select';
import moment from 'moment';

import { 
    suffixOpts,
    genderOpts,
    maritalStatusOpts,
    relationshipToApplicantOpts,
    currentEducationOpts
} from './variables';

class DriversQuoteBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
           errors: {}
         }
         this.inputRefs = {};
         this.isValidated = this.isValidated.bind(this);
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    isValidated() {
        let fields = this.props.quoteForm.drivers[0];
        let errors = {};
        let formIsValid = true;
        
        if(this.validateEmail(fields['contact_information']['email_address'])) {
            formIsValid = true;
            errors["email_address"] = '';
            this.setState({errors : errors});
        } else {
            formIsValid = false;
            errors["email_address"] = 'email address not valid';
        }

        if (!fields['contact_information']['email_address']) {
            formIsValid = false;
            errors["email_address"] = "Please enter your email address.";
        }
        if (!fields['driver_information']['first_name']) {
            formIsValid = false;
            errors["first_name"] = "Please enter driver first name.";
        }
        if (!fields['driver_information']['last_name']) {
            formIsValid = false;
            errors["last_name"] = "Please enter driver last name.";
        }         
        if (!fields['driver_information']['suffix']) {
            formIsValid = false;
            errors["suffix"] = "Please select suffix value.";
        }
        if (!fields['driver_information']['gender']) {
            formIsValid = false;
            errors["gender"] = "Please select gender value.";
        }
        if (!fields['driver_information']['marital_status']) {
            formIsValid = false;
            errors["marital_status"] = "Please select marital status value.";
        }
        if (!fields['current_education']['education_level_clearcover_key']) {
            formIsValid = false;
            errors["current_education"] = "Please select current education.";
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

    minmax = (value, min, max) => {
        if(parseInt(value) < min || isNaN(parseInt(value))) 
            return min; 
        else if(parseInt(value) > max) 
            return max; 
        else return value;
    }

    componentDidMount(){
        //console.log(this.props.getQuoteForm(), 'getQuoteForm page');
    }

    updateFieldsState = (quoteForm, key, field, val) => {
        const v = val.target.value
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

    updateFieldsSwitchState = (elem, val, quoteForm, key, field) => {
        this.props.onGetUpdateFieldValue(quoteForm, key, field, val);
    }

    onDateChnageHandler = (quoteForm, key, innerKey, field, val) =>{
        const date = moment(val).format('YYYY-MM-DD');
        this.props.onGetUpdateInnerFieldValue(quoteForm, key, innerKey, field, date);
    }
    
    render(){
        const { quoteForm } = this.props;
        return(
            <div className="wizard-step">
                <h1 className="text-center m-3">Please tell us drivers details.</h1>
            { this.props.isLoading ? null :
               <div className="">               
                    <Row>
                        <Col md={{ span: 5, offset: 1}}>
                            <FormGroup>
                                <FormLabel>Exclude From Quote</FormLabel>
                                <FormGroup>
                                    <Switch
                                        onChange={(el, val) => this.updateFieldsSwitchState(el, val, quoteForm, 'drivers', 'exclude_from_quote')}
                                       defaultValue={quoteForm.drivers[0].exclude_from_quote}
                                    />
                                </FormGroup>
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <FormLabel>Contact Information <span className="text-danger">*</span></FormLabel>
                                <FormControl 
                                    type="email" 
                                    name="email_address" 
                                    placeholder="ex: hello@getcarvi.com"
                                    defaultValue={quoteForm.drivers[0].contact_information.email_address}
                                    onChange={(val) => this.updateFieldsInnerState(quoteForm, "drivers", "contact_information", "email_address", val)}
                                    />
                                    <small className="text-danger">{this.state.errors.email_address}</small>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}><h3 className="text-center m-2">Driver Information</h3></Col>
                        <Col md={{ span: 5, offset: 1}}>
                            <FormGroup>
                                <FormLabel>First Name <span className="text-danger">*</span></FormLabel>
                                <FormControl 
                                    type="text" 
                                    name="first_name" 
                                    placeholder="ex: first name"
                                    defaultValue={quoteForm.drivers[0].driver_information.first_name}
                                    onChange={(val) => this.updateFieldsInnerState(quoteForm, "drivers", "driver_information", "first_name", val)}
                                />
                                <small className="text-danger">{quoteForm.drivers[0].driver_information.first_name ? null : this.state.errors.first_name}</small>
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <FormLabel>Middle Name</FormLabel>
                                <FormControl 
                                    type="text" 
                                    name="middle_name" 
                                    placeholder="ex: middle name"
                                    defaultValue={quoteForm.drivers[0].driver_information.middle_name}
                                    onChange={(val) => this.updateFieldsInnerState(quoteForm, "drivers", "driver_information", "middle_name", val)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 5, offset: 1}}>
                            <FormGroup>
                                <FormLabel>Last Name <span className="text-danger">*</span></FormLabel>
                                <FormControl 
                                    type="text" 
                                    name="last_name" 
                                    placeholder="ex: last name"
                                    defaultValue={quoteForm.drivers[0].driver_information.last_name}
                                    onChange={(val) => this.updateFieldsInnerState(quoteForm, "drivers", "driver_information", "last_name", val)}
                                />
                              <small className="text-danger">{quoteForm.drivers[0].driver_information.last_name ? null : this.state.errors.last_name}</small>
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <FormLabel>Date Of Birth <span className="text-danger">*</span></FormLabel>
                                <Datetime
                                    dateFormat="YYYY-MM-DD"
                                    timeFormat={false}
                                    inputProps={{placeholder:"date of birth"}}
                                    defaultValue={new Date()}
                                    onChange={(date) => this.onDateChnageHandler(quoteForm, "drivers", "driver_information", "date_of_birth", date)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 5, offset: 1}}>
                            <FormGroup>
                                <FormLabel>Suffix <span className="text-danger">*</span></FormLabel>
                                <div className="cv-select">
                                    <Select
                                        placeholder="suffix"
                                        name="suffix"
                                        value={suffixOpts.filter(o => o.value === quoteForm.drivers[0].driver_information.suffix)}
                                        options={suffixOpts}
                                        onChange={(value) => this.updateFieldsSelInnerState(quoteForm, "drivers", "driver_information", "suffix", value)}
                                    />
                                    <small className="text-danger">{ quoteForm.drivers[0].driver_information.suffix ? null : this.state.errors.suffix }</small>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <FormLabel>Gender <span className="text-danger">*</span></FormLabel>
                                <div className="cv-select">
                                    <Select
                                        placeholder="gender"
                                        name="gender"
                                        value={genderOpts.filter(o => o.value === quoteForm.drivers[0].driver_information.gender)}
                                        options={genderOpts}
                                        onChange={(value) => this.updateFieldsSelInnerState(quoteForm, "drivers", "driver_information", "gender", value)}
                                    />
                                    <small className="text-danger">{quoteForm.drivers[0].driver_information.gender ? null : this.state.errors.gender}</small>
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 5, offset: 1}}>
                            <FormGroup>
                                <FormLabel>Marital Status <span className="text-danger">*</span></FormLabel>
                                <div className="cv-select">
                                    <Select
                                        placeholder="marital status"
                                        name="marital_status"
                                        value={maritalStatusOpts.filter(o => o.value === quoteForm.drivers[0].driver_information.marital_status)}
                                        options={maritalStatusOpts}
                                        onChange={(value) => this.updateFieldsSelInnerState(quoteForm, "drivers", "driver_information", "marital_status", value)}
                                    />
                                    <small className="text-danger">{quoteForm.drivers[0].driver_information.marital_status ? null : this.state.errors.marital_status}</small>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <FormLabel>Relationship To Applicant <span className="text-danger">*</span></FormLabel>
                                <div className="cv-select">
                                    <Select
                                        placeholder="relationship to applicant"
                                        name="relationship_to_applicant"
                                        value={relationshipToApplicantOpts.filter(o => o.value === quoteForm.drivers[0].driver_information.relationship_to_applicant)}
                                        options={relationshipToApplicantOpts}
                                        onChange={(value) => this.updateFieldsSelInnerState(quoteForm, "drivers", "driver_information", "relationship_to_applicant", value)}
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={{ span: 10, offset: 1}}>
                            <FormGroup>
                                <FormLabel>Current Education <span className="text-danger">*</span></FormLabel>
                                <div className="cv-select">
                                    <Select
                                        placeholder="current education"
                                        name="current_education"
                                        value={currentEducationOpts.filter(o => o.value === quoteForm.drivers[0].current_education.education_level_clearcover_key)}
                                        options={currentEducationOpts}
                                        onChange={(value) => this.updateFieldsSelInnerState(quoteForm, "drivers", "current_education", "education_level_clearcover_key", value)}
                                    />
                                    <small className="text-danger">{quoteForm.drivers[0].current_education.education_level_clearcover_key ? null : this.state.errors.current_education}</small>
                                </div>                            
                            </FormGroup>
                        </Col>
                    </Row>  
                </div> 
                }             
            </div>
        )
    }
}

export default (DriversQuoteBlock)
