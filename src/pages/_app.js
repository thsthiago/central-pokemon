import GlobalStyles from '../styles/global'
import { Header } from '../components/Header'
import { Provider } from 'react-redux'
import store from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </Provider>
  )
}

export default MyApp
