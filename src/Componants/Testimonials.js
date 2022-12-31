import React ,{useState} from 'react'
import './Testimonials.css'
import { Row, Col } from 'react-bootstrap';
import { testimonialsData } from '../data/testimonialsData';
import arrowright from '../assets/rightArrow.png'
import arrowrleft from '../assets/leftArrow.png'
import { motion } from 'framer-motion';


function Testimonials() {
    const [selected, setSelected] = useState(0)
            const tlength =testimonialsData.length
  return (
    <section>
        <Row>
            <Col lg={6} >
                <div className={'left-t'}>
                <span> Testimonials</span>
            <span class="stroke-text"> What they</span>
            <span> say about us</span>
                  <motion.span 
                     key={selected}
                     initial={{opacity:'0',x :-100}}
                     animate={{opacity:'1',x :0}}
                     exit={{opacity:'0',x :100}}
                     transition={{type:'spring', duration:'3'}}
                  >{testimonialsData[selected].review}</motion.span>
                  <span>
                  <span style={{color:'var(--orange'}}>{testimonialsData[selected].name}</span> -- 
                  <span className='text-uppercase text-white'>{testimonialsData[selected].status}</span>
                  </span>
                </div>
           
            </Col>
            <Col lg={6} className={'right-t my-3'}>
                    
                        <motion.div 
                         initial={{opacity:'0',x :'-100'}}
                         whileInView={{opacity:'1',x :'0'}}
                         transition={{type:'spring', duration:'3'}}
                        ></motion.div>
                        <motion.div
                         initial={{opacity:'0',x :'100'}}
                         whileInView={{opacity:'1', x :'0'}}
                         transition={{type:'spring', duration:'3'}}
                        >
                        </motion.div>
                   <motion.img
                     key={selected}
                     initial={{opacity:'0',x :100}}
                     animate={{opacity:'1',x :0}}
                     exit={{opacity:'0',x :-100}}
                     transition={{type:'spring', duration:'3'}}
                   src={testimonialsData[selected].image}  alt=''/>
                    <div className='arrows'>
                    <img  onClick={()=>(
                        selected===0 ?  setSelected(tlength-1): setSelected(prev=>prev-1) 
                    )} src={arrowrleft}  alt=''/>
                    <img  onClick={()=>(
                        selected===tlength-1 ?  setSelected(0): setSelected(prev=>prev+1) 
                    )} 

                    src={arrowright}  alt=''/>
   
                    </div>
            </Col>
        </Row>
    </section>
  )
}

export default Testimonials