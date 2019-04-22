import React, { Component } from 'react';


class GetCoverdBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }

    componentDidMount(){
        this.props.onGetQuoteApi(this.props.quoteForm);
    }

    
    render(){
        const { appData, quoteForm } = this.props;
        console.log(appData, 'appData');
        console.log(quoteForm, 'quoteForm');
        return(
            <div className="wizard-step">
                <h1 className="text-center m-3">Get Quote.</h1>
               
                <div className="wizard-finish-button">
                    <button type="button" className="btn btn-prev btn-success btn-fill pull-right btn-wd">Finish</button>
                </div>

            </div>
        )
    }
}

export default GetCoverdBlock