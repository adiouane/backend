import { useShopContext } from '../lib/Context';
import { CartStyle,  CartWrapper, OrderCart,
        EmptyCart ,Quantityorder, TotalPricestyle
    } from "../styles/CartStyle";
import { FiShoppingBag } from 'react-icons/fi';
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';


export default function Cart() {

    const {cartItems, setShowcart, qtr,
         plusplus, minusminus, minusminusorder,
         plusplusorder, addToCart, removeFromCart, totalprice, setTotalprice} = useShopContext();
    return (
        <CartWrapper onClick={() => setShowcart(false)}>
            <CartStyle onClick={(e) => e.stopPropagation()}>
                {cartItems.length < 1 && (
                <EmptyCart>
                    <h1>YOU HAVE SOME SHPPING TO DO! </h1>
                    <FiShoppingBag size={150} />
                </EmptyCart>
                )}
                {cartItems.length >= 1 && (
                    cartItems.map((item) => {
                        return (
                            <OrderCart key={item.slug}>
                                    <img src={item.image.data.attributes.formats.thumbnail.url}></img>
                                <div>
                                    <h2> {item.title} </h2>
                                    <h3> {item.price}$</h3>
                                </div>
                                <Quantityorder>
                                    <span>Quoantity</span>
                                    <button><AiFillMinusCircle onClick={() => removeFromCart(item)}/></button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => addToCart(item, 1)}><AiFillPlusCircle /></button>
                                 </Quantityorder>
                            </OrderCart>
                        );
                    }
                    ))}
                    {cartItems.length >= 1 && (
                        <TotalPricestyle>
                            <h2>Total Price: {totalprice}$</h2>
                            <button>Checkout</button>
                        </TotalPricestyle>
                    )}
            </CartStyle>
        </CartWrapper>
    );
}
