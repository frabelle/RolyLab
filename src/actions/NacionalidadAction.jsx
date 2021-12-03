import HttpClient from '../services/HttpClient';

export const obtenerNacionalidad = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Nacionalidad').then(response => {
            resolve(response);
        })
    })
}