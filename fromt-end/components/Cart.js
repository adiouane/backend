import { useShopContext } from '../lib/Context';
import {
    CartStyle, CartWrapper, OrderCart,
    EmptyCart, Quantityorder, TotalPricestyle, Cards
} from "../styles/CartStyle";
import { FiShoppingBag } from 'react-icons/fi';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import getStripe from '../lib/getStripe'

//animation variants
const Card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
};

const AllCards = {
    hidden: { opacity: 1, scale: 0.8 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        }
    },

}



export default function Cart() {

    const { cartItems, setShowcart, qtr,
        plusplus, minusminus, minusminusorder,
        plusplusorder, addToCart, removeFromCart, totalprice, setTotalprice } = useShopContext();

         //payments
        const handleCheckout = async () => {
        const stripe = await getStripe();
        const res = await fetch("/api/stripe", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cartItems),
        });
        const data = await res.json();
        await stripe.redirectToCheckout({sessionId: data.id});
    };




   
    return (
        <CartWrapper
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowcart(false)}>
            <CartStyle
                initial={{ x: "50%" }}
                animate={{ x: "0%" }}
                exit={{ x: "50%" }}
                transition={{ duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}>
                {cartItems.length < 1 && (
                    <EmptyCart
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h1>YOU HAVE SOME SHPPING TO DO! </h1>
                        <FiShoppingBag size={150} />
                    </EmptyCart>
                )}
                <Cards
                    variants={AllCards}
                    initial="hidden"
                    animate="show"
                    layout
                >
                    {cartItems.length >= 1 && (
                        cartItems.map((item) => {
                            return (
                                <OrderCart
                                    variants={Card}
                                    layout
                                    key={item.slug}>
                                    <img src={item.image.data.attributes.formats.thumbnail.url}></img>
                                    <div>
                                        <h2> {item.title} </h2>
                                        <h3> {item.price}$</h3>
                                    </div>
                                    <Quantityorder>
                                        <span>Quoantity</span>
                                        <button><AiFillMinusCircle onClick={() => removeFromCart(item)} /></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => addToCart(item, 1)}><AiFillPlusCircle /></button>
                                    </Quantityorder>
                                </OrderCart>
                            );
                        }
                        ))}
                </Cards>
                {cartItems.length >= 1 && (
                    <TotalPricestyle layout>
                        <h2>Total Price: {totalprice}$</h2>
                        <button onClick={handleCheckout}>Checkout</button>
                    </TotalPricestyle>
                )}
            </CartStyle>
        </CartWrapper>
    );
}
