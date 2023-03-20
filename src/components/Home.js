import React from 'react'
import timo from './timo.jpg'

function Home() {
  return (
    <div class="container">
      <div class="row justify-content-evenly">
        <div class="col">
          <img src={timo} class="img-thumbnail rounded-circle w-50 h-auto m-3" alt="..."/>
        </div>
      </div>
      <div class="row justify-content-evenly">
        <div class="col">
          <div class="card bg-dark">
            <div class="card-body">
              <h4>Hi, I'm <span id='gradient-name-text'>Timo!</span><span role="img" aria-label="mail"> 👋</span></h4>
              <h5>I'm a Fullstack-Developer!<span role="img" aria-label="mail"> 💻</span></h5>
              <br/>
              <ul class="text-start list-unstyled">
                <li><span role="img" aria-label="location">📍 </span>Flensburg, Germany</li>
                <li><span role="img" aria-label="laptop">🎓 </span>Student at Codecademy</li>
                <li><span role="img" aria-label="mail">✉️ </span>t.backens@web.de</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home