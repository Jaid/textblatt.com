import React, {createContext, useState} from "react"

const InputContext = createContext()

InputContext.displayName = "InputContext"

export const InputProvider = props => {
  const [text, setText] = useState("")
  const value = {
    text,
    setText,
  }
  return <InputContext.Provider value={value}>
    {props.children}
  </InputContext.Provider>
}

export default InputContext