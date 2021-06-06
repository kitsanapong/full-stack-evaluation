import React from 'react'

import ListItem from './ListItem';

import './style.css'

const List = ({ data = [] }) => {
  const maxHP = data.reduce((max, item) => {
    if(max < item.maxHP) return item.maxCP
    else return max
  }, 0)
  console.log(maxHP)
  return (
    <div className="list-wrapper flex flex-column">
      {data.map((item) => {
        return (
          <ListItem
            key={item.id}
            pokemon={item}
          />
        )
      })}
    </div>
  )
}

export default List