import {React, useState, useEffect }from 'react';
import { Link as a } from 'react-router-dom';

function Pagination(props) {
    const currentPage = parseInt(props.page);
    const total = props.total;

    const [pages, setPages] = useState([]);

    useEffect(() => {
        const nbPages = total / 10;
        let PaginationLinks = [];

        for (let i = 1; i <= nbPages; i++) {
            PaginationLinks.push(i);
        }

        setPages(PaginationLinks);

        for (let index = 0; index < PaginationLinks.length; index++) {
            const element = PaginationLinks[index];
            if(element === currentPage) {
                console.log(`${element} === ${currentPage}`)
            } else {
                console.log(`${element} !== ${currentPage}`)
            }
        }
    }, [])

    // countPages = () => {

    // }

    return (
        <div className='pagination-container'>
            {pages.length > 0 ?
                pages.map((page) => 
                <>
                {page === currentPage ?
                    <a href={`?page=${page}`}><span className='pagination-link current' key={page}>{page}</span></a>
                    :
                    <a href={`?page=${page}`}><span className='pagination-link' key={page}>{page}</span></a>
                }
                </>
                )
            : ""}
        </div>
    );
}

export default Pagination;