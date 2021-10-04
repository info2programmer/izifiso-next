import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Lets Build Izifiso 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Explore Nearby Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard img={img} location={location} distance={distance} key={img} />
            ))}
          </div>

        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Live anywhere</h2>
          <div className="flex space-x-3  p-3 -ml-3 overflow-scroll scrollbar-hide overflow-x-auto">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} title={title} img={img} />
            ))}
          </div>

        </section>

        <LargeCard img="http://links.papareact.com/4cj" title="The greatest outdoor" description="where desire gets wind" btnText="Let's Go" />
      </main>

      <Footer />
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G")
    .then(
      (res) => res.json()
    )

  const cardsData = await fetch("https://jsonkeeper.com/b/VHHT")
    .then(
      (res) => res.json()
    )

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
