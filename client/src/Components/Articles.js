import {React, useEffect, useState} from 'react';
import { useSearchParams} from 'react-router-dom';
import axios from 'axios';

import FindUser from './FindUser';
import Pagination from './Pagination';

function Articles() {
    // Recuperation du parametre dans l'URL
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page");

    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState(null);

    let skip = null;

    // Calcul de la valeur de skip
    if (page == 1) {
        skip = 0;
    } else {
        skip = `${page}0` - 10;
    }
    
    useEffect(() => {
        axios.get(`https://dummyjson.com/posts?skip=${skip}&limit=10`)
        .then(res => {
            setPosts(res.data.posts);
            setTotal(res.data.total)
        }).catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className='posts-container'>
                {posts.length > 0 ?
                    posts.map((post) => 
                        <div className='card' key={post.id}>
                            <div className='user-container'>
                                <FindUser id={ post.userId } />
                            </div>
                            <div className='card-title'>
                                <h4>{ post.title }</h4>
                            </div>
                            <div className='card-content'>
                                <p>{ post.body }</p>
                            </div>
                            <div className='card-infos-container'>
                                <span className='tags'>{post.tags.join(' | ')}</span>
                                <div className='likes'>
                                    <img src='like.png' alt='likes' />
                                    <span className='reactions'>{ post.reactions }</span>
                                </div>
                            </div>
                        </div>
                    )
                    :''}
            </div>
            {total?
                <div className='paginate'>
                    <Pagination page={ page } total={ total }/>
                </div>
            :''}
        </>
    );
}

export default Articles;