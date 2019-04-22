import axios from '../../axios-instance';

export const QUOTE_START = 'QUOTE_START';
export const GET_QUOTE_DEFUALT_FORM_VAL = 'GET_QUOTE_DEFUALT_FORM_VAL';
export const GET_QUOTE_DEFUALT_INNER_FORM_VAL = 'GET_QUOTE_DEFUALT_INNER_FORM_VAL';
export const UPDATE_ACTIVE_STEP = 'UPDATE_ACTIVE_STEP'
export const UPDATE_QUOTE_FORM_VALUE = 'UPDATE_QUOTE_FORM_VALUE'
export const UPDATE_QUOTE_INNER_FORM_VALUE = 'UPDATE_QUOTE_INNER_FORM_VALUE'
export const GET_QUOTE_RESULTS = 'GET_QUOTE_RESULTS'


// const axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Clearcover-Partner-Env-Token": "ffcec461-8961-4df0-862f-9e24eef80a4d",
//         "Clearcover-Partner-Authorization-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6Ijg5ZDQyMDI3LWFmYTctNDM4OS1iOWQwLWJmYmQ1YThjYWU1OSJ9.lflXX9J3kHWQ666nLi22vDKs9j5NPYWD4J3zucUA4DA",
//     }
// };

export const quoteStart = () => {
    return {
        type: QUOTE_START
    };
};

export const updateActiveStep = (activeStep) => {
    return {
        type: UPDATE_ACTIVE_STEP,
        activeStep: activeStep
    }
};

export const getDefaultQuoteFormVal = (quoteForm) => {
    return {
        type: GET_QUOTE_DEFUALT_FORM_VAL,
        quoteForm: quoteForm
    }
}

export const getUpdateFieldValue = (quoteForm, key, field, value) => {
    return {
        type: UPDATE_QUOTE_FORM_VALUE,
        quoteForm: {
            ...quoteForm,
            [key]:[{
                ...quoteForm[key][0],
                [field]: value
            }]
        }
    }
}

export const getUpdateInnerFieldValue = (quoteForm, key, innerKey, field, value) => {
    return {
        type: UPDATE_QUOTE_INNER_FORM_VALUE,
        quoteForm: {
            ...quoteForm,
            [key]:[{
                ...quoteForm[key][0],
                [innerKey]: {
                    ...quoteForm[key][0][innerKey],
                    [field]: value
                }
            }]
        }
    }
}

export const getUpdateInToInFieldValue = (quoteForm, key, innerKey, inToinKey, field, value) => {
    return {
        type: UPDATE_QUOTE_INNER_FORM_VALUE,
        quoteForm: {
            ...quoteForm,
            [key]:[{
                ...quoteForm[key][0],
                [innerKey]: {
                    ...quoteForm[key][0][innerKey],
                    [inToinKey]: {
                        ...quoteForm[key][0][innerKey][inToinKey],
                        [field]: value
                    }
                }
            }]
        }
    }
}

export const getQuoteData = (appData) => {
    return {
        type: GET_QUOTE_RESULTS,
        appData: appData
    }
}


export const getQuoteApi = (quoteFormData) => {
    return dispatch => {
        dispatch(quoteStart());        
        axios.post('/quote', quoteFormData).then(res => {
            console.log(res.data, 'testing quote');
        }).catch((e) => {
            console.log(e, 'error quote');
        });
    };
}





