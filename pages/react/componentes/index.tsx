import Head from "next/head";
import { Inter } from "next/font/google";
import BarraNavegacion from "@/components/layout/header/barraNavegacion";

const inter = Inter({ subsets: ["latin"] });

export default function ComponentesPage() {
  return (
    <>
<Head>

         <title>create next app</title>
         <meta name="description" content="Generated by create next app" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
</Head>
{/* <body> */}
    <header></header>
     <main>
    
         <h1>Componentes</h1> 
         <h2> Component es la clase base para los componentes de React 
            definidos como clases en JavaScript.Esta función tiene la tarea de proporcionar elementos JSX , 
            que son las instrucciones para que React construya la interfaz de usuario  </h2> 
         <h1>Ejemplo de componentes </h1> 
         <h2>   </h2>
         <div>
         <a href="/">HOME</a>
         </div>

    </main>
    <footer></footer>
    {/* </body> */}
    </>
  );
}