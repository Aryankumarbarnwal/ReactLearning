import React, { useEffect, useState } from 'react';
import AppwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        AppwriteService.getPosts().then((posts) => {
            console.log('Posts data from Appwrite:', posts);
            if (posts) {
                setPosts(posts.documents || []); // Safeguard against undefined documents
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => {
                        console.log('Rendering post:', post); // Debug each post
                        return (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard title={post.title} content={post.content} />
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default Home;
