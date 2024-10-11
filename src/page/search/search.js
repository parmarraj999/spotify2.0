import React from 'react'
import './search.css';
import RecentSearch from './recentSearch';
import BrowseSection from './browseSection';

function Search() {
  return (
    <div className='search_container'>
      <RecentSearch/>
      <BrowseSection/>
    </div>
  )
}

export default Search