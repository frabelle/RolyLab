import HttpClient from '../services/HttpClient';

export const obtenerUnidadMedidas= () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/UnidadMedidas').then(response => {
            resolve(response);
        })
    })
}