import Head from 'next/head';
import Footer from '../components/Footer';
import Header from './../components/Header';
import CatalogPreviews from '../components/homepage/CatalogPreviews';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monochrome</title>
      </Head>
      <Header></Header>

      <main className="content">
        <CatalogPreviews></CatalogPreviews>
      </main>

      <Footer></Footer>
    </div>
  );
}
