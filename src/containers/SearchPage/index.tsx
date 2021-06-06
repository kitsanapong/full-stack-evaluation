import React, { useContext } from 'react'
import { gql, useQuery } from '@apollo/client';

import SearchText from '../../providers/searchText'
import TextInput from '../../components/TextInput/index';
import List from '../../components/List/index';

import './style.css'

const GET_POKEMONS_BY_NUMBER = gql`
  query pokemons($first: Int!){
    pokemons(first: $first){
      id
      number
      name
      types
      resistant
      weaknesses
      maxCP
      maxHP
      image
      evolutions{
        id
        name
      }
      attacks{
        fast{
          name,
          type,
          damage,
        }
        special{
          name,
          type,
          damage,
        }
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
  const {text, setText} = useContext(SearchText.Context)
  const { loading: initialLoading, data: initialData } = useQuery(GET_POKEMONS_BY_NUMBER, {
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
      {initialLoading? null : (
        <List data={dataToShow}></List>
      )}
    </div>
  )
}

export default SearchPage