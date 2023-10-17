import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Setsingle } from '../Redux/Slice';


const ProductDetails = (props) => {
    const { data } = props;
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if (!data) {
      return null; 
    }

    const cardHandler =(item)=>{
        console.log(item,"itemm")
        dispatch(Setsingle(item));
        navigate("/Product-details")
      }
  return (
    <div>
        
    <div style={{ marginLeft:"15%", width:"80%"}}>
      <h2 className='bg-info'>{data.title}</h2>
      <br/>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
      <p> {data.category}</p>
      <Button  onClick={() => cardHandler(data)}>Click for product   details</Button>
    </div>
    </div>
  )
}

export default ProductDetails