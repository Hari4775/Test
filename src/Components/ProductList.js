import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Setsingle } from '../Redux/Slice';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import ProductDetails from './ProductDetails';

const ProductList = () => {
  const [allproducts, setAllproducts] = useState([]);
  const [selectProduct,setSelectProduct ] =useState(false)
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        setAllproducts(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  const handleProductHover = (product) => {
    setHoveredProduct(product);
  }; 
  const handleProductMouseLeave = () => {
    setHoveredProduct(null);
  };

  const cardHandler =(item)=>{
    console.log(item,"itemm")
    dispatch(Setsingle(item));
    navigate("/Product-details")
  }

  return (
    <div style={{ marginTop: '120px' }}>
    <div className="product-list" style={{ display: '', flexWrap: 'wrap' }}>
      {allproducts.map((item) => (
        <div style={{ display: 'flex', alignItems: 'center' }} key={item.id}>
          <button style={{border:"none"}} onClick={() => cardHandler(item)}>
            <Card
              className="ml-4 my-5 mx-5"
              style={{ width: '20rem', height: '25rem', border: 'none' }}
              onMouseEnter={() => handleProductHover(item)}
            >
              <Card.Img src={item.image} style={{ margin: '7rem', width: '12rem', height: '25rem', objectFit: 'cover' }} />
            </Card>
          </button>
          {hoveredProduct && hoveredProduct.id === item.id && (
            <ProductDetails data={hoveredProduct} />
          )}
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductList;
