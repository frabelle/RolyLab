import HttpClient from '../services/HttpClient';

export const obtenerIdentificacion = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Identificacion').then(response => {
            resolve(response);
        })
    })
}