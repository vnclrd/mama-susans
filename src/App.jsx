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
          <img src="images/mama-susans.png" class="header-photo"></img>
          <ul class="options">
            <li><a href="#"><b>HOME</b></a></li>
            <li><a href="#"><b>MENU</b></a></li>
            <li><a href="#"><b>GALLERY</b></a></li>
            <li><a href="#"><b>FEEDBACKS</b></a></li>
          </ul>
        </div>
      </header>

      <body>

        <div id="body1" class="body1">
          <img src="images/cover-photo.webp"></img>
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

          <div class="about">
            <h2 class="about-text-title">Mama Susan's: From Humble Beginnings to Metro-South Favorite.... Kain po tayo!</h2>

            <br></br>

            <h3 class="about-text-story">Our Story</h3>
            <p class="about-text">
              In 2016, Mama Susan's emerged as a humble, yet authentic, "tapsihan" experience.
              Nestled within the heart of BF International VIllage, Las Piñas City, our initial
              offering was a simple four-seater counter, dedicated to serving classic Filipino
              comfort food. The aroma of sizzling "tapa" and the warmth of our service quickly
              resonated with the local community, fostering a loyal following.
            </p>

            <br></br>

            <p class="about-text">
              The overwhelming positive response fueled our ambition to grow. Recognizing the
              demand for accessible, delicious meals at any hour, Mama Susan's transitioned to
              24-hour operations. This expansion allowed us to cater to the diverse schedules of
              our customers, from early morning risers to late-night diners. To accommodate the 
              number of customers, we also expanded our dining space, creating a more comfortable
              and inviting atmosphere.
            </p>

            <br></br>

            <h2 class="about-text">Easy Ordering, Delivered!</h2>
            <p class="about-text">
            Now, through our online presence and partnerships with GrabFood and Foodpanda, we
            serve even more customers. We deliver to Las Piñas City, Parañaque City, Pasay City,
            and parts of Cavite.
            </p>

            <br></br>

            <h2 class="about-text">Our Mission?</h2>
            <p class="about-text">
            Simply, to serve afordable delicious food!  We are committed to always strive for
            your satisfaction, continuously improve our service, and serve delicious meals at
            affordable prices.
            </p>

            <br></br>

            <h2 class="about-text">What's Next?</h2>
            <p class="about-text">
            We're excited to keep growing and serving you better. Thank you for your support!
            </p>
            
          </div>




        </div>

      </body>

      <footer>
        <div id="footer" class="footer">
          <h6> &copy; Mama Susan's Original Tapsilog</h6>
        </div>
      </footer>
    </>
  )
}

export default App
