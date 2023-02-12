import { useRouter } from "next/router";
import {SuccessStyled} from "@/styles/seccessStyeld";
import Image from "next/image";
import profile from "../public/profile.png"
// import stripe
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export  async function getServerSideProps(params){
    const order = await stripe.checkout.sessions.retrieve(params.query.session_id,
        {
            expand: ["line_items"],
        }
        );
    return{
        props: {
            order,
        },
    };
}

export default function success({order}){
    console.log(order);
    const route = useRouter();
    return(
        <SuccessStyled>
            <h1>Thank you for your order</h1>
            <h2>A confermation email has been sent to</h2>
            <h2>{order.customer_details.email}</h2>
            <h2>Order amount: {order.amount_total}</h2>
            <ul>
                {order.line_items.data.map((item) => (
                    <li key={item.id}>
                       name of product: {item.description} 
                    </li>
                ))}
                {
                    order.line_items.data.map((item) => (
                        <li key={item.id}>
                            price of product: {item.amount_total}
                        </li>
                    ))
                }
                {
                    order.line_items.data.map((item) => (
                        <li key={item.id}>
                            quantity of product: {item.quantity}
                        </li>
                    ))
                }
            </ul>
            <Image class="img" src={profile}></Image>
            <button onClick={() => route.push("/")}>Go back</button>
        </SuccessStyled>
    )
}