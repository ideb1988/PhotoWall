import axios from 'axios';

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment: comment,
        postId: postId
    }
}


// LOADING ALL PHOTOS
const loadPosts = (posts) => {
    return {
        type: 'LOAD_POST',
        posts: posts
    }
}

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('/photos')
            const photos = Object.values(res.data) || []

            return dispatch(loadPosts(photos));
        } catch (err) {
            console.error(err)
        }
    };
}

// ADDING A NEW PHOTO
const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post: post
    }
}

export const insertPost = (post) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('/photo',post);
            const newPhoto = res.data;
            return dispatch(addPost(newPhoto));
        } catch(err){
            console.error(err);
        }
    }
}

// DELETING A PHOTO
const deletePost = (id) => {
    return {
        type: 'REMOVE_POST',
        id: id
    }
}

export const removePost = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`/photo/${id}`)

            return dispatch(deletePost(id));
        } catch (err) {
            console.error(err);
        }
    }
};