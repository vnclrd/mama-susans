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
