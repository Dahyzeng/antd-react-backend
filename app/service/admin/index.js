import axios from 'axios';
export function queryList(params) {
    return axios.post('/api/admin/queryList', params)
        .then((resp) => {
            return resp.data;
        })
}