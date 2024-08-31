
import {
  FaPlay,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTelegram,
} from "react-icons/fa";

import service1 from "@/public/assets/services/services1.jpg";
import service2 from "@/public/assets/services/services2.jpg";
import service3 from "@/public/assets/services/services3.jpg";
import service4 from "@/public/assets/services/services4.jpg";
import service5 from "@/public/assets/services/services5.jpg";

export const serviceImages = [service1, service2, service3, service4, service5];

export const contactInfo = {
  phoneIcon: <FaPhoneAlt />,
  addressIcon: <FaMapMarkerAlt />,
  addressGoogleMaps:
    // "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.2834422806122!2d2.435718211925455!3d41.541459786303896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b518df4ef9dd%3A0xa2785bf79b118fe1!2sCarrer%20d;Emili%20Caba%C3%B1es%2C%2020%2C%2008302%20Matar%C3%B3%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1723650714911!5m2!1sen!2ses",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13711.414269591583!2d2.4382989999999927!3d41.541456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b518df4ef9dd%3A0xa2785bf79b118fe1!2sCarrer%20d;Emili%20Caba%C3%B1es%2C%2020%2C%2008302%20Matar%C3%B3%2C%20Barcelona!5e1!3m2!1sen!2ses!4v1725017176912!5m2!1sen!2ses",

  emailIcon: <FaEnvelope />,

  whatsappIcon: <FaWhatsapp />,
  telegramIcon: <FaTelegram />,
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

];


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
    message: "Missatge*",
    phone: "Telefon (opcional)",
    btnText: "Enviar",
    privacitat: "He llegit i accepto la política de privacitat.*",
    privacyLink: "Veure la política de privacitat",
    informacio:
      "Vull estar al dia de novetats, xerrades i rebre informació gratuïta per correu electrònic.",
  },
  formSchema: {
    name: {
      required: "Required",
      min: "Min 3 chars",
      max: "Max 30 chars",
      invalid: "Invalid",
      start: "Invalid",
    },
    phone: {
      invalid: "telefon invàlid",
    },
    email: {
      required: "Required",
      invalid: "Incorrect email (required @)",
    },
    message: {
      required: "Required",
      max: "Max 3000 chars",
    },
    privacy: "Accept",
  },
};
