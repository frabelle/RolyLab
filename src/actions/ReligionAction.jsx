import HttpClient from '../services/HttpClient';

export const registrarReligion = religion => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/Religion/Crear', religion).then(response => {
            resolve(response);
        })
    })
}

export const obtenerReligion = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Religion').then(response => {
            resolve(response);
        })
    })
}