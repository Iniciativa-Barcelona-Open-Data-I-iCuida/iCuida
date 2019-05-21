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

export const certainQuestions = (tag) => {
    return axios
        .get('questions/certain-questions/'+tag)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err
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

export const questionLike = (id) => {
    return axios
        .put('/questions/like/'+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export const questionDislike = (id) => {
    return axios
        .put('/questions/dislike/'+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export const questionViews = (id) => {
    return axios
        .put('/questions/views/'+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}