import HttpClient from '../services/HttpClient';

export const registrarPerfilExamen = perfil => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/PerfilExamen/Crear', perfil).then(response => {
            resolve(response);
        })
    })
}