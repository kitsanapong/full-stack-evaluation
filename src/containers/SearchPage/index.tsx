import React, { useState } from 'react'

import './style.css'
import TextInput from '../../components/TextInput/index';

const SearchPage = () => {
  const [text, setText] = useState('')
  return (
    <div id="search-page" claaName="flex flex-clumn">
      <TextInput
        value={text}
        onChange={(e) => { setText(e?.target?.value) }}
      />
      <div>List</div>
    </div>
  )
}

export default SearchPage