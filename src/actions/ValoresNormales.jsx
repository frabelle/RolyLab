import HttpClient from '../services/HttpClient';

export const registrarValoresNormales = val => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/ValoresNormales/Crear', val).then(response => {
            resolve(response);
        })
    })
}

export const obtenerValoresNormales= () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/ValoresNormales').then(response => {
            resolve(response);
        })
    })
}

export const deleteValores = (val) => {
    return new Promise((resolve, reject) => {
        HttpClient.delete('/ValoresNormales/{'+ val+'}').then(response => {
            resolve(response);
        })
    })
}