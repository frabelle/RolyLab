import HttpClient from '../services/HttpClient';

export const obtenerExamen = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Examen').then(response => {
            resolve(response);
        })
    })
}

export const registrarExamen = exam => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/Examen/Crear', exam).then(response => {
            resolve(response);
        })
    })
}