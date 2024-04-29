import Head from "next/head";
import { Inter } from "next/font/google";
import BarraNavegacion from "@/components/layout/header/barraNavegacion";

const inter = Inter({ subsets: ["latin"] });

export default function image() {
  return (
    <>
<Head>

         <title>COMPONENTE DE REACT</title>
         <meta name="description" content="Generated by create next app" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
</Head>
<body>
    <header></header>
     <main>
    
         <h1>HOOK</h1> 
         <h3>Los Hooks son funciones que te permiten “enganchar” el estado de React y el 
            ciclo de vida desde componentes de función. Los hooks no funcionan dentro de las clases 
            — te permiten usar React sin clases.</h3>
         <h2> USESTATE  </h2> 
         <h3>useState es un Hook de React que te permite 
            agregar una variable de estado a tu componente.</h3>
         <h1>Ejemplo de Hook </h1> 
         <h2>   </h2>
         <div>
         <a href="/">HOME</a>
         </div>

    </main>
    <footer></footer>
    </body>
    </>
  )
}