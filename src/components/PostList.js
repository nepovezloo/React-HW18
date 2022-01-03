import { useSelector } from "react-redux";
import AddPost from "./AddPost";
import PostItem from "./PostItem";

export default function PostList() {

    const posts = useSelector((state) => state.posts);

    return (
        <div>
            <AddPost />
            <div>
                {posts.map((post, index) => (
                    <PostItem key={index} {...post} />
                ))}
            </div>
        </div>
    );
}