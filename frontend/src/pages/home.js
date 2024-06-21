// // Home.js
// import React, { useEffect,useState } from 'react';
// import SecondNavbar from '../shared/components/Navigation/secondnavbar';
// import Navbar from '../shared/components/Navigation/mainnavbar';
// import FlipCard from '../components/flipcard';
// import './home.css';
// import {useCart} from './cartcontext'; // Correct import
// // import {Link} from 'react-dom';

// // // function Home(){
// // //   useEffect(()=>{
// // //     fetchItems();
// // //   }, []);

// // //   const [items,setItems]=useState([]);

// // //   const fetchItems=async()=>{
// // //     const data=await fetch('/');
// // //     const items=await data.json();
// // //   };

// // //   return (
// // //     <div>
// // //       {items.map((item, index) => (
// // //         <div key={index}>
// // //           <h1>{item.name}</h1>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // //}
// function Home() {
//   const { addToCart, cartItems } = useCart();

//   useEffect(() => {
//     console.log('Cart Items after adding to cart:', cartItems);
//   }, [cartItems]);

//   const handleAddToCart = (productId, productName, productPrice) => {
//     const newItem = {
//       id: productId,
//       name: productName,
//       price: productPrice,
//     };
//     addToCart(newItem, () => {
//       // Callback for navigation after state update
//     });
//   };

//   return (
//     <div className="home-page">
//       <div>
//         <SecondNavbar />
//         <Navbar />
//       </div>
//       <div className="flip-card-container">
//       <div className="flip-card-wrapper">
//           <FlipCard
//             imageSrc="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             description="Description goes here"
//           />
//           <button onClick={() => handleAddToCart(4, 'pepsi', 10)} className="card-button">
//             Add to Cart
//           </button>
//         </div>


//         <div className="flip-card-wrapper">
//           <FlipCard
//             imageSrc="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             description="Description goes here"
//           />
//           <button onClick={() => handleAddToCart(4, 'pepsi', 10)} className="card-button">
//             Add to Cart
//           </button>
//         </div>

//         <div className="flip-card-wrapper">
//           <FlipCard
//             imageSrc="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             description="Description goes here"
//           />
//           <button onClick={() => handleAddToCart(4, 'pepsi', 10)} className="card-button">
//             Add to Cart
//           </button>
//         </div>

//         <div className="flip-card-wrapper">
//           <FlipCard
//             imageSrc="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             description="Description goes here"
//           />
//           <button onClick={() => handleAddToCart(4, 'pepsi', 10)} className="card-button">
//             Add to Cart
//           </button>
//         </div>

//         <div className="flip-card-wrapper">
//           <FlipCard
//             imageSrc="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             description="Description goes here"
//           />
//           <button onClick={() => handleAddToCart(4, 'pepsi', 10)} className="card-button">
//             Add to Cart
//           </button>
//         </div>

//         <div className="flip-card-wrapper">
//           <FlipCard
//             imageSrc="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             description="Description goes here"
//           />
//           <button onClick={() => handleAddToCart(4, 'pepsi', 10)} className="card-button">
//             Add to Cart
//           </button>
//         </div>

//         <div className="flip-card-wrapper">
//           <FlipCard
//             imageSrc="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             description="Description goes here"
//           />
//           <button onClick={() => handleAddToCart(4, 'pepsi', 10)} className="card-button">
//             Add to Cart
//           </button>
//         </div>

//         <div className="flip-card-wrapper">
//           <FlipCard
//             imageSrc="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             description="Description goes here"
//           />
//           <button onClick={() => handleAddToCart(5, 'pepsi', 10)} className="card-button">
//             Add to Cart
//           </button>
//         </div>

//         <div className="flip-card-wrapper">
//           <FlipCard
//             imageSrc="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             description="Description goes here"
//           />
//           <button onClick={() => handleAddToCart(6, 'pepsi', 10)} className="card-button">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SecondNavbar from '../shared/components/Navigation/secondnavbar';
import Navbar from '../shared/components/Navigation/mainnavbar';
import FlipCard from '../components/flipcard';
import './home.css';
import { useCart } from './cartcontext'; // Correct import

function Home() {
  const [items, setItems] = useState([]);
  const { addToCart } = useCart(); // Destructure addToCart from the useCart hook

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/items'); // Make HTTP GET request to your Node.js API
      setItems(response.data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddToCart = (productId, productName, productPrice) => {
    const newItem = {
      id: productId,
      name: productName,
      price: productPrice,
    };
    addToCart(newItem, () => {
      // Callback for navigation after state update
    });
  };

  return (
    <div className="home-page">
      <div className="flip-card-container">
        {items.map(item => (
          <div key={item._id} className="flip-card-wrapper">
            <FlipCard
                imageSrc="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                description={item.item_name} // Assuming your MongoDB schema has a 'description' field
            />
            <button onClick={() => handleAddToCart(item._id, item.item_name, item.item_price)} className="card-button">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
