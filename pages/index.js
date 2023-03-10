import Head from 'next/head'
import PageFormat from '../Components/Common/PageFormat/PageFormat'
import HomePage from '../Components/Pages/Home/HomePage'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase/firebase'

export default function Home() {
  return (
    <>
      <Head>
        <title>Loqui | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='Thenu Kaluarachchi'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageFormat>
        <HomePage/>
      </PageFormat>
    </>
  )
}
