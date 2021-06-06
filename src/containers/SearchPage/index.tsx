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

const GET_POKEMONS_BY_NAME = gql`
  query pokemon($id: String, $name: String){
    pokemon(id: $id, name: $name){
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
    }
  }
`

const SearchPage = () => {
  const [text, setText] = useState('')
  const { data: initialData } = useQuery(GET_POKEMONS_BY_NUMBER, {
    variables: {
      first: 151,
    }
  })

  const { data: searchData } = useQuery(GET_POKEMONS_BY_NAME, {
    variables: {
      name: text,
    }
  })

  const isSearcMode = text !== ''
  let dataToShow = []
  if (isSearcMode) {
    if(searchData?.pokemon) {
      dataToShow = [searchData?.pokemon]
    }
  } else {
    dataToShow = initialData?.pokemons
  }

  return (
    <div id="search-page">
      <TextInput
        value={text}
        onChange={(e) => { setText(e?.target?.value) }}
      />
      <List data={dataToShow}></List>
    </div>
  )
}

export default SearchPage