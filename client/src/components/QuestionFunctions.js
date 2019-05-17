import axios from 'axios';

export const askQuestion = question => {
    return axios
        .post('/questions', {
            title: question.title,
            description: question.description,
            categories: question.categories,
        })
        .then(res => {
            return res;
        })
        .catch( err => {
            return err
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

export const answer = (answer) => {
    return axios
        .post('/answer', {
            answer: answer.answer
        })
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

}