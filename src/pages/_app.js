import '../../styles/globalStyles.scss'
import Layout from '../Components/layout'

import Header from '../Components/Header'
import '../Components/Header/styles.scss'
import '../Components/RowMovies/styles.scss'
import '../../styles/pages/Home.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
