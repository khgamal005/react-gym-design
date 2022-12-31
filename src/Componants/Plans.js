import React from 'react'
import './Plans.css'
import { plansData } from '../data/plansData'
import { Container, Row ,Col} from 'react-bootstrap'
import tick from '../assets/tick.png'


function Plans() {
  return (
   < section className='position-relative'>
   <div class="blur plans-blur-1"></div>
    <div class="blur plans-blur-2"></div>
    <div className="plans-header">
    
    <span className="stroke-text">READY TO START</span>
    <span>YOUR JOURNEY</span>
    <span className="stroke-text">NOW WITHUS</span></div> 
                <Container className='my-5'>
                    <Row className='flex justify-content-evenly'>
                        {plansData.map((el ,i)=>(
                            <Col lg={3}key={i}  className='plan my-3' >  
                             {el.icon}
                             <span>{el.name}</span> 
                             <span>${el.price}</span> 
                            {<div className='features'>
                                {plansData.map((el,i)=>(
                                    <div className='feature' key={i}>
                                        <img src={tick} alt=''/>
                                        <span>{el.features}</span>
                                    </div>
                                ))}
                            
                                </div>}
                                <span>See more benefits -&gt;</span>
                                <button class="btn">Join now</button>
                            </Col>
                        ))}
                    </Row>
                </Container>
   </section>
  )
}

export default Plans