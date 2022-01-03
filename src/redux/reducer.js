import { ADD_ITEM } from "./action";

const Posts = [
        {
        name: "Anakin skywalker",
        photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
        nickname: "@dart_vader",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: 'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
        date: "26 февр.",
        likes: 13,
        comments: 1,
        reposts: 2,
    },

    {
        name: "Anakin skywalker",
        photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
        nickname: "@dart_vader",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: 'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
        date: "26 февр.",
        likes: 21,
        comments: 3,
        reposts: 5,
    },

    {
        name: "Anakin skywalker",
        photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
        nickname: "@dart_vader",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: 'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
        date: "26 февр.",
        likes: 6,
        comments: 0,
        reposts: 0,
    }
]

const initialState = {
    posts: Posts
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                posts: [action.payload, ...state.posts ]
            }
        default:
            return state;
    }
} 

export default reducer