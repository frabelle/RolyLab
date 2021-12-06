import HttpClient from '../services/HttpClient';

export const registrarPaciente = paciente => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/Paciente/Crear', paciente).then(response => {
            resolve(response);
        })
    })
}

export const obtenerPaciente= () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Paciente').then(response => {
            resolve(response);
        })
    })
}

export const deletePaciente= (val) => {
    return new Promise((resolve, reject) => {
        HttpClient.delete('/Paciente/{'+ val+'}').then(response => {
            resolve(response);
        })
    })
}