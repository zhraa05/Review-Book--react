import React, { useRef, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../contaxt';
import "./SearchForm.css";


const SearchForm = () => {
    const { setSearchTerm, setResultTitle } = useGlobalContext();
    const searchtext = useRef('')
    const Navigate = useNavigate()
    useEffect(() =>
        searchtext.current.focus(), [])
    const handelsubmint = (e) => {
        e.preventDefault()
        let tempsearchitem = searchtext.current.value.trim()
        if ((tempsearchitem.replace(/[^\w\s]/gi, "")).length === 0) {
            setResultTitle("the lost world");
        }
        else {
            setSearchTerm(searchtext.current.value);
        }

        Navigate("/book");

    }
    return (
        <div className='search-form'  >
            <div className='container'>
                <div className='search-form-content'>
                    <form className='search-form' onSubmit={handelsubmint}  >
                        <div className='search-form-elem flex flex-sb bg-white'>
                            <input type="text" className='form-control'
                                placeholder='The Lost World ...' ref={searchtext} />
                            <button type="submit" className='flex flex-c' onClick={handelsubmint} >
                                <FaSearch className='text-purple' size={32} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchForm
