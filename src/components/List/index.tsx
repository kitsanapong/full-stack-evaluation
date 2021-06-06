import React from 'react'

import ListItem from './ListItem';

import './style.css'

const List = ({ data = [] }) => {
  return (
    <div className="list-wrapper flex flex-column">
      {data.map((item) => {
        return (
          <ListItem
            key={item.id}
            item={item}
          />
        )
      })}
    </div>
  )
}

export default List