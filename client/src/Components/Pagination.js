import {React, useState, useEffect }from 'react';

function Pagination(props) {
    const currentPage = parseInt(props.page);
    const total = props.total;
    let nbPages = total / 10;

    const [pages, setPages] = useState([]);

    useEffect(() => {
        let PaginationLinks = [];

        //Si le nbPages est un nombre décimal, arrondir au nombre au dessus
        if(Number.isInteger(nbPages) === false) {
            nbPages = Math.ceil(nbPages);
            console.log(nbPages);
        }

        for (let i = 1; i <= nbPages; i++) {
            PaginationLinks.push(i);
        }

        setPages(PaginationLinks);
    }, [])

    return (
        <>
            { currentPage > 1 ?
                <div className='previous-page'>
                    <a href={`?page=${currentPage - 1}`}><img alt='previous page' src='002-left.png'/></a>
                </div>
            :''}
            <div className='pagination-container'>
                {pages.length > 0 ?
                    pages.map((page) => 
                    <div key={page}>
                    {page === currentPage ?
                        <a href={`?page=${page}`} key={page}><span className='pagination-link current'>{page}</span></a>
                        :
                        <a href={`?page=${page}`} key={page}><span className='pagination-link'>{page}</span></a>
                    }
                    </div>
                    )
                : ""}
            </div>
            { currentPage < pages.length ?
                <div className='next-page'>
                    <a href={`?page=${currentPage + 1}`}><img alt='next page' src='001-right.png'/></a>
                </div>
            :''}
        </>
    );
}

export default Pagination;