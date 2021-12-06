import HttpClient from '../services/HttpClient';

export const registrarPerfil = perfil => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/Perfil/Crear', perfil).then(response => {
            resolve(response);
        })
    })
}

export const obtenerPerfiles= () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Perfil').then(response => {
            resolve(response);
        })
    })
}

export const deletePerfil= (val) => {
    return new Promise((resolve, reject) => {
        HttpClient.delete('/Perfil/{'+ val+'}').then(response => {
            resolve(response);
        })
    })
}