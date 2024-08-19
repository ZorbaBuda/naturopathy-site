
import {
  FaPlay,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";


import service1 from "@/public/assets/services/services1.jpg";
import service2 from "@/public/assets/services/services2.jpg";
import service3 from "@/public/assets/services/services3.jpg";
import service4 from "@/public/assets/services/services4.jpg";
import service5 from "@/public/assets/services/services5.jpg";

export const contactInfo = {
  phone: "+34 600 581 515",
  phoneIcon: <FaPhoneAlt />,
  phoneHref: "tel: +34600581515",
  address: "C/Emili Cabanyes 20, Mataró",
  addressProvince: "(Barcelona)",
  addressIcon: <FaMapMarkerAlt />,
  addressGoogleMaps:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.2834422806122!2d2.435718211925455!3d41.541459786303896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b518df4ef9dd%3A0xa2785bf79b118fe1!2sCarrer%20d;Emili%20Caba%C3%B1es%2C%2020%2C%2008302%20Matar%C3%B3%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1723650714911!5m2!1sen!2ses",
  email: "cconstanseu@gmail.com",
  emailIcon: <FaEnvelope />,
  emailHref: "mailto:cconstanseu@gmail.com",
  whatsappIcon: <FaWhatsapp />,
  whatsappHref:
    "https://api.whatsapp.com/send/?phone=34600581515&text&type=phone_number&app_absent=0",
};
export const links = [
  {
    name: "Inici",
    hash: "/",
    path: "inici",
  },
  {
    name: "Sobre mi",
    hash: "/about",
    path: "about",
  },
  {
    name: "Serveis",
    hash: "/services",
    path: "services",
  },
  {
    name: "Contacte",
    hash: "/contact",
    path: "contact",
  },
  {
    name: "Reserva",
    hash: "/schedule",
    path: "schedule",
  },
];

//homePage

//hero
export const homeHero = {
  heroTitle: `“La millor medicina de totes és ensenyar-li a la gent com no necessitarla”`,
  heroSubtitle: `Hipòcrates`,
  linkHref: "/services",
  linkText: "Saber més",
};

export const homeIntro1 = {
  title: `Una visió holística`,
  text1: `La salut integral fa referència a un enfocament holístic del benestar que abasta no només la salut física, sinó també la mental, emocional i social. Implica tenir cura del teu cos a través d'una bona alimentació, exercici regular i descans adequat, però també és important prestar atenció a la teva salut emocional i mental, cosa que inclou gestionar l'estrès, mantenir relacions saludables i buscar suport quan ho necessitis.`,
  text2: `T'agradaria saber més sobre algun aspecte específic de la salut integral?`,
  linkText: "Més sobre mi",
  link: "/about",
};

export const homeIntro2 = {
  title: `Anar a les arrels`,
  text1: `Sóc Christian Constanseu, naturopata apassionat per la salut i el benestar integral. La meva missió és acompanyar-te en el teu camí cap a una vida més saludable i equilibrada, utilitzant mètodes naturals i holístics.
Ens centrarem en tractar l'arrel dels problemes de salut, no només els símptomes, i en empoderar-te perquè prenguis decisions informades sobre el teu benestar.`,
  text2: `Junts, dissenyarem un pla personalitzat que s'adapti al teu estil de vida i t'ajudi a assolir un estat òptim de salut.`,
  text3: `Espero poder acompanyar-te en aquest bell viatge cap al benestar`,
  linkText: "Teràpies",
  link: "/services",
  image: "/assets/mortero.jpg",
};

export const homeIntro3 = {
  title: "Teràpies al teu abast",

  items: [
    { href: "/services/#nutricio", label: "Nutrició i dietètica" },
    { href: "/services/#ortomolecular", label: "Terapia ortomolecular" },
    { href: "/services/#pnie", label: "PsicoNeuroImmunoEndocrinologia" },
    { href: "/services/#antiaging", label: "Teràpia antiaging" },
    { href: "/services/#micro", label: " Microimmunoteràpia " },
  ],
  image: "/assets/parolanaudiere-accueil-clinique.jpg",
  linkText: "Saber més",
  link: "/services/",
};

//about me

export const about1 = {
  title: "Arrels",
  text: `Vaig estudiar fitoteràpia per la passió per les plantes que vaig heretar de la meva àvia. Durant els meus estudis, vaig descobrir que la fitoteràpia no sols és una pràctica mil·lenària, sinó que també representa una manera de connectar amb el coneixement tradicional i amb la terra mateixa. Vaig aprendre a identificar les propietats medicinals de diferents plantes, a preparar infusions, extractes i ungüents, i a utilitzar aquests recursos naturals per a millorar la salut i el benestar de les persones.`,
};
export const about2 = {
  title: "Arrels",
  text: `Tot això, em va portar a realitzar estudis complets de naturopatia i diferents màsters que aborden teràpies integratives per a la cura de l'ésser i la salut. Vaig comprendre que la veritable sanació va més enllà de tractar símptomes aïllats; es tracta de veure a l'ésser humà com un tot, on cos, ment i esperit estan interconnectats.`,
};
export const about3 = {
  title: "Arrels",
  text: `Aquests estudis van ampliar la meva visió i em van permetre incorporar noves eines terapèutiques a la meva pràctica. Vaig aprendre sobre la importància de l'alimentació natural, l'equilibri emocional, i la influència de l'entorn en la salut. Em vaig formar en teràpies com la ortomolecular, microimmunoteràpia, psiconeuroinmunoendocrinología, teràpia aplicada, entre altres, totes elles complementàries, ja que, en conjunt, em van oferir un enfocament holístic per a tractar als meus pacients.`,
};
export const about4 = {
  title: "Arrels",
  text: `Cada màster que vaig completar em va aportar un nou nivell de comprensió i un profund respecte per la capacitat innata del cos per a curar-se quan se li brinda el suport adequat. Vaig descobrir que la neuropatia no sols se centra en la prevenció i el tractament de malalties, sinó també en la promoció d'un estil de vida saludable que fomenti el benestar integral. Aquesta filosofia ressonava profundament en mi, entenent que la veritable salut prové de viure en harmonia amb la naturalesa.`,
};
export const about5 = {
  title: "Arrels",
  text: `Avui dia, la meva pràctica es basa en una combinació d'aquestes teràpies naturals, sempre adaptades a les necessitats individuals de cada persona. Treball amb l'objectiu d’apoderar als meus pacients, educant-los sobre com poden prendre el control de la seva salut i benestar a través de decisions informades i conscients. El meu enfocament és oferir solucions personalitzades que promoguin l'equilibri i la vitalitat, honrant així no sols la saviesa tradicional que vaig heretar, sinó també el coneixement modern que he adquirit al llarg de la meva formació.`,
};

export const abouts = [
  {
    text: `Vaig estudiar fitoteràpia per la passió per les plantes que vaig heretar de la meva àvia. Durant els meus estudis, vaig descobrir que la fitoteràpia no sols és una pràctica mil·lenària, sinó que també representa una manera de connectar amb el coneixement tradicional i amb la terra mateixa. Vaig aprendre a identificar les propietats medicinals de diferents plantes, a preparar infusions, extractes i ungüents, i a utilitzar aquests recursos naturals per a millorar la salut i el benestar de les persones.`,
    image: "/assets/mortero.jpg",
  },
  {
    text: `Tot això, em va portar a realitzar estudis complets de naturopatia i diferents màsters que aborden teràpies integratives per a la cura de l'ésser i la salut. Vaig comprendre que la veritable sanació va més enllà de tractar símptomes aïllats; es tracta de veure a l'ésser humà com un tot, on cos, ment i esperit estan interconnectats.`,
    image: "/assets/mortero.jpg",
  },
  {
    text: `Aquests estudis van ampliar la meva visió i em van permetre incorporar noves eines terapèutiques a la meva pràctica. Vaig aprendre sobre la importància de l'alimentació natural, l'equilibri emocional, i la influència de l'entorn en la salut. Em vaig formar en teràpies com la ortomolecular, microimmunoteràpia, psiconeuroinmunoendocrinología, teràpia aplicada, entre altres, totes elles complementàries, ja que, en conjunt, em van oferir un enfocament holístic per a tractar als meus pacients.`,
    image: "/assets/mortero.jpg",
  },
  {
    text: `Cada màster que vaig completar em va aportar un nou nivell de comprensió i un profund respecte per la capacitat innata del cos per a curar-se quan se li brinda el suport adequat. Vaig descobrir que la neuropatia no sols se centra en la prevenció i el tractament de malalties, sinó també en la promoció d'un estil de vida saludable que fomenti el benestar integral. Aquesta filosofia ressonava profundament en mi, entenent que la veritable salut prové de viure en harmonia amb la naturalesa.`,
    image: "/assets/mortero.jpg",
  },
  {
    text: `Avui dia, la meva pràctica es basa en una combinació d'aquestes teràpies naturals, sempre adaptades a les necessitats individuals de cada persona. Treball amb l'objectiu d’apoderar als meus pacients, educant-los sobre com poden prendre el control de la seva salut i benestar a través de decisions informades i conscients. El meu enfocament és oferir solucions personalitzades que promoguin l'equilibri i la vitalitat, honrant així no sols la saviesa tradicional que vaig heretar, sinó també el coneixement modern que he adquirit al llarg de la meva formació.`,
    image: "/assets/mortero.jpg",
  },
];



//services
export const servicesDetail = [
  {
    id: "nutricio",
    image: service1,
    title: `Nutrició i dietètica`,
    texts: [
      `La nutrició i dietètica se centren en com els aliments afecten la nostra salut i benestar.`,
      `La nutrició estudia els nutrients que necessitem com carbohidrats, proteïnes, greixos, vitamines i minerals, i com aquests influeixen en el nostre cos.`,
      `D'altra banda, la dietètica s'enfoca en l'aplicació pràctica d'aquesta informació, ajudant les persones a planificar dietes equilibrades i saludables segons les seves necessitats individuals, ja sigui per a mantenir un pes adequat, millorar la salut o tractar condicions específiques.`,
      `Totes dues disciplines són fonamentals per a promoure una vida saludable a través d'una alimentació adequada.`,
    ],
  },
  {
    id: "ortomolecular",
    image: service2,
    title: `Terapia ortomolecular`,
    texts: [
      `La teràpia ortomolecular és un enfocament que busca mantenir la salut i prevenir malalties a través de l'equilibri de les molècules en el cos, mitjançant la nutrició i l'ús de suplements.`,
      `Es basa en la idea que moltes malalties poden ser tractades o previngudes corregint deficiències nutricionals i optimitzant la ingesta de vitamines, minerals i altres nutrients.`,
      `Cada persona té necessitats úniques i, en personalitzar la dieta i els suplements, es pot millorar la salut general i el benestar.`,
    ],
  },
  {
    id: "pnie",
    image: service3,
    title: `PNIE`,
    texts: [
      `La psiconeuroinmunoendocrinología és una disciplina que estudia la interconnexió entre la ment (psicologia), el sistema nerviós, el sistema immunològic i el sistema endocrí.`,
      `Se centra en com els pensaments, emocions i comportaments poden influir en la salut física i en la resposta del cos a malalties.`,
      `Per exemple, l'estrès emocional pot afectar la funció immunològica i, al seu torn, la salut general.`,
      `Aquesta àrea d'estudi cerca entendre com aquests sistemes interactuen i com es poden utilitzar aquests coneixements per a millorar el benestar i tractar diverses condicions de salut.`,
      `És un camp fascinant que ressalta la connexió entre cos i ment.`,
    ],
  },
  {
    id: "antiaging",
    image: service4,
    title: `Terapia antiaging`,
    texts: [
      `La teràpia antiaging es refereix a un conjunt de tractaments i enfocaments dissenyats per a alentir el procés d'envelliment i millorar la qualitat de vida a mesura que les persones envelleixen.`,
      `L'envelliment és un procés fisiològic de deterioració de les funcions, òrgans i teixits de l'organisme.`,
      `La teràpia antiaging és una medicina preventiva que suplementa les necessitats de l'organisme a mesura que envellim per a ajudar-nos a estar en les millors condicions.`,
      `Aquesta medicina està indicada per a persones amb més de 35 anys que desitgen que la seva activitat física i mental millorin, mantenint les millors condicions físiques i intel·lectuals, prolongant la seva vida activa.`,
    ],
  },
  {
    id: "micro",
    image: service5,
    title: `Microinmunoteràpia`,
    texts: [
         `La microimmunoteràpia és un tractament dirigit a regular el sistema immunològic mitjançant la utilització de substàncies inmunomoduladores particularment interessants pel seu rol actiu en la regulació de la resposta immunitària.`,  
         `És un dels principals tractaments específics enfront de malalties relacionades amb el sistema immunitari.`,
         `El sistema immune ens defensa activament contra patògens com els virus i altres agents nocius però també és el responsable que tolerem elements estranys beneficiosos com són els aliments, la flora intestinal i fins i tot els teixits propis evitant mecanismes d'autoimmunitat.`,
         `Així, en el seu òptim funcionament, és capaç de mantenir la balança entre aquestes respostes en el just equilibri.`,
         `La microimmunoteràpia representa una nova teràpia que no substitueix al sistema immunitari, ni el bloqueja ni el força, sinó que l'informa per a millorar-lo o corregir-lo, trobant d'aquesta manera la millor manera de respondre a les agressions.`,
         `Aquesta informació se subministra al pacient directament a la xarxa limfàtica via sublingual, que és l'entrada natural i directa al sistema immunitari.`,
    ]
  },
];



export const servicesFAQ = {
  title: "Preguntes freqüents",
  items: [
    {
      title: "Pregunta 1",
      text: "Nous nous assurons de maintenir la relation de confiance en vous offrant des conseils personnalisés et en vous administrant des soins de qualité impeccable. Nous vous promettons une approche humaine et transparente.",
    },
    {
      title: "Pregunta 2",
      text: "Nous prenons en compte la réalité de nos patients en nous assurant que leur bien-être soit au cœur de nos interventions. Ainsi, chacun reçoit un traitement humain et personnalisé.",
    },
    {
      title: "Pregunta 3",
      text: "Votre entière satisfaction est primordiale à nos yeux. Les traitements prodigués sont exécutés avec professionnalisme afin que les résultats soient durables. Nous œuvrons dans une ambiance chaleureuse et bienveillante.",
    },
  ],
};

export const schedule = {
  message: `Comprova la disponibilitat i selecciona una data i hora. Deixa les teves dades de contacte i t'enviarem un missatge per confirmar.`,
};

//footer
export const footerData = {
  services: {
    title: "Serveis",
    items: [
      { name: "Nutrició i dietètica" },
      { name: "Terapia ortomolecular" },
      { name: "PsicoNeuroImmunoEndocrinologia" },
      { name: "Teràpia antiaging" },
      { name: "Microimmunoteràpia" },
    ],
  },
  contact: {
    title: "Contacte",

    address: {
      icon: <FaMapMarkerAlt />,
      name: "C/ Emili Cabanyes 20, Mataró (BCN)",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+34 600 581 515",
    },
    email: {
      icon: <FaEnvelope />,
      address: "cconstanseu@gmail.com",
    },
  },
  links: {
    title: "Enllaços",
    items: [
      { href: "/about", name: "Sobre mi" },
      { href: "/services", name: "Serveis" },
      { href: "/contact", name: "Contacte" },
      { href: "/reservation", name: "Reserva" },
    ],
  },

  termes: {
    title: "Termes",

    terms: { href: "/termes-us", name: "Termes d'us" },
    privacy: { href: "/privacy", name: "Política de privacitat" },
  },
};

//form
//contact

export const contactFormData = {
  title: "Explica'ns el teu cas",
  p: "Contacta'ns sense compromís mitjançant el formulari si tens dubtes, vols comentar el teu cas personal o si vols tenir més informació sobre les teràpies que realitzo. O també, si ho prefereixes, contacta'm a través de whatsapp, correu electronic o telèfon. ",
  formFields: {
    name: "Nom*",
    email: "Email*",
    message: "Missatge",
    btnText: "Enviar",
    privacitat: "He llegit i accepto la política de privacitat.*",
    privacyLink: "Veure la política de privacitat",
    informacio:
      "Vull estar al dia de novetats, xerrades i rebre informació gratuïta per correu electrònic.",
  },
  formSchema: {
    name: {
      required: 'Es requereix un nom',
      min: 'Mínim 3 caràcters',
      max: 'Màxim 30 caràcters',
      invalid: 'Només lletres, nombres o espais',
      start: 'Ha de començar per una lletra',
    },
    email: {
      required: 'Es requereix un email',
      invalid: 'Invàlid email',
      },
    message: {
      required: 'Introdueix un missatge',
      max: 'Màxim 3000 caràcters',
    },
    privacy: 'Accepta la política de privacitat'
    }
  
};
