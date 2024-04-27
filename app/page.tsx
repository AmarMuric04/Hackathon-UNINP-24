<<<<<<< HEAD
export default function Home() {
  return;
=======
import { Hero } from "@/Pages/Hero";
import { GoogleGeminiEffectDemo } from "../Components/ui/Gemini";
import { ThreeDCardDemo } from "@/Components/ui/ThreeDcardDemo";
import slika1 from "../public/Assets/jonas-bg-remove.png";
import slika2 from "../public/Assets/kiril.png";
import slika3 from "../public/Assets/max.png";

import { MacbookScrollDemo } from "../Components/ui/MacbookScrollDemo";
import MyFooter from "@/Components/ui/MyFooter";

export default function Home() {
  return (
    <div className="bg-[#02010a]">
      <Hero />
      <GoogleGeminiEffectDemo />
      <div className="flex width-full justify-center gap-10 bg-[#02010a] ">
        <ThreeDCardDemo
          imeProfesora="Jonas Schmeddtman"
          slika={slika1}
          deskripcija="Jonass Schmeddtmann je poznati course creator, proslavio se kursem za
          JavaScript."
          brojKurseva={11}
          twitter="jonasschmedtman"
        />
        <ThreeDCardDemo
          imeProfesora="Maximilian Schwarzmüller"
          slika={slika3}
          deskripcija="Maximilian Schwarzmüller je nemacki course creator poznat po svojim kursevima za React i Typescript."
          brojKurseva={7}
          twitter="maxedapps"
        />
        <ThreeDCardDemo
          imeProfesora="Kirill Eremenko"
          slika={slika2}
          deskripcija="Kirill Eremenko, poznatiji kao SuperDataScience. Proslavljeni course creator iz Australije."
          brojKurseva={8}
          twitter="kirill_eremenko"
        />
      </div>
      <MacbookScrollDemo />
      <MyFooter />
    </div>
  );
>>>>>>> d7e93474beaa9373c07815ef008ee5decb464b97
}
