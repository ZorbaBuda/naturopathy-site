// import images
import Logo from "@/public/assets/newLogo.png";

import cliniqueHome from '@/public/assets/parolanaudiere-accueil-clinique.jpg'

import { IoMdArrowForward } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


export const headerData = {
  logo: Logo,
};



export const links = [
  {
    name: "Sobre mi",
    hash: "/sobre",
  },
  {
    name: "Serveis",
    hash: "/serveis",
  },
  {
    name: "Contacte",
    hash: "/contacte",
  },
];


export const heroData = {
  title: "Cuídate desde dentro",
  subtitle: [
    "Para tener más salud física y emocional",
    " Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.",
  ],
  btnText: "read more",
  btnIcon: <IoMdArrowForward />,
};






export const contactData = {
  title: "Get in touch with me:",
  info: [
    {
      title: "LA office",
      subtitle:
        "In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus",
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
      link: "Get location",
    },
    {
      title: "NYC office",
      subtitle:
        "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "1630 Elm Drive, New York City",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+49 34 36573355",
      },
      email: {
        icon: <FaEnvelope />,
        address: "contact@yourcompany.com",
      },
      link: "Get location",
    },
  ],
  form: {
    name: "Write your name here",
    email: "Write your email address",
    message: "Write your messages here",
    btnText: "Send it",
  },
};

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
      number: "65733558",
    },
    email: {
      icon: <FaEnvelope />,
      address: "contact@yourcompany.com",
    },
  },
  links: {
    title: "Enllaços",
    items: [
      { href: "/privacitat", name: "Política privacitat" },
      { href: "/sobre", name: "Sobre mi" },
      { href: "/serveis", name: "Serveis" },
      { href: "/contact", name: "Contacte" },
    ],
  },
  program: {
    title: "Working Time",
    items: [
      { name: "Mon - Tue / Appointment" },
      { name: "Wed - Fri / 10:00 - 9:00pm" },
      { name: "Sat / 10:00 - 6:00pm" },
      { name: "Sun / no work on this day" },
    ],
  },
  newsletter: {
    title: "Newsletter",
    subtitle:
      "Elit duis porttitor massa tellus nun in velit arcu posuere integer.",
    form: {
      placeholder: "Your email address",
      icon: <FiSend />,
    },
  },
};

//  Home data

export const homeData = {
  heroTitle: "Centre de naturopatia a Mataró",
  heroSubtitle: [
    "Us donem la benvinguda al nostre centre de naturopatia on us oferim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia.",
  ],
  linkHref: "/serveis",
  linkText: "Vull saber-ne més",
};

export const homeIntro = {
  title: `Cuida't des de dins`,
  label: 'Per a tenir més salut física i emocional',
  text1: `Sóc l’Anna Armengol, dietista integrativa i una gran apassionada de l’alimentació i la salut en totes les seves dimensions. T’ofereixo un assessorament nutricional individual, totalment personalitzat a les teves necessitats i objectius. T’acompanyo a crear nous hàbits que et permetin retrobar l’equilibri i gaudir del menjar mentre sumes salut en cada mossegada.`,
 text2: `¿Comencem?`,
  linkText: 'VULL SABER-NE MÉS',
 link: '/serveis',
 image: '/assets/parolanaudiere-accueil-clinique.jpg'
}

export const homeIntro2 = {
  title: `Naturopatia Mataró`,
 p: [
  `Un espai de salut integrativa on cuidar l’alimentació des de l’autoestima i el respecte per al nostre cos. Tenint en compte les emocions i el context de cada individu. Treballarem conjuntament per a trobar  l’equilibri que et permeti recuperar la salut física, emocional i augmentar l’energia vital.`,
  `Tot el que ens passa: dolors, estrès, insomni, males digestions, restrenyiment, mal de cap, apatia… està relacionat. Es tracta de començar  a establir canvis que, de mica en mica, retornin la salut al teu organisme. La part emocional està molt relacionada amb el sistema digestiu i el cos físic. Per tant, millorant les digestions, i la microbiota, contribuïm a equilibrar la part emocional. Perquè no som únicament un ésser que menja, sinó que el que pensem, el que sentim i la manera com mengem (el context) té un gran impacte en com digerim i absorbim els aliments. `,
  `Potser ara et sembla difícil canviar l’alimentació, millorar la relació amb el menjar, perdre pes… o creus que l’estrenyiment, les males digestions o altres malestars conviuran amb tu per sempre. Però creu-me, és possible canviar aquesta situació, i ho aconseguiràs. Treballarem perquè el teu organisme recuperi l’equilibri i puguis gaudir del menjar mentre cuides de la teva salut. I d’aquesta manera, et sentis cada dia millor amb el teu cos. Estàs a punt per començar el canvi cap a una vida, plena de salut?`,
 ],

  linkText: 'VULL COMENÇAR EL CANVI',
 link: '/contacte',
 image: '/assets/parolanaudiere-accueil-clinique.jpg'
}

export const homeBanner = "Diez gramos de prevención equivalen a un kilogramo de curación"

export const howCanHelp = {
  heading: {
    p: "Are you a medical or paramedical professional?",
    h2: "What can KPNI bring to your patient care?",
  },
  items: [
    { num: "01", text: "It helps you to focus on people, not just symptoms." },
    {
      num: "02",
      text: "It transforms your practice from reactive to proactive by addressing the origin of disease.",
    },
    {
      num: "03",
      text: "It provides you with an in depth health model based on the interconnection between neurological, endocrinological, immune and metabolic systems from an evolutionary perspective.",
    },
    {
      num: "04",
      text: "It empowers your patients to take a leading role in their health and wellbeing.",
    },
  ],
  image: '/assets/parolanaudiere-accueil-clinique.jpg',
  linkText: 'SABER MÉS',
  link: '/serveis/#serveis',
};

export const contactDataTest = {
  title: "Formulari de contacte",
  subtitle:
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
