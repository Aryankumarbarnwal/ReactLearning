import React, { useEffect, useState } from 'react'
import { Container,PostCard } from '../components'
import appwriteServices from '../appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteServices.getPost([]).then((posts) =>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div  className='w-full py-8'>
        <Container>
            <div  className='flex flex-wrap'>
                {posts.map((post) => (
                    <div>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts