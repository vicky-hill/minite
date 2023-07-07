import Navbar from '@/components/elements/Navbar'
import { ImageProvider } from '@/context/ImageContext'
import { UserProvider } from '@/context/UserContext'
import '@/sass/main.scss'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ImageProvider>
        <Navbar />
        <Component {...pageProps} />
      </ImageProvider>
    </UserProvider>
  )
}
