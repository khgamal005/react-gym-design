import React from 'react'
import './Programs.css'
import { Col, Row } from 'react-bootstrap'
import dumbell from '../assets/dumbell.png'
import rightArrow from '../assets/rightArrow.png'
import runing from '../assets/runing.svg'
import flame from '../assets/flame.svg'
import heart from '../assets/heartHealth.svg'

function Programs() {
  return (
   <section id='program'>
   <div className="programs-header">
    <span className="stroke-text">Explore our</span>
    <span>Programs</span>
    <span className="stroke-text">To shape you</span></div> 
      <div className="prgoram-categories my-5">
       <Row className=' justify-content-center gap-2 mx-4 px-2' >
        <Col  md={4} className='category ' >
                <img src={dumbell} alt='' className='w-25'/>
                    <h4>Strength Training</h4>
                    <p>In this program, you are trained to improve your strength through many exercises</p>
                    <div class="join-now"><span>Join Now</span><img src={rightArrow} alt=""/></div>
        </Col>
        <Col md={4}  className='category ' >
                <img src={runing} alt='' className='w-25'/>
                    <h4>Strength Training</h4>
                    <p>In this program, you are trained to improve your strength through many exercises</p>
                    <div class="join-now"><span>Join Now</span><img src={rightArrow} alt=""/></div>
        </Col>
        <Col md={4}  className='category ' >
                <img src={flame} alt='' className='w-25'/>
                    <h4>Strength Training</h4>
                    <p>In this program, you are trained to improve your strength through many exercises</p>
                    <div class="join-now"><span>Join Now</span><img src={rightArrow} alt=""/></div>
        </Col>
        <Col md={4}  className='category ' >
                <img src={heart} alt='' className='w-25'/>
                    <h4>Strength Training</h4>
                    <p>In this program, you are trained to improve your strength through many exercises</p>
                    <div class="join-now"><span>Join Now</span><img src={rightArrow} alt=""/></div>
        </Col>
       </Row>
      </div>
     
   </section>
  )
}

export default Programs