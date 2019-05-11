import axios from 'axios';

export const register = newUser => {
    return axios
        .post('users/register', {
            user_name: newUser.user_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            console.log("Registered")
        })
        .catch( err => {
            console.log("err")
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data);
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })
}