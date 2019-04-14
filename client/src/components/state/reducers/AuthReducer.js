import { 
    AUTH_START, 
    GET_EXCHANGE_CODE, 
    GET_VEHICLES,
    GET_VEHICLES_DETAILS,
    AUTH_FAIL,
    GET_VEHICLES_INFO,
    GET_VEHICLES_LOC,
    GET_VEHICLES_VIN,
    GET_VEHICLES_ODOMETER,
    AUTH_LOGOUT
} from '../actions/AuthActions';
import { updateObject } from '../utility';

const initialState = {
    vehicles:{},
    vehicleInfo: {
        isLoading: true,
        info: {}
    },
    vehicleLoc: {
        isLoading: true,
        loc: {}
    },
    vehicleVin: {
        isLoading: true,
        vin: {}
    },
    vehicleObometer: {
        isLoading: true,
        odometer: {}
    },
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

export const getVehicleInfo = (state, action) => {
    return updateObject( state, { 
        vehicleInfo:{
            isLoading: false,
            info: action.info
        },
        error: null,
        loading: false
    } );
};

export const getVehicleLoc = (state, action) => {
    return updateObject( state, { 
        vehicleLoc:{
            isLoading: false,
            location: action.location
        },
        loading: false
    } );
};
export const getVehicleVin = (state, action) => {
    return updateObject( state, { 
        vehicleVin:{
            isLoading: false,
            vin: action.vin
        },
        loading: false
    } );
};
export const getVehicleOdometer = (state, action) => {
    return updateObject( state, { 
        vehicleObometer:{
            isLoading: false,
            odometer: action.odometer
        },
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
        case GET_VEHICLES_LOC: return getVehicleLoc(state, action);
        case GET_VEHICLES_INFO: return getVehicleInfo(state, action);
        case GET_VEHICLES_VIN: return getVehicleVin(state, action);
        case GET_VEHICLES_ODOMETER: return getVehicleOdometer(state, action);
        case AUTH_FAIL: return authFail(state, action);
        case AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
};
