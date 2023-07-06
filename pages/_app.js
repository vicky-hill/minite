import Navbar from '@/components/elements/Navbar'
import { UserProvider } from '@/context/UserContext'
import '@/sass/main.scss'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Navbar />
      <Component {...pageProps} />
    </UserProvider>
  )
}
