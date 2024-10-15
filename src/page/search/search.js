import React, { useContext } from 'react'
import './search.css';
import RecentSearch from './searchComponents/recentSearch';
import BrowseSection from './searchComponents/browseSection';
import { SearchValueContext } from '../../provider/SearchValueProvider';
import SearchResult from './searchComponents/searchResult';

function Search() {

  const { searchValue } = useContext(SearchValueContext)

  return (
    <div className='search_container'>
      {
        searchValue === "" ?
          <>
            <RecentSearch />
            <BrowseSection />
          </>
          : <SearchResult/>
      }
    </div>
  )
}

export default Search