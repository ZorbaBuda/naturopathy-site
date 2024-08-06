import { IoMdArrowForward } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import {
  FaPlay,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa6";
import ofIcon1 from "@/public/assets/icons/fruits.svg";
import ofIcon2 from "@/public/assets/icons/blood_cells.svg";
import ofIcon3 from "@/public/assets/icons/neurology.svg";
import ofIcon4 from "@/public/assets/icons/exercise.svg";
import ofIcon5 from "@/public/assets/icons/body.svg";

export const contactInfo = {
  phone: "+34 687 523 264",
  phoneIcon: <FaPhoneAlt />,
  phoneHref: "tel: +34687523264",
  address: "Camí de la Geganta 37, Mataró",
  addressProvince: "(Barcelona)",
  addressIcon: <FaMapMarkerAlt />,
  addressGoogleMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.1852203530543!2d2.43494545450863!3d41.54358669745555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b5186f42c7b7%3A0x74b41665392e8f26!2sCam%C3%AD%20de%20la%20Geganta%2C%2037%2C%2008302%20Matar%C3%B3%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1722871570211!5m2!1sen!2ses",
  email: "pacoaraz1311@gmail.com",
  emailIcon: <FaEnvelope />,
  emailHref: "mailto:pacoaraz1311@gmail.com",
  whatsappIcon: <FaWhatsapp />,
  whatsappHref:
    "https://api.whatsapp.com/send/?phone=34687523264&text&type=phone_number&app_absent=0",
};
export const links = [
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
export const homeData = {
  heroTitle: "El teu assesor de naturopatia a Mataró",
  heroSubtitle: ["Benvinguts a la nostra web"],
  linkHref: "/services",
  linkText: "Saber més",
};

//section1
export const homeIntro = {
  title: `Cuida't des de dins`,
  label: "Per a tenir més salut física i emocional",
  text1: `Sóc l’Anna Armengol, dietista integrativa i una gran apassionada de l’alimentació i la salut en totes les seves dimensions. T’ofereixo un assessorament nutricional individual, totalment personalitzat a les teves necessitats i objectius. T’acompanyo a crear nous hàbits que et permetin retrobar l’equilibri i gaudir del menjar mentre sumes salut en cada mossegada.`,
  text2: `¿Comencem?`,
  linkText: "Contacte",
  link: "/contact",
  image: "/assets/mortero.jpg",
};

//section2
export const homeIntro2 = {
  title: `Salut integral`,
  p: [
    `Un espai de salut integrativa on cuidar l’alimentació des de l’autoestima i el respecte per al nostre cos. Tenint en compte les emocions i el context de cada individu. Treballarem conjuntament per a trobar  l’equilibri que et permeti recuperar la salut física, emocional i augmentar l’energia vital.`,
    `Tot el que ens passa: dolors, estrès, insomni, males digestions, restrenyiment, mal de cap, apatia… està relacionat. Es tracta de començar  a establir canvis que, de mica en mica, retornin la salut al teu organisme. La part emocional està molt relacionada amb el sistema digestiu i el cos físic. Per tant, millorant les digestions, i la microbiota, contribuïm a equilibrar la part emocional. Perquè no som únicament un ésser que menja, sinó que el que pensem, el que sentim i la manera com mengem (el context) té un gran impacte en com digerim i absorbim els aliments. `,
    `Potser ara et sembla difícil canviar l’alimentació, millorar la relació amb el menjar, perdre pes… o creus que l’estrenyiment, les males digestions o altres malestars conviuran amb tu per sempre. Però creu-me, és possible canviar aquesta situació, i ho aconseguiràs. Treballarem perquè el teu organisme recuperi l’equilibri i puguis gaudir del menjar mentre cuides de la teva salut. I d’aquesta manera, et sentis cada dia millor amb el teu cos. Estàs a punt per començar el canvi cap a una vida, plena de salut?`,
  ],

  linkText: "Sobre nosaltres",
  link: "/about",
  image: "/img/MonsteraDeliciosa.jpg",
};

//section3
export const howCanHelp = {
  title: "Serveis que oferim",

  items: [
    { svg: ofIcon1, label: "Nutrició i dietètica" },
    { svg: ofIcon2, label: "Terapia ortomolecular" },
    { svg: ofIcon3, label: "PsicoNeuroImmunoEndocrinologia" },
    { svg: ofIcon4, label: "Teràpia antiaging" },
    { svg: ofIcon5, label: " Microimmunoteràpia " },
  ],
  image: "/assets/parolanaudiere-accueil-clinique.jpg",
  linkText: "Saber més",
  link: "/services/#services",
};

//about me
export const aboutHero = {
  title: "Hola! Soc l'Anna Armengol",
  text1: `Dietista Integrativa i una gran apassionada de la salut en totes les seves dimensions.`,
  text2: `Acompanyo a les persones a millorar la seva alimentació des de l’autocura i el respecte pel cos. Tenint sempre en compte les necessitats i gustos personals.`,
};

export const aboutHistory = {
  title: `La meva història`,
  text1: `El meu contacte amb l’alimentació saludable va començar a l’herboristeria l’espígol, a Vilassar de Mar. Una botiga molt acollidora, plena d’aliments ecològics, fitoteràpia i suplements naturals. Vaig començar a treballar-hi amb 19 anys, mentre compaginava la feina amb la carrera de Belles Arts (una de les meves grans passions, després de la nutrició).`,
  text2: `Mentre treballava a l’herbolari, vaig començar a llegir i investigar sobre nutrició. De mica en mica, em vaig introduir  en les bases de l’alimentació saludable i ho vaig aplicar a la meva manera d’alimentar-me. Aleshores vaig poder observar tots els canvis positius que té seguir una alimentació i estil de vida saludable. Per anomenar-ne alguns: vaig regular el trànsit intestinal, el meu pes es va estabilitzar, descansava millor, vaig regular el cicle menstrual, tenia més energia i em sentia més estable emocionalment`,
  text3: `Estava tan contenta i enamorada de l’alimentació saludable que sentia la necessitat de transmetre aquesta passió a altres persones. Per aquest motiu, vaig decidir formar-me com a Tècnica Superior en Dietètica per a poder acompanyar a les persones en el seu canvi d’hàbits alimentaris des d’una perspectiva holística de la salut i de l’organisme.`,
};

export const aboutCurriculum = {
  title: "Formació",
  pItems: [
    `TÈCNICA SUPERIOR EN DIETÈTICA I NUTRICIÓ INTEGRATIVA (Institut FP Sanitària Roger de Llúria)`,

    `CURS D’INTERPRETACIÓ D’ANALÍTIQUES PER A DIETISTES I NUTRICIONISTES (Institut FP Sanitària Roger de Llúria)`,

    `CURS D’ALIMENTACIÓ FODMAP PER A TRACTAR PATOLOGIES DIGESTIVES (Nutridigestivas)`,

    `POSTGRAU EN MICROBIOTA (Regenera)`,

    `POSTGRAU EN SISTEMA DIGESTIU (Regenera)`,

    `COACH NUTRICIONAL (Nutritional coaching)`,

    `ESPECIALITZACIÓ EN TRASTORNS DE LA CONDUCTA ALIMENTÀRIA (ICNS)`,
  ],
};

//services
export const servicesHero = {
  title: "Consulta de nutrició integrativa",
  text1: `La dieta té un gran impacte en el nostre organisme i, alimentar-te de forma adequada, et permetrà prevenir o millorar trastorns i malestars recurrents, afavorir la resposta adaptativa del cos en diferents etapes de la vida i assegurar l’aportació de tots els nutrients necessaris per al teu organisme.`,

  text2: `La nutrició o dietètica integrativa treballa tenint en compte l’ésser humà en totes les seves dimensions, tant físiques com emocionals. A la consulta, treballem el canvi d’hàbits alimentaris de manera totalment personalitzada a les teves necessitats i objectius. Som el que mengem, digerim i absorbim. A través del canvi d’hàbits, podràs augmentar l’energia vital i millorar la teva salut. Es tracta de trobar l’equilibri que et permeti gaudir del menjar escoltant el que el teu cos necessita per estar saludable.`,

  titleText3: `T’ajudo a tractar i millorar:`,

  text3: `Restrenyiment, síndrome metabòlica, diabetis, anèmia, hipertensió, colesterol alt, osteoporosi, trastorns digestius, dolors menstruals o problemes de fertilitat, intoleràncies i al·lèrgies alimentàries, trastorns de la glàndula tiroide (hipotiroïdisme o hipertiroïdisme), malalties autoimmunes… `,

  titleText4: `I també si vols:`,

  text4: `Millorar la teva relació amb l’alimentació, equilibrar el teu pes, millorar la resposta adaptativa de l’organisme en etapes concretes de la vida com la Menopausa. I també en la transició cap a  dietes específiques, per assegurar l’aportació de tots els nutrients que el teu cos necessita.`,
};

export const servicesCons = {
  title1: `Consulta online i presencial`,
  title2: `Tu esculls el model que millor s’adapta a les teves necessitats`,
  text: `La meva manera de treballar no es centra exclusivament en el pes, sinó que és una eina més que pot ajudar a valorar el progrés en alguns casos.  Pesar-te a consulta serà opcional, sempre que tu et sentis  còmode amb aquesta dada i segons siguin els teus objectius. L’important és que aprenguis les eines per a millorar la teva alimentació i per crear nous hàbits adaptats als teus horaris i estil de vida.`,
};

export const servicesVisits = {
  title: `Funcionament de les visites`,
  firstVisit: {
    title: `Primera visita`,
    subtitle: `Durada: 1 h`,
    text1: `Valoració nutricional completa: Parlarem sobre el motiu de consulta, els teus objectius, la història clínica i dietètica i també d’altres aspectes relacionats amb la teva salut, hàbits i estil de vida.`,
    text2: `Valoració d’analítiques: Porta les últimes analítiques que t’hagis fet.`,
    text3: `Què t’enduràs?`,
    items: [
      `Establiment d’objectius i pla d’acció cap als nous hàbits alimentaris.`,
      `Recomanacions de salut i menú personalitzat per correu electrònic (en consultes online) i opció impresa en consultes presencials.`,
      `Aclariment de dubtes entre visita i visita per whatsapp (resposta entre les 24-48 h següents).`,
    ],
    price: `Preu primera visita: 65 €`,
  },
  futureVisit: {
    title: `Visita de seguiment`,
    subtitle: `Durada:  45 minuts`,
    text1: `Les visites de seguiment tenen una periodicitat d’entre quinze dies i un mes, segons les necessitats individuals.`,
    text2: `Revisió, valoració i modificació del pla nutricional, segons anem avançant en els objectius inicials.`,
    text3: `Aclariment de dubtes sobre les pautes o aspectes concrets d’aliments, dietes, nutrients, suplements…`,
    text4: `Educació nutricional i alimentària.`,
    text5: `Què t’enduràs?`,
    items: [
      `Infografies, receptes, guies i altres recursos sobre salut i alimentació.`,
      `Recomanacions de salut i menú personalitzat.`,
      `Aclariment de dubtes entre visita i visita per whatsapp (resposta entre les 24-48 h següents).`,
    ],
    price: `Preu visita de seguiment: 50 €`,
  },
};

// export const servicesVisits = {
//   title: `Funcionament de les visites`,
//   firstVisit: {
//     title: `Primera visita`,
//     subtitle: `Durada: 1 h`,
//     text1: `Valoració nutricional completa: Parlarem sobre el motiu de consulta, els teus objectius, la història clínica i dietètica i també d’altres aspectes relacionats amb la teva salut, hàbits i estil de vida.`,
//     text2: `Valoració d’analítiques: Porta les últimes analítiques que t’hagis fet.`,
//     text3: `Què t’enduràs?`,
//     items: [
//       `Establiment d’objectius i pla d’acció cap als nous hàbits alimentaris.`,
//       `Recomanacions de salut i menú personalitzat per correu electrònic (en consultes online) i opció impresa en consultes presencials.`,
//       `Aclariment de dubtes entre visita i visita per whatsapp (resposta entre les 24-48 h següents).`,
//     ],
//     price: `Preu primera visita: 65 €`
//   },
//   futureVisit: {
//     title: `Visita de seguiment`,
//     subtitle: `Durada:  45 minuts`,
//     text1: `Les visites de seguiment tenen una periodicitat d’entre quinze dies i un mes, segons les necessitats individuals.`,
//     text2: `Revisió, valoració i modificació del pla nutricional, segons anem avançant en els objectius inicials.`,
//     text3: `Aclariment de dubtes sobre les pautes o aspectes concrets d’aliments, dietes, nutrients, suplements…`,
//     text4: `Educació nutricional i alimentària.`,
//     text5: `Què t’enduràs?`,
//     items: [
//       `Infografies, receptes, guies i altres recursos sobre salut i alimentació.`,
//       `Recomanacions de salut i menú personalitzat.`,
//       `Aclariment de dubtes entre visita i visita per whatsapp (resposta entre les 24-48 h següents).`,
//     ],
//     price: `Preu visita de seguiment: 50 €`
//   },
// };

export const servicesReserve = {
  title: `Sents que ha arribat el moment de millorar la teva alimentació?`,
  text: `T’acompanyo a crear nous hàbits, plens de salut. Un pla nutricional totalment adaptat a les teves necessitats i objectius.`,
  linkHref: `/reservation`,
  linkText: `Comprovar disponibilitat i reservar cita`,
};

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
  message: `Comprova la disponibilitat i selecciona una data i hora. T'enviarem un missatge per confirmar.`
}


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
      name: "Camí Ral 34, Mataró (BCN)",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+34 657 335 588",
    },
    email: {
      icon: <FaEnvelope />,
      address: "contact@yourcompany.com",
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


export const contactDataTest = {
  title: "Contacta'ns",
  p:
    "Escriu-me un missatge en aquest formulari si tens qualsevol dubte sobre el funcionament de la consulta o si vols comentar-me el teu cas personal.",
  info: [
    {
      title: "Consulta a Mataro",
      subtitle: "Hores convingudes",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "784 Norman Street, Los Angeles",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+49 93 30493943",
      },
      email: {
        icon: <FaEnvelope />,
        address: "contact@yourcompany.com",
      },
      link: "Obtenir localització",
    },
  ],
  form: {
    name: "Nom i cognoms*",
    email: "Email*",
    telefon: "Telefon*",
    message: "Missatge",
    btnText: "Enviar missatge",
    privacitat: "He llegit i accepto la política de privacitat.*",
    informacio:
      "Vull estar al dia de novetats, xerrades i rebre informació gratuïta per correu electrònic.",
  },
};
