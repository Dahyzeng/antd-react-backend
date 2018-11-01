import axios from 'axios';
export function login(params) {
    return axios.post('/api/user/login', params)
            .then((resp) => {
                return resp.data;
            })
}