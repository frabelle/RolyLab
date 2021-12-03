import HttpClient from '../services/HttpClient';

export const obtenerSucursal= () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Sucursales').then(response => {
            resolve(response);
        })
    })
}