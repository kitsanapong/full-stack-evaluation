import React from 'react'

import './style.css'

type TextInputProps = {
  value: string,
  onChange: Function,
}

const TextInput = ({ value = '', onChange = () => {}} : TextInputProps) => {
  return (
    <div className="text-input">
      <input
        value={value}
        onChange={(e) => { onChange(e) }}
      />
    </div>
  )
}

export default TextInput