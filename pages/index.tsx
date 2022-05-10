import Head from 'next/head'
import Header from '../Components/Header'
import Feed from '../Components/Feed'
import Modal from '../Components/Modal'

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  )
}

export default Home
