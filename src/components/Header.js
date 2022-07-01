
import React from 'react'
import style from './Header.module.css'

function Header() {
  return (
    <header id={style.header}>
        <a href="./index.html">Index</a>
        <a href="./index.html">Food</a>
        <a href="./index.html">About</a>
    </header>
  )
}

export default Header