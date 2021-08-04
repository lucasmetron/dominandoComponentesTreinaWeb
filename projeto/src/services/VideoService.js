import { ApiService } from "./ApiService";

const endpoint = 'videos';

export const VideoService = {
    list() {
        return ApiService.get(endpoint);

    },

    input(newVideo) {
        console.log(newVideo)
        console.log(endpoint)
        return ApiService.post(endpoint, newVideo)
    }
}