import HttpClient from '../services/HttpClient';

export const registrarMedico = med => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/Medico/Crear', med).then(response => {
            resolve(response);
        })
    })
}

export const obtenerMedico = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Medico').then(response => {
            resolve(response);
        })
    })
}

export const deleteMedico= (val) => {
    return new Promise((resolve, reject) => {
        HttpClient.delete('/Medico/{'+ val+'}').then(response => {
            resolve(response);
        })
    })
}