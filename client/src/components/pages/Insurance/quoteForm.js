import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepZilla from 'react-stepzilla';
import{
    Container, Row, Col
} from 'react-bootstrap';

import Step1 from './drivers';
import Step2 from './vehicles';
import Step3 from './getQuote';
import { 
    quoteForm
} from './variables';

import * as actions from '../../state/actions/index';

class QuoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formIsValid: false
         } 
    }

    componentDidMount(){
        this.props.onGetDefaultQuoteFormVal(quoteForm);
    }
            
    render(){
        const steps = [
            { name: 'Drivers', component: <Step1 {...this.props} />},
            { name: 'Vehicles', component: <Step2 {...this.props} />},
            { name: 'Get Quote', component: <Step3 {...this.props} />}
        ];  
        const { updateActiveStep } = this.props;
        return(
            <div className="main-content">
                <Container>
                    <Row>
                        <Col md={{ span: 8, offset: 2}}>
                            <StepZilla
                                steps={steps}
                                //stepsNavigation={false}
                                preventEnterSubmission={true}
                                nextTextOnFinalActionStep={"Get Quote"}
                                nextButtonCls="btn btn-prev btn-success btn-fill pull-right btn-wd"
                                backButtonCls="btn btn-next btn-default btn-fill pull-left btn-wd custom-btn"
                                onStepChange={(step) => (updateActiveStep(step))}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quoteForm: state.quote.quoteForm,
        isLoading: state.quote.loading,
        activeStep: state.quote.activeStep,
        appData: state.quote.appData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateActiveStep: (activeStep) => { dispatch(actions.updateActiveStep(activeStep))},
        onGetDefaultQuoteFormVal: ( quoteFormVal ) => dispatch( actions.getDefaultQuoteFormVal( quoteFormVal ) ),
        onGetUpdateFieldValue: ( quoteForm, key, field, value ) => dispatch( actions.getUpdateFieldValue( quoteForm, key, field, value ) ),
        onGetUpdateInnerFieldValue: ( quoteForm, key, innerKey, field, value ) => dispatch( actions.getUpdateInnerFieldValue( quoteForm, key, innerKey, field, value ) ),
        onGetUpdateInToInFieldValue: ( quoteForm, key, innerKey, inToinKey, field, value ) => dispatch( actions.getUpdateInToInFieldValue( quoteForm, key, innerKey, inToinKey, field, value ) ),
        onGetQuoteApi: (quoteForm) => dispatch( actions.getQuoteApi(quoteForm)),
    };
};

export default connect( mapStateToProps, mapDispatchToProps)(QuoteForm)