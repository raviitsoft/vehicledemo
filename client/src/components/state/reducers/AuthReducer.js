import { 
    AUTH_START, 
    GET_EXCHANGE_CODE, 
    GET_VEHICLES,
    GET_VEHICLES_DETAILS,
    AUTH_FAIL,
    AUTH_LOGOUT
} from '../actions/AuthActions';
import { updateObject } from '../utility';

const initialState = {
    vehicles: {},
    vehicleData:{},
    requestType: null,
    accessToken: null,
    error: null,
    message: null,
    loading: true,
    authRedirectPath: '/'
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: action.error, loading: true } );
};


const getExchangeCode = (state, action) => {
    return updateObject( state, { 
        accessToken: action.accessToken,
        error: null,
        loading: true
    } );
};

const getVehiclesData = (state, action) => {
    return updateObject( state, { 
        vehicles: action.vehicles,
        error: null,
        loading: false
    } );
};

const getVehicleDetails = (state, action) => {
    return updateObject( state, { 
        vehicleData: action.vehicleData,
        requestType: action.requestType,
        error: null,
        loading: false
    } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


const authLogout = (state, action) => {
    return updateObject(state, { 
        error: action.error,
        vehicles: {},
        accessToken: null,
     });
};

// const setAuthRedirectPath = (state, action) => {
//     return updateObject(state, { authRedirectPath: action.path });
// };

export const AuthReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case AUTH_START: return authStart(state, action);
        case GET_EXCHANGE_CODE: return getExchangeCode(state, action);
        case GET_VEHICLES: return getVehiclesData(state, action);
        case GET_VEHICLES_DETAILS: return getVehicleDetails(state, action);
        case AUTH_FAIL: return authFail(state, action);
        case AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
};
