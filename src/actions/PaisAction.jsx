import HttpClient from '../services/HttpClient';

export const obtenerPais = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Pais').then(response => {
            resolve(response);
        })
    })
}