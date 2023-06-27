import Navbar from '@/components/elements/Navbar'
import '@/sass/main.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
