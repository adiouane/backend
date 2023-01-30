import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from "next/router";
import {Detailsstyles, Info, Quantity, AddToCart} from '../../styles/styledProductDetails';
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';
import { useShopContext } from '../../lib/Context';




export default function ProductDetails({}) {
    
    const {qtr, plusplus, minusminus, addToCart} = useShopContext(); // useState 
    const router = useRouter(); 
    const [result] = useQuery({ query: GET_PRODUCT_QUERY, variables: { slug: router.query.slug } });
    const { data, fetching, error } = result;
    if (fetching) return <div>Loading...</div>;
    if (error) return <div>Oh no... {error.message}</div>;
    if (!data) return <div>Not found</div>;
    const product = data.products.data[0].attributes;

    return (
        <Detailsstyles>
            <img src={product.image.data.attributes.formats.medium.url} />
            <Info>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                    <Quantity>
                        <span>Quoantity</span>
                        <button><AiFillMinusCircle  onClick={minusminus}/></button>
                        <p>{qtr}</p>
                        <button><AiFillPlusCircle onClick={plusplus}/></button>
                    </Quantity>
                    <AddToCart onClick={() => addToCart(data.products.data[0].attributes, qtr)}>Add to Cart</AddToCart>
            </Info>
        </Detailsstyles>
    );
    }