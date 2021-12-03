import HttpClient from '../services/HttpClient';

export const obtenerEstadoCivil= () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/EstadoCivil').then(response => {
            resolve(response);
        })
    })
}