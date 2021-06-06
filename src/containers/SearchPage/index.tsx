import React, { useState } from 'react'

import './style.css'
import TextInput from '../../components/TextInput/index';
import List from '../../components/List/index';

const SearchPage = () => {
  const [text, setText] = useState('')
  return (
    <div id="search-page" claaName="flex flex-clumn">
      <TextInput
        value={text}
        onChange={(e) => { setText(e?.target?.value) }}
      />
      <List></List>
    </div>
  )
}

export default SearchPage