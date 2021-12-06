import HttpClient from '../services/HttpClient';

export const registrarProfesion = profesion => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/Profesion/Crear', profesion).then(response => {
            resolve(response);
        })
    })
}
export const obtenerProfesiones= () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Profesion').then(response => {
            resolve(response);
        })
    })
}

export const deleteProfesion = (val) => {
    return new Promise((resolve, reject) => {
        HttpClient.delete('/Profesion/{'+ val+'}').then(response => {
            resolve(response);
        })
    })
}