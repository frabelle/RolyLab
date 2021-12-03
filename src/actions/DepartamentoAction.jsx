import HttpClient from '../services/HttpClient';

export const obtenerDepartamento = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Departamento').then(response => {
            resolve(response);
        })
    })
}