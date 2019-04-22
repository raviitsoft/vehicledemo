import { 
    QUOTE_START, 
    UPDATE_ACTIVE_STEP,
    GET_QUOTE_DEFUALT_FORM_VAL,
    UPDATE_QUOTE_FORM_VALUE,
    UPDATE_QUOTE_INNER_FORM_VALUE,
    GET_QUOTE_RESULTS
} from '../actions/QuoteActions';
import { updateObject } from '../utility';


const initialState = {
    quoteForm: {},
    activeStep: 0,
    appData: {},
    error: null,
    message: null,
    loading: true,
};

const quoteStart = ( state, action ) => {
    return updateObject( state, { 
        error: action.error, 
        loading: true 
    });
};
const getActiveStep = ( state, action ) => {
    return updateObject( state, { 
        activeStep: action.activeStep, 
        loading: false 
    });
};

const getQuoteFormVals = ( state, action ) => {
    return updateObject( state, { 
        quoteForm : action.quoteForm, 
        loading: false 
    });
};

const getUpdateFieldValue = (state, action) => {
    return updateObject( state, { 
        quoteForm : action.quoteForm, 
        loading: false 
    });
}

const getQuoteData = (state, action) => {
    return updateObject( state, { 
        appData : action.appData, 
        loading: false 
    });
}

export const QuoteReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case QUOTE_START: return quoteStart(state, action);
        case UPDATE_ACTIVE_STEP: return getActiveStep(state, action);
        case GET_QUOTE_DEFUALT_FORM_VAL: return getQuoteFormVals(state, action);
        case UPDATE_QUOTE_FORM_VALUE: return getUpdateFieldValue(state, action);
        case UPDATE_QUOTE_INNER_FORM_VALUE: return getUpdateFieldValue(state, action);
        case GET_QUOTE_RESULTS: return getQuoteData(state, action);
        default:
            return state;
    }
};
