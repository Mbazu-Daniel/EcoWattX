import NavBar from '@/components/NavBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
