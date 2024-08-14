import { about1, about2, about3, about4, about5 } from "@/lib/data";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section-light w-full">
      <div className="subcontainerXl flex flex-col gap-5">

        {/* first block  */}
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
        <div className="prose-custom">
         
          Vaig estudiar fitoteràpia per la passió per les plantes que vaig
          heretar de la meva àvia. Durant els meus estudis, vaig descobrir que
          la fitoteràpia no sols és una pràctica mil·lenària, sinó que també
          representa una manera de connectar amb el coneixement tradicional i
          amb la terra mateixa.
        </div>
        <div className="prose-custom-xl border-l-4 pl-5 border-l-green1 font-semibold">
          Vaig aprendre a identificar les propietats medicinals de diferents
          plantes, a preparar infusions, extractes i ungüents, i a utilitzar
          aquests recursos naturals per a millorar la salut i el benestar de les
          persones.
        </div></div>

    {/* second block */}
     <div className="flex flex-col lg:flex-row items-center">
       <div className="basis-1/2 prose-custom-xl">
        Tot això, em va portar a realitzar estudis complets de naturopatia i
        diferents màsters que aborden teràpies integratives per a la cura de
        l'ésser i la salut. Vaig comprendre que la veritable sanació va més
        enllà de tractar símptomes aïllats; es tracta de veure a l'ésser humà
        com un tot, on cos, ment i esperit estan interconnectats.
        </div>
        <div className="basis-1/2">
        <Image 
           src="/assets/about-history.jpg"
           alt="plant"
           width={750}
           height={1000}
           className="p-16"
          />
        </div>
        </div>
        
        {/* third block */}

        <div> Aquests
        estudis van ampliar la meva visió i em van permetre incorporar noves
        eines terapèutiques a la meva pràctica. Vaig aprendre sobre la
        importància de l'alimentació natural, l'equilibri emocional, i la
        influència de l'entorn en la salut. Em vaig formar en teràpies com
        la ortomolecular, microimmunoteràpia, psiconeuroinmunoendocrinología,
        teràpia aplicada, entre altres, totes elles complementàries, ja que, en
        conjunt, em van oferir un enfocament holístic per a tractar als meus
        pacients.</div>

        {/* fourth block  */}
        
       <div> Cada màster que vaig completar em va aportar un nou nivell de
        comprensió i un profund respecte per la capacitat innata del cos per a
        curar-se quan se li brinda el suport adequat. Vaig descobrir que
        la neuropatia no sols se centra en la prevenció i el tractament de
        malalties, sinó també en la promoció d'un estil de vida saludable que
        fomenti el benestar integral. Aquesta filosofia ressonava profundament
        en mi, entenent que la veritable salut prové de viure en harmonia amb la
        naturalesa. </div> 

        {/* fifth block  */}
        
       <div> Avui dia, la meva pràctica es basa en una combinació
        d'aquestes teràpies naturals, sempre adaptades a les necessitats
        individuals de cada persona. Treball amb l'objectiu d’apoderar als meus
        pacients, educant-los sobre com poden prendre el control de la seva
        salut i benestar a través de decisions informades i conscients. El meu
        enfocament és oferir solucions personalitzades que promoguin l'equilibri
        i la vitalitat, honrant així no sols la saviesa tradicional que vaig
        heretar, sinó també el coneixement modern que he adquirit al llarg de la
        meva formació.</div>
      </div>
    </section>
  );
}
