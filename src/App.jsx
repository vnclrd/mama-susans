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
            <li><a href="#home"><b>HOME</b></a></li>
            <li><a href="#menu"><b>MENU</b></a></li>
            <li><a href="#gallery"><b>GALLERY</b></a></li>
            <li><a href="#feedbacks"><b>FEEDBACKS</b></a></li>
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
              <img src="images/badge-1.webp"></img>
            </div>

            <div class="image2">
              <img src="images/badge-2.webp"></img>
            </div>
          </div>

          <div class="mid-image">
            <img src="images/mama-susans.png" class="mid-image-class"></img>
            <p class="about-text-title"><i>From Humble Beginnings, to Metro-South Favorite</i></p>
            <h1 class="about-text-title-2"><i>Kain po tayo!</i></h1>
          </div>
          
          <div class="about">

            <h1 class="about-text-story">Our Story</h1>
            <p class="about-text-p1">
              In 2016, Mama Susan's emerged as a humble, yet authentic, "tapsihan" experience.
              Nestled within the heart of BF International VIllage, Las Piñas City, our initial
              offering was a simple four-seater counter, dedicated to serving classic Filipino
              comfort food. The aroma of sizzling "tapa" and the warmth of our service quickly
              resonated with the local community, fostering a loyal following.
            </p>

            <p class="about-text-p2">
              The overwhelming positive response fueled our ambition to grow. Recognizing the
              demand for accessible, delicious meals at any hour, Mama Susan's transitioned to
              24-hour operations. This expansion allowed us to cater to the diverse schedules of
              our customers, from early morning risers to late-night diners. To accommodate the 
              number of customers, we also expanded our dining space, creating a more comfortable
              and inviting atmosphere.
            </p>

            <br></br>

            <h1 class="about-text-easy">Easy Ordering, Delivered!</h1>
            <p class="about-text-p3">
            Now, through our online presence and partnerships with GrabFood and Foodpanda, we
            serve even more customers. We deliver to Las Piñas City, Parañaque City, Pasay City,
            and parts of Cavite.
            </p>

            <br></br>

            <h1 class="about-text-mission">Our Mission</h1>
            <p class="about-text-p4">
            Simply, to serve afordable delicious food!  We are committed to always strive for
            your satisfaction, continuously improve our service, and serve delicious meals at
            affordable prices.
            </p>

            <br></br>

            <h1 class="about-text-next">What's Next?</h1>
            <p class="about-text-p5">
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
