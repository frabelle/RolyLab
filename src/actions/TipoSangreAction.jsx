import HttpClient from '../services/HttpClient';

export const obtenerTipoSangre = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/TipoSangre').then(response => {
            resolve(response);
        })
    })
}