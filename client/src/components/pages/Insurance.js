import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import { updateObject, checkValidity } from '../shared/utility';

class Insurance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formIsValid: false,
            quoteForm: {
                policy: {
                    effective_date: {
                        elementType: 'input',
                        elementConfig: {
                            type: 'text',
                            placeholder: 'Enter date'
                        },
                        value: '',
                        validation: {
                            required: true
                        },
                        valid: false,
                        touched: false
                    },
                    term_in_months: {
                        elementType: 'input',
                        elementConfig: {
                            type: 'text',
                            placeholder: 'Enter months'
                        },
                        value: '',
                        validation: {
                            required: true
                        },
                        valid: false,
                        touched: false
                    },
                    coverages: {
                      bodily_injury: {
                        limit_single: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'limit_single'
                            },
                            value: '',
                            validation: {
                                required: false
                            },
                            valid: false,
                            touched: false
                        },
                        limit_per_day: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'limit_per_day'
                            },
                            value: '',
                            validation: {
                                required: false
                            },
                            valid: false,
                            touched: false
                        },
                        limit_per_person: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'limit_per_person'
                            },
                            value: '',
                            validation: {
                                required: false
                            },
                            valid: false,
                            touched: false
                        },
                        limit_per_loss: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'limit_per_loss'
                            },
                            value: '',
                            validation: {
                                required: false
                            },
                            valid: false,
                            touched: false
                        },
                        waived: true,
                        limit_enum: {
                            elementType: 'select',
                            elementConfig: {
                                options: [
                                    {value: 'twenty_five_fifty', displayValue: 'twenty_five_fifty'},
                                    {value: 'thirty_sixty', displayValue: 'thirty_sixty'},
                                ]
                            },
                            value: 'thirty_sixty',
                            validation: {},
                            valid: true
                        }
                      },
                    //   property_damage: {
                    //     limit_single: "consequat nulla veniam",
                    //     limit_per_day: "dolor nostrud et ",
                    //     limit_per_person: "ex cillum labore",
                    //     limit_per_loss: "consequat Duis",
                    //     waived: true
                    //   },
                    //   medical_payments: {
                    //     limit_single: "proident ea esse minim dolor",
                    //     limit_per_day: "sed in ea",
                    //     limit_per_person: "laborum consectetur est dolor",
                    //     limit_per_loss: "id officia dolor Lorem in",
                    //     waived: true
                    //   },
                    //   uninsured_motorist_bodily_injury: {
                    //     limit_single: "eiusmod ",
                    //     limit_per_day: "irure in exercitation",
                    //     limit_per_person: "labore irure Lorem ea ",
                    //     limit_per_loss: "sit consequat amet minim non",
                    //     waived: false
                    //   },
                    //   underinsured_motorist_bodily_injury: {
                    //     limit_single: "voluptate est",
                    //     limit_per_day: "ullamco Lorem nulla",
                    //     limit_per_person: "Duis ex in",
                    //     limit_per_loss: "Ut sed culpa aliqua",
                    //     waived: true
                    //   }
                    },
                    mailing_address: {                      
                        line_one: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'line_one'
                            },
                            value: '',
                            validation: {
                                required: false
                            },
                            valid: false,
                            touched: false
                        },
                        line_two: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'line_two'
                            },
                            value: '',
                            validation: {
                                required: false
                            },
                            valid: false,
                            touched: false
                        },
                        state: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'state'
                            },
                            value: '',
                            validation: {
                                required: false
                            },
                            valid: false,
                            touched: false
                        },
                        zip_code: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'zip_code'
                            },
                            value: '',
                            validation: {
                                required: false
                            },
                            valid: false,
                            touched: false
                        },
                        zip_four: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'zip_four'
                            },
                            value: '',
                            validation: {
                                required: false
                            },
                            valid: false,
                            touched: false
                        }
                    }
                },               
            }
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        
        const updatedFormElement = updateObject(this.setState.quoteForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.validation),
            touched: true
        });
        const updatedQuoteForm = updateObject(this.state.quoteForm, {
            [inputIdentifier]: updatedFormElement
        });
        
        let formIsValid = true;
        for (let inputIdentifier in updatedQuoteForm) {
            formIsValid = updatedQuoteForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({quoteForm: updatedQuoteForm, formIsValid: formIsValid});
    }

    // inputChangedHandler = (event, fieldSet, innderFieldSet, inputIdentifier) => {
        
    //     const updatedFormElement = updateObject(this.setState.quoteForm[fieldSet][inputIdentifier], {
    //         value: event.target.value,
    //         valid: checkValidity(event.target.value, this.state.validation),
    //         touched: true
    //     });
    //     const updatedOrderForm = updateObject(this.state.quoteForm, {
    //         [inputIdentifier]: updatedFormElement
    //     });
        
    //     let formIsValid = true;
    //     for (let inputIdentifier in updatedOrderForm) {
    //         formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    //     }
    //     this.setState({quoteForm: updatedOrderForm, formIsValid: formIsValid});
    // }

    formElement = (elmForm) => {
        return (<Input 
                key={elmForm.id}
                elementType={elmForm.config.elementType}
                elementConfig={elmForm.config.elementConfig}
                value={elmForm.config.value}
                invalid={!elmForm.config.valid}
                shouldValidate={elmForm.config.validation}
                touched={elmForm.config.touched}
                changed={(event) => this.inputChangedHandler(event, elmForm.id)} />
            );
    }

    quoteHandler = () => {
        console.log('ok');
    }

    render(){
        const formEleArray = [];
        for (let key in this.state.quoteForm) {
            formEleArray.push({
                id: key,
                fields: this.state.quoteForm[key]
            });
        }
        console.log(formEleArray, 'formElePolicyArray');
        
        let form = null;
        // let form = (
        //     <form onSubmit={this.quoteHandler}>
        //         {formEleArray.map((elmForm) => {
        //             // const policy = elmForm.id;
        //             // console.log(policy, 'key');
        //             // console.log(elmForm.config, 'config');
        //             return this.formElement(elmForm);
        //         })}
        //         <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
        //     </form>
        // );
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="Box">
                        <div className="top-bar">
                            <div className="caption">
                                <h2>Get a Insurance Quote</h2>
                            </div>
                            <div className="right_info">
                                <span>?</span>
                            </div>
                        </div>  
                    </div>
                    <div className="content mt-5 mb-5 row">
                        <div className="col-md-12">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.accessToken !== null
    };
};

export default connect( mapStateToProps)( Insurance );