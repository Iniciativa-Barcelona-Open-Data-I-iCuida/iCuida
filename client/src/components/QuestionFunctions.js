import axios from 'axios';

export const askQuestion = newQuestion => {
    return axios
        .post('questions/question', {
            question: newQuestion.question,
        })
        .then(res => {
            console.log("Question submitted")
        })
        .catch( err => {
            console.log(err)
        })
}

export const questions = () => {
    return axios
        .get('/questions')
        .then(res => {
            return(res);
        })
        .catch(err => {
            return(err);
        })
}

export const question = (id) => {
    return axios
        .get('/questions/'+id)
        .then(res => {
            return(res);
        })
        .catch(err => {
            return(err);
        })
}