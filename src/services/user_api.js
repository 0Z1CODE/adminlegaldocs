import axios from "./../services/axios";

const users =() => {
    return axios.get("users" ).then(({data}) => (data));
}

export default { users};