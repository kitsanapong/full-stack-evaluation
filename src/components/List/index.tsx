import React from 'react'

import ListItem from './ListItem';

import './style.css'

const List = ({ data = [] }) => {
  return (
    <div className="list-wrapper flex flex-column">
      {data?.length === 0? (
        <div>Pokemon not found</div>
      ) : (
        data?.map((item) => {
          return (
            <ListItem
              key={item.id}
              pokemon={item}
            />
          )
        })
      )}
    </div>
  )
}

export default List