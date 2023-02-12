// import {loadStripe} from "@stripe/stripe-js";

// let stripe;

// const getStripe = async () => {
//     if (!stripe) {
//         stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
//     }
//     return stripe;
// }

// export default getStripe;
import { loadStripe } from '@stripe/stripe-js'

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }

    return stripePromise;
}

export default getStripe;