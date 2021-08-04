const api = "http://localhost:3002/api/react-videos/";


export const ApiService = {
    get(endpoint) {
        return fetch(`${api}/${endpoint}`)
            .then(res => res.json());
    },

    post(endpoint, data) {

        return fetch(`${api}/${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(data)

        })
            .then(res => {
                console.log(res)
                return res.json()
            })

    }
}