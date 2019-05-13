import axios from 'axios';

export const  getComments = (id) => {
    return axios
        .get('/comments/'+id)
        .then(res => {
            return res
        })
}

export const submitComment = (commentData) => {
    return axios
        .post('/comments/', {
            question_id: commentData.question_id,
            answer_id: commentData.answer_id,
            comment: commentData.comment
        })
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

}