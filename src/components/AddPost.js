import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/action';

const AUTHORS = [
    {
        name: "Chewbacca",
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5bkZPNJh9kppNuqINVn1OR4gMDUj5DVBnA&usqp=CAU',
        nickname: "@dart_vader",
    },

    {
        name: "Anakin skywalker",
        photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
        nickname: "@dart_vader",
    },

    {
        name: "Yoda",
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpR0cq5xmtj3wivAqTl7adSPDI4ZPau2k2A&usqp=CAU',
        nickname: "@dart_vader",
    }
]

export default function AddPost() {
    const [author, setAuthor] = useState("Chewbacca");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");


    const currentDate = () => {
        let date = new Date();
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = date.getFullYear();
        date = dd + '.' + mm + '.' + yyyy;
        return date;
    }

    const dispatch = useDispatch();

    const onCreatePost = (event) => {
        event.preventDefault();
        const date = currentDate();
        const likes = 0, comments = 0, reposts = 0;
        const selectedAuthor = AUTHORS.find((item) => item.name === author);
        dispatch(addPost({
            name: selectedAuthor.name,
            photo: selectedAuthor.photo,
            nickname: selectedAuthor.nickname,
            date, content, image, likes, comments, reposts
        }));
        setAuthor("Chewbacca");
        setContent("");
        setImage("");
    };

    return (
        <form className="create-post-form" onSubmit={onCreatePost}>
            <select className="create-post-select" onChange={(e) => setAuthor(e.target.value)}>
                {AUTHORS.map((item, index) => (
                    <option value={item.name} key={index}>{item.name}</option>
                ))}
            </select>

            <input
                className="create-post-input"
                type="text"
                placeholder="write a text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <input
                className="create-post-input"
                type="text"
                placeholder="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <button
                className="create-post-button"
                type="submit"
                onClick={onCreatePost}>
                Create
            </button>
        </form>
    );
}