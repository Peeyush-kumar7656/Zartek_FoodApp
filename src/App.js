import React, { useState, useEffect } from 'react';
import Categories from './Component/Categories';
import { BrowserRouter as Router } from 'react-router-dom'; 
import {Link} from "react-router-dom"
import './App.css';

const App = () =>{

  const [restaurantName, setRestaurantName] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect( ()=>{
    console.log(categories);
}, [restaurantName, categories]);

  useEffect( () => {

    const defaultPage = async () =>{
      const responseApi = await fetch('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099');
      const data = await responseApi.json();
      console.log(data[0]);
      setRestaurantName(data[0].restaurant_name);
      setCategories(data[0].table_menu_list);
    }

    defaultPage();
  }, []);

  return (
    <div>
      <div className='header'>
        <span  className='goBack'><Router>&#8592;</Router></span>
        <span className='title'>{restaurantName}</span>
        <span>
        <Router>
          <Link className='order-tag'>My Orders</Link>
          <Link className='cart-icon'>&#128722;<sup className='cart-counter'>0</sup></Link>
          </Router>
        </span>
      </div>
      <Categories categories={categories}/>
    </div>
    
  );
}
export default App;