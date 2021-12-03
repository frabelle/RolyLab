import HttpClient from '../services/HttpClient';

export const registrarMedico = med => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/Medico/Crear', med).then(response => {
            resolve(response);
        })
    })
}