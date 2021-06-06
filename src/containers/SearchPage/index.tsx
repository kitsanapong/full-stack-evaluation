import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client';

import './style.css'
import TextInput from '../../components/TextInput/index';
import List from '../../components/List/index';

const GET_POKEMONS_BY_NUMBER = gql`
  query pokemons($first: Int!){
    pokemons(first: $first){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
      evolutions{
        id
        name
      }
    }
  }
`;

const SearchPage = () => {
  const [text, setText] = useState('')
  const { loading, error, data } = useQuery(GET_POKEMONS_BY_NUMBER, {
    variables: {
      first: 20,
    }
  })

  return (

    <div id="search-page">
      <TextInput
        value={text}
        onChange={(e) => { setText(e?.target?.value) }}
      />
      <List data={data?.pokemons}></List>
    </div>
  )
}

export default SearchPage