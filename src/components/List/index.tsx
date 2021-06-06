import React from 'react'

import ListItem from './ListItem';

import './style.css'

const List = () => {
  return (
    <div className="list-wrapper flex flex-column">
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
    </div>
  )
}

export default List