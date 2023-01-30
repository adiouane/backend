import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    // add state here
    const [qtr, setQtr] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [showcart, setShowcart] = useState(false);
    const [totalqt, setTotalqt] = useState(0);
    const [totalprice, setTotalprice] = useState(0);

    // incres product quantity
    const plusplus = () => {
        setQtr((prevQrt) => prevQrt + 1);
    }
    // decres product quantity
    const minusminus = () => {
        if (qtr > 1) {
            setQtr((prevQrt) => prevQrt - 1);
        }
        else
            setQtr(1);
    }
    // incres product quantity
    const plusplusorder = () => {
        setQtr((prevQrt) => prevQrt + 1);
    }

    //add product to cart
    const addToCart = (product, quantity) => { // product is an object and quantity is a number which is the quantity of the product
        // incres product quantity on cart icon
        setTotalqt((prevQrt) => prevQrt + quantity);
        // total price
        setTotalprice((prevPrice) => prevPrice + (product.price * quantity));
        const exist = cartItems.find((item) => item.slug === product.slug);
        if (exist) {
            setCartItems(
                cartItems.map((item) =>
                    item.slug === product.slug ? { ...exist, quantity: exist.quantity + quantity } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: quantity }]);
        }
    };

    // remove product from cart
    const removeFromCart = (product) => {
        // decres product quantity on cart icon
        setTotalqt((prevQrt) => prevQrt - product.quantity);
        // total price
        setTotalprice((prevPrice) => totalprice - product.price);
        const exist = cartItems.find((item) => item.slug === product.slug);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.slug !== product.slug));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.slug === product.slug ? { ...exist, quantity: exist.quantity - 1 } : item
                )
            );
        }
    };

    return(
        <ShopContext.Provider value={{
            qtr, plusplus, minusminus,
            showcart, setShowcart, addToCart,
            cartItems, setCartItems,
            plusplusorder,
            removeFromCart, totalqt, setTotalqt,
            totalprice, setTotalprice
        }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShopContext = () => useContext(ShopContext);