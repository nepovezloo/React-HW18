import React from "react";
import '../Post.css'

const PostItem = (props) => {

    return (
    <div>
        <div className= 'window'>
            <img className= 'icon' src={props.photo}/>
            <div className= 'header'>
                <p className= 'name'>{props.name}</p>
                <p className= 'nickname'>{props.nickname}</p>
                <p className= 'date'>{props.date}</p>
                <p className='content'><h2>{props.content}</h2></p>
            </div>
            <img className= 'content_image' src= {props.image}></img>
        </div>
    </div>
    );
}

export default PostItem;