import React from 'react'
import vg from "../Asset/2.webp"
import{AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id = "home">
      <main>
        <h1>TechStar</h1>
        <p>solution to all your problem </p>
      </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.

            </p>
        </div>
        </div>
    
    <div className="home3" id = "about">
        <div>
            <h1>
                who we are?
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempore, enim optio nulla, iste repellat repudiandae officia error tenetur voluptatum accusamus dolore dolorum quibusdam necessitatibus et est assumenda sint amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error corrupti quis voluptate.</p>
        </div>
    </div>
    <div className="home4" id = "brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style = {{
                animationDelay:"0.3s"


                }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
                </div>
                <div style = {{
                animationDelay:"0.5s"


                }}>
              <AiFillAmazonCircle/>
              <p>amazon</p>
                </div>


                <div style = {{
                animationDelay:"0.7s"


                }}>
              <AiFillYoutube/>
              <p>Youtube</p>
                </div>

                <div style = {{
                animationDelay:"1s"


                }}>
              <AiFillInstagram/>
              <p>Instagram</p>
                </div>


            </article>
        </div>
    </div>
    
    
    </>
  )
}

export default Home
