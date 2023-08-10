import '@/styles/globals.css'
import { DataProvider } from '@/context/context'

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}
