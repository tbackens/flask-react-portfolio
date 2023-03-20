import React from 'react'

function NavBar() {
  return (
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link link-secondary" href="/">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link link-secondary" href="/about">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link link-secondary" href="/portfolio">Portfolio</a>
        </li>
    </ul>
  )
}

export default NavBar