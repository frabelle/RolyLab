import HttpClient from '../services/HttpClient';

export const obtenerCategoriaExamenes = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/CategoriaExamenes').then(response => {
            resolve(response);
        })
    })
}

export const registrarCategoriaExamenes= nacionalidad => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/CategoriaExamenes/Crear', nacionalidad).then(response => {
            resolve(response);
        })
    })
}

export const deleteCategoriaExamenes= (val) => {
    return new Promise((resolve, reject) => {
        HttpClient.delete('/CategoriaExamenes/{'+ val+'}').then(response => {
            resolve(response);
        })
    })
}