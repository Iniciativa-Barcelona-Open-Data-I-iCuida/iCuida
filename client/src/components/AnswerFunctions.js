import axios from 'axios';


export const getAnswers = (id) => {
    return axios
        .get('/answers/'+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export const submitAnswer = (answerData) => {
    return axios
        .post('/answers/:id', {
            answer: answerData.answer,
            question_id: answerData.question_id
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
}

export const answerLike = (id) => {
    return axios
        .put('/answers/like/'+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export const answerDislike = (id) => {
    return axios
        .put('/answers/dislike/'+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
