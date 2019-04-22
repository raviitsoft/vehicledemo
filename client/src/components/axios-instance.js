import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.clearcoverpartner.com/api/v1',
    headers: {        
        'Content-Type': 'application/json',
        'Clearcover-Partner-Env-Token': 'ffcec461-8961-4df0-862f-9e24eef80a4d',
        'Clearcover-Partner-Authorization-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6Ijg5ZDQyMDI3LWFmYTctNDM4OS1iOWQwLWJmYmQ1YThjYWU1OSJ9.lflXX9J3kHWQ666nLi22vDKs9j5NPYWD4J3zucUA4DA',
        'Access-Control-Allow-Origin': '*',
    }
});

export default instance;