import React from 'react'

const StatItem = ({ matrix, value = 1 }) => {
  const gaudgeWidth = (value/180)*100
  return (
    <div className="state-item flex flex-row align-center">
      <div className="matrix">{matrix}</div>
      <div className="value">{value}</div>
      <div className="bar">
        <div className="gaudge" style={{ width: gaudgeWidth+'%' }}/>
      </div>
    </div>
  )
}

const ListItem = () => {
  return (
    <div className="list-item flex flex-row grass-color">
      <div className="image">
        <img src="https://img.pokemondb.net/artwork/venusaur-mega.jpg"/>
      </div>
      <div className="detail flexx flex-column">
        <div className="basic-info flex flex-row">
          <div className="number">#003</div>
          <div className="name">Venusaur</div>
          <div className="type-wrapper flex flex-row">
            <div className="type grass-color">GRASS</div>
            <div className="type poison-color">POISION</div>
          </div>
        </div>
        <div className="state-wrapper flex flex-row">
          <div className="state-column flex flex-column">
            <StatItem matrix="HP" value={80}/>
            <StatItem matrix="Attack" value={100}/>
            <StatItem matrix="Defense" value={123}/>
          </div>
          <div className="state-column flex flex-column">
            <StatItem matrix="Sp. Atk" value={122}/>
            <StatItem matrix="Sp. Def" value={120}/>
            <StatItem matrix="Speed" value={80}/>
          </div>
          <div className="sum-state-column flex flex-column justify-center">
            <div className="matrix">Total</div>
            <div className="value">625</div>
          </div>
        </div>
        <div>Evolutions</div>
      </div>
    </div>
  )
}

export default ListItem