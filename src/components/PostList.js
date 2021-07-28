import { useEffect, useState } from "react";
import CardPost from "./CardPost";

const PostList = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchAllPost();
    }, [])

    const fetchAllPost = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPosts(data.slice(0, 4))
        })
        .catch(error => console.log(error))
    }

    const postList = posts.map(post => (

        <div className='col-md-3 mt-2'>  
            <CardPost post = {post} />
        </div>
        
    ))

    const handleClick = () => {
        const newCount = props.count + 1;
        props.setCount(newCount)
    }

    return (
        <div>
            <button onClick={handleClick}>compteur</button>
            <h1>Post List Composant</h1>
            <div className='container'>
                <div className='row'>
                    {postList}
                </div>
            </div>
        </div>
    );

    

}

export default PostList