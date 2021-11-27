import HttpClient from '../services/HttpClient';

export const obtenerExamen = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Examen').then(response => {
            resolve(response);
        })
    })
}