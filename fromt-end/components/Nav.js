import Link from "next/link";
import {FiShoppingBag} from 'react-icons/fi'
import { NavStyle, CartStyle } from "../styles/NavStyle";
import Cart from "./Cart";
import { useShopContext } from '../lib/Context';

 
export default function Nav(){
    const {showcart, setShowcart, totalqt, setTotalqt} = useShopContext();
    return(
        <div>
            <NavStyle>
                <Link href="/">
                    adiouane's store
                </Link>
                    <CartStyle>
                            {totalqt > 0 && <span>{totalqt}</span>}
                        <div onClick={() => setShowcart(true)}>
                            <FiShoppingBag />
                        </div>
                        <div onClick={() => setShowcart(true)}>
                            <h3>Cart</h3>
                        </div>
                    </CartStyle>
                    {showcart && <Cart />}
            </NavStyle>
        </div>
    )
}