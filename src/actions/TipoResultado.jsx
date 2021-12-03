import HttpClient from '../services/HttpClient';

export const obtenerTipoResultado= () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/TipoResultado').then(response => {
            resolve(response);
        })
    })
}