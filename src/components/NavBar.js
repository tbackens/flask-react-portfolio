import React from 'react'

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="http://localhost:3000/">TB</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" href="http://localhost:3000/">Home</a>
                    <a class="nav-link" href="http://localhost:3000/about">About</a>
                    <a class="nav-link" href="http://localhost:3000/portfolio">Portfolio</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar