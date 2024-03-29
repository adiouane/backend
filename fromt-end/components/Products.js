import {ProductStyled} from "../styles/ProductStyle"
import Link from "next/link"

export default function Product ({product}){
    //extrcut prodect in array
    // console.log(product);
    const {title, price, image, slug} = product.attributes;
    return(
     <ProductStyled>
        <Link href={`/product/${slug}`}>
        <div>
            <img src={image.data.attributes.formats.small.url} alt="" />
        </div>
        <h2>{title}</h2>
        </Link>
        <h3>{price}$</h3>
     </ProductStyled>   
    )
}
