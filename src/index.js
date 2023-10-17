import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Product from './Components/Product';
import Paymentpage from './Components/Payment';
import PaymentSuccess from './Components/PaymentSuccess';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
           <Route path="/" element={<App />} />
            <Route path="/Product-details" element={<Product />} />
            <Route path="/paymentpage" element={<Paymentpage/>}/>
            <Route path='/payment-status' element={<PaymentSuccess/>}/>
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </React.StrictMode>
  </div>
);

reportWebVitals();
