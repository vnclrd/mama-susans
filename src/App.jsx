import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <head>
        <title>Mama Susan's</title>
      </head>

      <header>
        <div id="header" class="header">
          <h1>This is the header</h1>
          <ul class>
            <li><a href="#">HOME</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="#">GALLERY</a></li>
            <li><a href="#">FEEDBACKS</a></li>
          </ul>
        </div>
      </header>

      <body>
        <div id="body1" class="body1">
          <img src="./public/img/cover-photo.webp"></img>
        </div>

        <div id="body2" class="body2">

          <h1 class="phrase1">WE ARE OPEN 24 HOURS, EVERYDAY!</h1>
          <h2 class="phrase2"> DINE IN - TAKE-OUT - DELIVERY</h2>

          <div class="image-container">
            <div class="image1">
              <h1>This is for image 1</h1>
            </div>

            <div class="image2">
              <h1>This is for image 2</h1>
            </div>
          </div>

        </div>
      </body>

      <footer>
        <div id="footer" class="footer">
          <h1> &copy; All rights reserved.</h1>
        </div>
      </footer>
    </>
  )
}

export default App
