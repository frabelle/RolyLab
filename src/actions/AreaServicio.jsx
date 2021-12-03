import HttpClient from '../services/HttpClient';

export const obtenerAreaServicio = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/AreaServicios').then(response => {
            resolve(response);
        })
    })
}