import HttpClient from '../services/HttpClient';

export const registrarPaciente = paciente => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/Paciente/Crear', paciente).then(response => {
            resolve(response);
        })
    })
}