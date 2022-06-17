import React, { Component } from 'react'
import Typical from 'react-typical'

export default function Typer() {
    return (
      <Typical
        steps={['Hello', 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
      />
  )
}
