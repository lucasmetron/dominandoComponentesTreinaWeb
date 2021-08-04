const api = "http://localhost:3002/api/react-videos/";


export const ApiService = {
    get(endpoint) {
        return fetch(`${api}${endpoint}`)
            .then(res => res.json());
    },

    post(endpoint, nome, img, video) {
        return fetch(`${api}${endpoint}`, {
            method: 'PUT',

        })
            .then(res => res.json());
    }
}