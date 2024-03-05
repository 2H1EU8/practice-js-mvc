import axios from 'axios';

const host = 'https://json-server-0tdv.onrender.com/';

export default axios.create({
  baseURL: host,
});
