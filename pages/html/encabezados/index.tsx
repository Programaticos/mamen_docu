import { Inter } from "next/font/google";
import EncabezadosHeader from "@/components/pages/html/encambezados/EncabezaadosHeader";
import EncabezadosMain from "@/components/pages/html/encambezados/EncabezadosMain";

const inter = Inter({ subsets: ["latin"] });

export default function Encabezados() {
  return (
    <>
      
      <body>
         <header>
         <EncabezadosHeader/>
         </header>

         <main>
         <EncabezadosMain/>
         </main>
         <footer>
         </footer>
       </body>
    </>
  );
}