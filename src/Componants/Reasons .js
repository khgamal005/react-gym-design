import React from 'react'
import './Reasons .css'
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'
import tick from '../assets/tick.png'
import nick from '../assets/nike.png'
import addidas from '../assets/adidas.png'
import nb from '../assets/nb.png'


function Reasons () {
  return (
    <section id='resons'> 
       <Container>
       <Row>
          <Col lg={6} md={12}>
           <Row>  
             <div className='col-lg-4 '>
             <div className='img-contentone ms-4 '> <img src={img1} alt='' className='w-100'/></div>
             </div>
             <div className='col-lg-8  '>
                  <div className='d-flex flex-wrap img-content mb-5'>
                     <span className='w-100 mb-2'><img src={img2} alt='' className='w-100'/></span>
                     <span  className='w-50 pe-2'><img src={img3} alt='' className='w-100'/></span>
                     <span  className='w-50'><img src={img4} alt='' className=''/></span>
                  </div>   
             </div>
           </Row>
          </Col>
          <Col lg={6} md={12}  className='flex-column gap-1 text-uppercase right-r ' >
          <span>some reasons</span>
          <div><span className="stroke-text">Why </span><span>choose us?</span></div>
          <div className="details-r">
            <div>
              <img src={tick} alt=''/>
              <span>over 140+ expert coachs</span>
            </div>
            <div>
              <img src={tick} alt=''/>
              <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
              <img src={tick} alt=''/>
              <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
              <img src={tick} alt=''/>
              <span>over 140+ expert coachs</span>
            </div>
          </div>
          <span  style={{color:'var(--gray)'}}>OUR PARTNERS</span>
          <div class="partners d-flex gap-1">
          <img src={nb} alt=''/>
          <img src={nick} alt=''/>
          <img src={addidas} alt=''/>
          </div>

          </Col>
        </Row>
       </Container>
    </section>
  )
}

export default Reasons 