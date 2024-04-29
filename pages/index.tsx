import BarraNavegacion from "@/components/layout/header/barraNavegacion";
import Saludo from "@/components/layout/main/saludo";
import Contador from "@/components/pages/home/footer/contador";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Documentacion</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <BarraNavegacion />
      </header>
      <main>
        <Saludo />
      </main>
      <footer>
        <Contador />
      </footer>
    </>
  );
}

