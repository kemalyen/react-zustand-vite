import React from 'react'
import { useParams } from 'react-router-dom';

const BookPage = () => {
    let { id } = useParams();
    return (
        <div>BookPage</div>
    )
}


export default BookPage