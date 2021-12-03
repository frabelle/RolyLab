import HttpClient from '../services/HttpClient';

export const obtenerSexos= () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Sexos').then(response => {
            resolve(response);
        })
    })
}