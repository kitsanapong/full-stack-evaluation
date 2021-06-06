import React, { useContext } from 'react'
import searchText from '../../providers/searchText';
import ListItemProps from '../../types/ListItemProps';

type StatItemProps = {
  matrix: String,
  value: number,
  maxValue: number,
}

const StatItem = ({ matrix, value = 1, maxValue = 1 }: StatItemProps) => {
  const gaudgeWidth = (value/maxValue)*100
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

const ListItem = ({ pokemon}: ListItemProps) => {
  const { setText } = useContext(searchText.Context)
  const firstType = pokemon?.types?.[0]
  return (
    <div className={`list-item flex flex-row ${firstType?.toLocaleLowerCase()}-color`}>
      <div className="image">
        <img src={pokemon?.image}/>
      </div>
      <div className="detail flexx flex-column">
        <div className="basic-info flex flex-row">
          <div className="number">#{pokemon?.number}</div>
          <div className="name">{pokemon?.name}</div>
          <div className="type-wrapper flex flex-row">
            {pokemon?.types?.map((type) =>{
              return <div key={type} className={`type ${type?.toLocaleLowerCase()}-color`}>{type}</div>
            })}
          </div>
        </div>
        <div className="state-wrapper flex flex-row">
          <div className="state-column flex flex-column">
            <StatItem matrix="Max CP" value={parseInt(pokemon?.maxCP)} maxValue={3904}/>
            <StatItem matrix="Max HP" value={parseInt(pokemon?.maxHP)} maxValue={4144}/>
          </div>
        </div>
        <div className="type-counterpart-wrapper flex flex-row">
          <div className="name">Resistant</div>
          <div className="type-wrapper flex flex-row">
            {pokemon?.resistant?.map((type) => {
              return <div key={type} className={`type small ${type?.toLocaleLowerCase()}-color`}>{type}</div>
            })}
          </div>
        </div>
        <div className="type-counterpart-wrapper flex flex-row">
          <div className="name">Weaknesses</div>
          <div className="type-wrapper flex flex-row">
            {pokemon?.weaknesses?.map((type) => {
              return <div key={type} className={`type small ${type?.toLocaleLowerCase()}-color`}>{type}</div>
            })}
          </div>
        </div>
        <div className="evolution-wrapper flex flex-row">
          <div className="name">Evolution</div>
          {pokemon?.evolutions?.map((evo) => {
            return (
              <div
                className="evolution clickable"
                onClick={() => { setText(evo?.name) }}
              >{evo?.name}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ListItem