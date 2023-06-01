import '@/styles/globals.css';
import '../styles/fonts.css';
import { AppProvider } from '@/components/context/AppContext';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
