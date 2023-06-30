import React, { useState } from "react";
import Link from "next/link";
import { BsCartPlusFill } from "react-icons/bs";
import Cart from "./Popups/cart";

const Navbar = (addToCart,removeToCart,clearCart,cart,saveCart,total) => {
  const [openCart, setOpenCart] = useState(false);
  console.log("navbar",addToCart,removeToCart,clearCart,cart,saveCart,total)
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row items-center sticky top-0 bg-[#A42838] bg-opacity-80 shadow-lg shadow-zinc-700 z-10">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap"
            rel="stylesheet"
          />
        </head>
        <div className="logo">
          <Link href={"/"}>
            <a>
              <p className="font-bold text-5xl items-center justify-center text-white royal ">
                Lozenge
              </p>
            </a>
          </Link>
        </div>
        <div>
          <ul className="flex flex-row md:flex-row md:pr-16 font-bold text-3xl md:text-2xl text-[#29142c] royal">
            <Link href={"/cakes"}>
              <li className="px-2 py-0.5 cursor-pointer">Cakes</li>
            </Link>
            <Link href={"/cookies"}>
              <li className="px-2 py-0.5 cursor-pointer">Cookies</li>
            </Link>
            <Link href={"/deserts"}>
              <li className="px-2 py-0.5 cursor-pointer">Desserts</li>
            </Link>
            <Link href={"/order"}>
              <li className="px-2 py-0.5 cursor-pointer">Orders</li>
            </Link>
          </ul>
        </div>
        <div className="cart absolute right-0 top-3 cursor-pointer pr-2 font-bold">
          <button href={"/"} onClick={()=>{
            setOpenCart(true);
          }}>
            <BsCartPlusFill className="h-5 w-5 text-[#29142c]" />
          </button>
        </div>
      </div>
      <Cart open={openCart} setOpen={setOpenCart} addToCart={addToCart} removeToCart={removeToCart} clearCart={clearCart} saveCart={saveCart} cart={cart} total={total} />
    </>
  );
};

export default Navbar;
