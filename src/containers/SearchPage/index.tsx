import React from 'react'

import './style.css'
import TextInput from '../../components/TextInput/index';

const SearchPage = () => {

  return (
    <div id="search-page" claaName="flex flex-clumn">
      <TextInput
        value="Search Pokemon"
        onChange={() => {}}
      />
      <div>List</div>
    </div>
  )
}

export default SearchPage