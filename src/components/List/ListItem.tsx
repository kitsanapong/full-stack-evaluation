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

type Pokemon = {
  "number": "string",
  "name": "string",
  "image": "string",
  "weight": {
    "minimum": "string",
    "maximum": "string"
  },
  "height": {
    "minimum": "string",
    "maximum": "string"
  },
  "classification": "string",
  "types": [
    "string"
  ],
  "resistant": [
    "string"
  ],
  "attacks": {
    "fast": [
      {
        "name": "string",
        "type": "string",
        "damage": "number"
      }
    ],
    "special": [
      {
        "name": "string",
        "type": "string",
        "damage": "number"
      }
    ]
  },
  "weaknesses": [
    "string"
  ],
  "fleeRate": "number",
  "maxCP": "number",
  "evolutions": [
    {
      "number": "string",
      "name": "string",
      "weight": {
        "minimum": "string",
        "maximum": "string"
      },
      "height": {
        "minimum": "string",
        "maximum": "string"
      },
      "classification": "string",
      "types": [
        "string"
      ],
      "resistant": [
        "string"
      ],
      "attacks": {
        "fast": [
          {
            "name": "string",
            "type": "string",
            "damage": "number"
          }
        ],
        "special": [
          {
            "name": "string",
            "type": "string",
            "damage": "number"
          }
        ]
      },
      "weaknesses": [
        "string"
      ],
      "fleeRate": "number",
      "maxCP": "number",
      "evolutions": [
        {
          "number": "string",
          "name": "string",
          "weight": {
            "minimum": "string",
            "maximum": "string"
          },
          "height": {
            "minimum": "string",
            "maximum": "string"
          },
          "classification": "string",
          "types": [
            "string"
          ],
          "resistant": [
            "string"
          ],
          "attacks": {
            "fast": [
              {
                "name": "string",
                "type": "string",
                "damage": "number"
              }
            ],
            "special": [
              null
            ]
          }
        }
      ]
    }
  ]
}

type ListItemProps = { key: String; pokemon: Pokemon; }

const ListItem = ({ pokemon}: ListItemProps) => {
  console.log(pokemon)
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
        <div className="evolution-wrapper flex flex-row">
          <div className="name">Evolution</div>
          {pokemon?.evolutions?.map((evo) => {
            return (
              <div className="evolution">{evo?.name}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ListItem