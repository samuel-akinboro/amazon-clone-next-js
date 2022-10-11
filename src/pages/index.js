import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />

      <main className='max-w-screen-xl mx-auto'>
        <Banner />
      </main>
    </div>
  );
}
