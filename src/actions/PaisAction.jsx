import HttpClient from '../services/HttpClient';

export const obtenerPais = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Pais').then(response => {
            resolve(response);
        })
    })
}

export const registrarPais = pais => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/Pais/Crear', pais).then(response => {
            resolve(response);
        })
    })
}