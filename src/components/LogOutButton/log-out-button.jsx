import React from 'react'

export function LogOutButton(props) {
  return (
    <button className="log-out-button" onClick={props.onClick}>Log Out</button>
  )
}