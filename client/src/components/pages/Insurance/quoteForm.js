import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import{
    Container, Row, Col
} from 'react-bootstrap';

import Step1 from './policy';
import Step2 from './vehicles';
import Step3 from './drivers';


class QuoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        
    }
            
    render(){
        const steps = [
            { name: 'Policy', component: <Step1 />},
            { name: 'Vehicles', component: <Step2 />},
            { name: 'Drivers', component: <Step3 />}
        ];
        return(
            <div className="main-content">
                <Container>
                    <Row>
                        <Col md={{ span: 8, offset: 2}}>
                            <StepZilla
                                steps={steps}
                                stepsNavigation={false}
                                nextButtonCls="btn btn-prev btn-success btn-fill pull-right btn-wd"
                                backButtonCls="btn btn-next btn-default btn-fill pull-left btn-wd custom-btn"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default QuoteForm