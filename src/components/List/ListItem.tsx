import React from 'react'

const ListItem = () => {
  return (
    <div className="list-item flex flex-row grass-color">
      <div className="image">
        <img src="https://img.pokemondb.net/artwork/bulbasaur.jpg"/>
      </div>
      <div className="detail flexx flex-column">
        <div className="basic-info flex flex-row">
          <div className="number">#0001</div>
          <div className="name">Bulbasaur</div>
          <div className="type-wrapper flex flex-row">
            <div className="type grass-color">GRASS</div>
            <div className="type poison-color">POISION</div>
          </div>
        </div>
        <div>Stats</div>
        <div>Evolutions</div>
      </div>
    </div>
  )
}

export default ListItem