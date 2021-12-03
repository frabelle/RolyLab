import HttpClient from '../services/HttpClient';

export const obtenerTipoMuestra = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/TipoMuestras').then(response => {
            resolve(response);
        })
    })
}