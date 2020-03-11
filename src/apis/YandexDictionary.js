import axios from 'axios';

export default axios.create({
    baseURL:'https://dictionary.yandex.net/api/v1/dicservice.json'
})