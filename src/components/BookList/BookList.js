import React from 'react';
import { useGlobalContext } from '../../contaxt';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
    const { books, loading, resultTitle } = useGlobalContext()
    const bookswithcover = books.map((singlbook) => {
        return {
            ...singlbook,
            id: (singlbook.id).replace('/works/', ""),
            cover_img: singlbook.cover_id ? `https://covers.openlibrary.org/b/id/
            ${singlbook.cover_id}-L.jpg` : coverImg
        }

    })
    if (loading) return <Loading />;
    return (
        <section className='booklist'>
            <div className='container'>
                <div className='section-title'>
                    <h2> {resultTitle} </h2>
                </div>
                <div className='booklist-content grid'>
                    {
                        bookswithcover.slice(0, 30).map((item, index) => {
                            return (
                                <Book key={index} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BookList

