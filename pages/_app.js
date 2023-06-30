import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("this is useffect");
    try{
      if(localStorage.getItem("cartItems"))
      {
        setCart(JSON.parse(localStorage.getItem("cartItems")));
      }
    }
    catch (error){
      console.log(error);
      localStorage.clear();
    }
  },[])

  const saveCart = (myCart) => {
    localStorage.set("cartItems", myCart);
    console.log("savecart")

    let subT = 0;
    let keys = Object.keys(myCart)
    for(let i=0;i<keys.length;i++)
    {
      subT += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setTotal(subT);
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    console.log("addtocart")
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    console.log("cart is cleared");
    setCart({});
    saveCart({});
  };

  const removeToCart = (itemCode, qty, price, name, size, variant) => {
    console.log("removetocart")
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if(newCart[itemCode].qty <= 0)
    {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);

  };

  return (
    <>
      <Navbar cart={cart} addToCart={addToCart} removeToCart={removeToCart} clearCart={clearCart} total={total} saveCart={saveCart} />
      <Component cart={cart} addToCart={addToCart} removeToCart={removeToCart} clearCart={clearCart} total={total} saveCart={saveCart} {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
