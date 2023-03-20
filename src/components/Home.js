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
              <h4>Hi, I'm Timo!</h4>
              <h5>I'm a Fullstack-Developer</h5>
              <ul class="text-start">
                <li class="">Flensburg, Germany</li>
                <li>Student at Codecademy</li>
                <li>t.backens@web.de</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home