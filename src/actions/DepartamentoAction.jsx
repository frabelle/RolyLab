import HttpClient from '../services/HttpClient';

export const obtenerDepartamento = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Departamento').then(response => {
            resolve(response);
        })
    })
}

export const registrarDepartamento = dep => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/Departamento/Crear', dep).then(response => {
            resolve(response);
        })
    })
}


export const deleteDepartamento = (val) => {
    return new Promise((resolve, reject) => {
        HttpClient.delete('/Departamento/{'+ val+'}').then(response => {
            resolve(response);
        })
    })
}