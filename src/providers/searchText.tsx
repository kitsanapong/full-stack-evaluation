import React, { createContext, useState } from 'react'

const Context = createContext('')

const Provider = ({ children }) => {
  const [text, setText] = useState('')
  return (
    <Context.Provider value={{
      text,
      setText,
    }}>
      {children}
    </Context.Provider>
  )
}

export default {
  Context, Provider,
}