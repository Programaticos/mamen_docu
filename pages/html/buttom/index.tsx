import { Inter } from "next/font/google";
import ButtonHeader from "@/components/pages/html/bottom/ButtonHeader";
import ButtonMain from "@/components/pages/html/bottom/ButtonMain";

const inter = Inter({ subsets: ["latin"] });

export default function Buttom() {
  return (
    <>

<body>
    <header><ButtonHeader/></header>
     <main><ButtonMain/></main>
    <footer></footer>
    </body>
    </>
  );
}