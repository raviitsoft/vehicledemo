import axios from 'axios';

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const GET_EXCHANGE_CODE = 'GET_EXCHANGE_CODE';
export const GET_VEHICLES = 'GET_VEHICLES';
export const GET_VEHICLES_DETAILS = 'GET_VEHICLES_DETAILS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';
export const SET_MESSAGE = 'SET_MESSAGE';

export const authStart = () => {
    return {
        type: AUTH_START
    };
};

export const exchangeCode = (accessToken) => {
    return {
        type: GET_EXCHANGE_CODE,
        accessToken: accessToken
    };
};

export const getVehicles = (vehicles) => {
    return {
        type: GET_VEHICLES,
        vehicles: vehicles
    };
};

export const getVehicleDetails = (data, type) => {
    return {
        type: GET_VEHICLES_DETAILS,
        vehicleData: data,
        requestType: type
    };
};

export const getExchangeCode = (code) => {
    return dispatch => {
        dispatch(authStart());        
        axios.get(`${process.env.REACT_APP_SERVER}/callback?code=${code}`).then(res => {
            console.log(res.data, 'dd')
            localStorage.setItem('accessToken', res.data.accessToken);
            dispatch(exchangeCode(res.data.accessToken));   
        });
    };
}

export const getVehiclesData = (accessToken) => {
    return dispatch => {
        dispatch(authStart());        
        const authData = {
            accessToken: accessToken
        };
        axios.post(`${process.env.REACT_APP_SERVER}/vehicles`, authData).then(res => {
            const vehicleIds = res.data.vehicles;
            dispatch(getVehicles(vehicleIds));  
        });
    };
}

export const getVehiclesDetails = (vehicleId,  requestType, accessToken) => {
    return dispatch => {
        dispatch(authStart());        
        const authData = {
            vehicleId: vehicleId,
            requestType: requestType,
            accessToken: accessToken
        };
        axios.post(`${process.env.REACT_APP_SERVER}/request`, authData).then(res => {
            console.log(res.data);
            dispatch(getVehicleDetails(res.data, requestType));
        });
    };
}

export const logoutApi = (accessToken, vehicles) => {
    return dispatch => {
        dispatch(authStart());        
        const authData = {
            accessToken: accessToken,
            vehicles: vehicles
        };
        axios.post(`${process.env.REACT_APP_SERVER}/logout`, authData).then(res => {
            dispatch(logout());  
        });
    };
}

export const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        error: error
    };
};

export const setMessage = (message) => {
    return {
        type: SET_MESSAGE,
        message: message
    };
};

export const logout = () => {
    localStorage.removeItem('accessToken');
    return {
        type: AUTH_LOGOUT,
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const authCheckState = () => {
    return dispatch => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken && accessToken !=='undefined') {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expiration'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(exchangeCode(accessToken));
                dispatch(getVehiclesData(accessToken));
                //dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: SET_AUTH_REDIRECT_PATH,
        path: path
    };
};



