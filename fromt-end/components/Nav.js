import Link from "next/link";
import {FiShoppingBag} from 'react-icons/fi'
import { NavStyle, CartStyle } from "../styles/NavStyle";
import Cart from "./Cart";
import { useShopContext } from '../lib/Context';

const {AnimatePresence, motion} = require('framer-motion');

export default function Nav(){
    const {showcart, setShowcart, totalqt, setTotalqt} = useShopContext();
    return(
        <div>
            <NavStyle>
                <Link href="/">
                    <h1>adiouane's store</h1>
                </Link>
                    <CartStyle>
                            {totalqt > 0 && <motion.span 
                            initial={{opacity:0, scale:0.8}}
                            animate={{opacity:1, scale:1}}
                            transition={{duration: 0.3}}
                            >{totalqt}</motion.span>}
                        <div onClick={() => setShowcart(true)}>
                            <FiShoppingBag />
                        </div>
                        <div onClick={() => setShowcart(true)}>
                            <h3>Cart</h3>
                        </div>
                    </CartStyle>
                    <AnimatePresence>
                        {showcart && <Cart />}
                    </AnimatePresence>
            </NavStyle>
        </div>
    )
}