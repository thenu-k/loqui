import Head from 'next/head'
import PageFormat from '../Components/Common/PageFormat/PageFormat'
import HomePage from '../Components/Common/Pages/Home/HomePage'

export default function Home() {
  return (
    <>
      <PageFormat>
        <HomePage/>
      </PageFormat>
    </>
  )
}
