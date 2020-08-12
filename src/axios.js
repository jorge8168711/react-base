import axios from 'axios';

const ax = axios.create({ baseURL: '' });
ax.interceptors.request.use(
  (request) => {
    const updatedReq = { ...request };
    /*
    const session = JSON.parse(localStorage.getItem('session'));

    if (session && request.url.indexOf('auth') === -1) {
      updatedReq.headers.Authorization = `Bearer ${session.token}`;
    }
    */
    return updatedReq;
  },
  (error) => Promise.reject(error),
);

export default ax;
