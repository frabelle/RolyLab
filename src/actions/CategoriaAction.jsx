import HttpClient from '../services/HttpClient';

export const obtenerCategoriaExamenes = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/CategoriaExamenes').then(response => {
            resolve(response);
        })
    })
}