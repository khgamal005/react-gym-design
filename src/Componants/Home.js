import React from 'react'
import './Home.css'
import heart from '../assets/heart.png'
import hero from '../assets/hero_image.png'
import back from '../assets/hero_image_back.png'
import calories from '../assets/calories.png'
import { motion } from 'framer-motion'
import { Col } from 'react-bootstrap';
import NumberCounter from 'number-counter';




function Home() {
  const mobile=window.innerWidth<=768?true:false
  return (
    <section className='header' >
            <div className='row vh-100 '>
                <Col lg={9} md={12}>
                    <div className='r-items'>
                    <div class="blur hero-blur"></div>
                      <div className='the-best-ad ms-3'>
                      <motion.div
                      initial={{left:mobile ? '168px':'238px'}}
                      whileInView={{left:'8px'}}
                      transition={{type:'tween', duration:'3'}}
                      >
                      </motion.div>
                        <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                    </div>
                    <div className='hero-text ms-5'>
                        <div >
                           <span className='stroke-text'>Shape</span>  
                            <span>your</span>
                        </div>
                        <div>  <span>Ideal body</span></div>
                        <div>  <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
                    </div>
                    <div className="figures ms-5">
                        <div><span><div >
                        <NumberCounter start={100} end={140} delay={4} className="increment" preFix="+" />

                           </div></span><span>expert coaches</span></div>
                        <div><span><div >
                        <NumberCounter start={900} end={1000} delay={4} className="increment" preFix="+" />

                          </div></span><span>Members joined</span></div>
                        <div><span><div >
                        <NumberCounter start={50} end={150} delay={4} className="increment" preFix="+" />

                           </div></span><span>fitness programs</span></div></div>
                        <div  className="hero-buttons ms-3">
                        <button className="btn">Get Started</button>
                        <button className="btn">Learn More</button></div>
                      </div>
                </Col>
                <Col lg={3} md={12}>
                    <div className='l-items'>
                        <motion.div className="heart-rate"
                          initial={{right:'-1rem'}}
                          whileInView={{right:'4rem'}}
                          transition={{type:'spring', duration:'3'}}
                        ><img src={heart} alt="aa"/>
                        <span>Heart Rate</span><span>116 bpm</span></motion.div>

                        <img className="hero-image" src={hero} alt=""></img>
                        <motion.img 
                            initial={{right:'10rem'}}
                            whileInView={{ right: '20rem'}}
                            transition={{type:'spring', duration:'5'}}
                        className="hero-image-back" src={back} alt=""></motion.img>
                        <motion.div className="calories"
                     initial={{right:'45rem'}}
                     whileInView={{ right: '28rem'}}
                     transition={{type:'spring', duration:'5'}}
                    >
                <img src={calories} alt=""
                 /><div>
                  <span>Calories burned</span><span>220 kcal</span></div></motion.div>
                    </div>
                 

                </Col>
              
        </div>
    </section>
  )
}

export default Home