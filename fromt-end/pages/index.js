import Head from 'next/head'
// import Link from 'next/link'
import { useQuery } from "urql"
import { PRODUCT_QUERY } from "../lib/query"
import Product from "../components/Products"
import { Gallery } from '../styles/Gallery'



export default function Home() {
  // We will fitch the data from backend strapi
  const [result] = useQuery({ query: PRODUCT_QUERY }); // useQuery is a hook from urql
  const { data, fetching, error } = result; // destructuring the result

  // check if the data is fetching (coming from backend)
  if (fetching) return <div>Loading...</div>;

  // check if there is an error
  if (error) return <div>Oh no... {error.message}</div>;

  // check if there is data
  if (!data) return <div>Not found</div>;

  const products = data.products.data;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>
      <main>
        <Gallery>
          {products.map((product) => (
            <Product key={product.attributes.slug} product={product} />
            ))}
        </Gallery>
      </main>
    </>
  )
}
