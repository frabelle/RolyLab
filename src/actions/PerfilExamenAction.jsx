import HttpClient from '../services/HttpClient';

export const registrarPerfilExamen = perfil => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/PerfilExamen/Crear', perfil).then(response => {
            resolve(response);
        })
    })
}

export const obtenerPerfilExamen = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/PerfilExamen').then(response => {
            resolve(response);
        })
    })
}
export const deletePerfilExamen = (val) => {
    return new Promise((resolve, reject) => {
        HttpClient.delete('/PerfilExamen/{'+ val+'}').then(response => {
            resolve(response);
        })
    })
}