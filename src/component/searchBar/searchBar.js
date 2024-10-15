import React, { useContext } from 'react'
import './searchBar.css'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import { SearchValueContext } from '../../provider/SearchValueProvider';

function SearchBar() {

    const location = useLocation();
    const { pathname } = location;

    const { searchValue, setSearchValue } = useContext(SearchValueContext)

    const searchClass = classNames("search_bar_container", {
        "active": pathname === "/search"
    })

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className={searchClass} >
            <svg width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6545 25.0307C27.1921 23.4622 28.1402 21.3137 28.1402 18.9437C28.1402 14.1412 24.2471 10.248 19.4446 10.248C14.6421 10.248 10.7489 14.1412 10.7489 18.9437C10.7489 23.7462 14.6421 27.6394 19.4446 27.6394C21.8771 27.6394 24.0763 26.6405 25.6545 25.0307ZM25.6545 25.0307L30.7489 30.248" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" />
            </svg>
            <input placeholder='Search' onChange={handleSearch} />
        </div>
    )
}

export default SearchBar