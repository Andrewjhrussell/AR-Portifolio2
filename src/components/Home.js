import React from "react"
import andrew from '../images/IMG_ANDREW.jpg'

    
const Home = () => {
    return (
        // <div className="d-flex justify-content-center">
        /* 
        <header>
            <h1>ANDREW RUSSELL</h1><span className="sr-only"></span>
        </header> */
        /* </div> */



        <div className="container">
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 justify-content-center">
                    <h2>ABOUT ME</h2>
                    <div className="d-flex justify-content-center">
                        <img src={andrew} alt=" andrew" width="339" height="339" />

                    </div>
                </div>
            </div>




            <p>
                Im Andrew Russell I am a coder and a renaissance man. I love math art and science. I love to study and
                find
                out new things.
                My first love is math. I see myself as a hard working person, and like to acheive the best in life. I love
                to add value to the market place
                by solving problem with html and css also Js. I am learning everyday about the coding industry,and also
                enjoy solving problems for users.
                I see this industry as a way to grow in many ways. This is a opportunity of the 20th century.
          </p>

            <hr />
        </div >
    )
}

export default Home