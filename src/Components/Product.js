import React from 'react'
import {Button,Card} from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Product = () => {
 const navigate = useNavigate();
  const singleproduct=useSelector((hello)=>hello.Single)
  const orderHndler =() =>{
   navigate("/Paymentpage")
  }

  return (
    <div>
       <>

       <div className='container ' style={{marginTop:"120px",marginBottom:"80px"}}>
          <div className='row  '>
            <div className='col-2'></div>
            <div className='col-4 '>
               <Card className="mycard2 mx-2 my-3"style={{ maxWidth: '18rem' }}>
                 <Card.Img variant="top" src={singleproduct.image} />
                  <Card.Body>                 
                 </Card.Body>
               </Card>
            </div>
            <div className='col-4'>
                <div className='row my-5'>
                 <h3>{singleproduct.title}</h3>
                </div>
                <div className='row'>
                </div>
                <div className='row my-1'>
                    <p>{singleproduct.description}</p>
                </div>
                <div className='row my-1'><h1><span style={{color:"red",fontSize:"20px",marginBottom:"10px"}}>&#8377;</span>{singleproduct.price}</h1></div>
                <div className='row my-1'>
                  <Button  onClick={orderHndler}>ORDER NOW</Button></div>
            </div>
            <div className='col-2'></div>
          </div>
       </div>
        </>
    </div>
  )
}

export default Product
