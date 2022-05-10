import { onSnapshot, query, collection, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Post from '../Components/Post'
import {db} from '../firebase'

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => setPosts(snapshot.docs))
    }, [db]);

    return (
        <div>

            {
                posts.map((post) => {
                    return (
                        <Post key={post.id} id={post.id} username={post.data().username} userImg={post.data().profileImg} img={post.data().image} caption={post.data().caption} />
                    )
                })
            }

        </div>
    )
}

export default Posts