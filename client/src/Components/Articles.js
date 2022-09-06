import {React, useEffect} from 'react';

import {useLocation, useSearchParams} from 'react-router-dom';
import axios from 'axios';

function Articles() {
    // Recuperation du parametre dans l'URL
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page");

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
            console.log(res.data.posts);
        }) 
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h1>Articles</h1>
        </div>
    );
}

export default Articles;