import HttpClient from '../services/HttpClient';

export const obtenerNacionalidad = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Nacionalidad').then(response => {
            resolve(response);
        })
    })
}

export const registrarNacionalidad = nacionalidad => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/Nacionalidad/Crear', nacionalidad).then(response => {
            resolve(response);
        })
    })
}