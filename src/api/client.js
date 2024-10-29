import axios from 'axios';

const ApiClient = {
    _axiosAdapter: axios.create({
        baseURL: `https://live-server-104033.wati.io/api/v1`,
        headers: {
            'x-xss-protection': '1; mode=block',
            'referrer-policy': 'same-origin',
            'Strict-Transport-Security': 'max-age=31536000; includesSubDomains; preload',
            'X-Frame-Options': 'SAMEORIGIN',
            'Content-security-Policy': 'default-src \'none\'; img-src \'self\'; script-src \'self\'; style-src \'self\'; object-src \'none\'; frame-ancestors \'none\'',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNWJlODY0OS1hMTQ0LTRiNDgtOWQ4NS1jOWVjN2I4NTlmOWUiLCJ1bmlxdWVfbmFtZSI6IlNhbGVzQHJpZGdlaG9tZXMuaW4iLCJuYW1laWQiOiJTYWxlc0ByaWRnZWhvbWVzLmluIiwiZW1haWwiOiJTYWxlc0ByaWRnZWhvbWVzLmluIiwiYXV0aF90aW1lIjoiMDMvMTgvMjAyMyAwMzo0MTo1MSIsImRiX25hbWUiOiIxMDQwMzMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6IkNsYXJlX0FJIiwiYXVkIjoiQ2xhcmVfQUkifQ.G3ix9BMZl6S3z45sJlf0EMLdzahrH10UXfbAujwTo8s`
        },
    }),
    _post(endpoint, config={}){
        return this._axiosAdapter({
            method: 'POST',
            url: endpoint,
            ...config,
        })
        .then((resp) => {
            console.warn(`[ApiClient.post]: ${endpoint} response => ${resp}`);
            return resp;
        })
        .catch((err) => console.log(err));
    },
};

export default ApiClient;