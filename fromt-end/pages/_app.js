import '../styles/globals.css'
import { Provider, createClient} from "urql";
import Nav from '../components/Nav'
import { ShopProvider } from '../lib/Context'

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_API
})

export default function App({ Component, pageProps }) {
  return (
    <ShopProvider>
    <Provider value={client}>
      <Nav />
    <Component {...pageProps} />
    </Provider>
    </ShopProvider>
  )
}
