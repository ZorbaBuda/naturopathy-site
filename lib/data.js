// import images
import Logo from '@/public/img/header/newLogo.png';
import GalleryImg1 from '@/public/img/gallery/1.png';
import GalleryImg2 from '@/public/img/gallery/2.png';
import GalleryImg3 from '@/public/img/gallery/3.png';
import GalleryImg4 from '@/public/img/gallery/4.png';
import GalleryImg5 from '@/public/img/gallery/5.png';
import GalleryImg6 from '@/public/img/gallery/6.png';
import GalleryImg7 from '@/public/img/gallery/7.png';
import GalleryImg8 from '@/public/img/gallery/8.png';
import GalleryImg9 from '@/public/img/gallery/kitchen.jpeg';
import QuoteImg from '@/public/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

// data.js

// While both href and hash can be used to link to sections within a page, href is more general and widely recognized in HTML contexts. hash, on the other hand, is more specific to fragment identifiers and is commonly used in JavaScript and routing scenarios. For the sake of consistency and clarity, choose the one that best fits your application's context and the conventions used in your codebase.

// export const navLinksData = {
//   items: [
//     { href: '#home', name: 'Home' },
//     { href: '#about', name: 'About' },
//     { href: '#gallery', name: 'Gallery' },
//     { href: '#interview', name: 'Interview' },
//     { href: '#articles', name: 'Articles' },
//     { href: '#contact', name: 'Contact' },
//   ],
// };

export const links = [
  {
    name: 'Layouts',
    hash: '/layouts',
  },
  {
    name: 'Inici',
    hash: '/',
  },
  {
    name: 'Sobre mi',
    hash: '/sobre',
  },
  {
    name: 'Serveis',
    hash: '/serveis',
  },
  {
    name: 'Contacte',
    hash: '/contacte',
  }
];

// export const links = [
//   {
//     name: 'Home',
//     hash: '#home',
//   },
//   {
//     name: 'About',
//     hash: '#about',
//   },
//   {
//     name: 'Gallery',
//     hash: '/gall-ery',
//   },
//   {
//     name: 'Interview',
//     hash: '#interview',
//   },
//   {
//     name: 'Articles',
//     hash: '#articles',
//   },
//   {
//     name: 'Contact',
//     hash: '#contact',
//   },
// ];

export const socialData = [
  { href: '#', icon: <GrFacebookOption /> },
  { href: '#', icon: <IoLogoInstagram /> },
  { href: '#', icon: <IoLogoPinterest /> },
  { href: '#', icon: <IoLogoTwitter /> },
  { href: '#', icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: 'Cuídate desde dentro',
  subtitle: [
    'Para tener más salud física y emocional',
    ' Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.',
  ],
  btnText: 'read more',
  btnIcon: <IoMdArrowForward />,
};



export const aboutData = {
  title: 'My Story:',
  subtitle1:
    'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',
  subtitle2:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
  subtitle3:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
  btnText: 'Know more',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'Check my gallery:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg9,
      original: GalleryImg9,
      width: 465,
      height: 540,
    },
  ],
};

export const interviewData = {
  title:
    '“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: 'Jack Geoffrey',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Tattoo Artist',
  },
];

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'LA office',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '784 Norman Street, Los Angeles',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 93 30493943',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
    {
      title: 'NYC office',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 34 36573355',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'About void tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '1630 Elm Drive, New York City',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+49 34 36573355',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/privacitat', name: 'Política privacitat' },
      { href: '#gallery', name: 'My gallery' },
      { href: '/', name: 'My services' },
      { href: '#contact', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },

};

//  Home data 

export const homeData = {
  title: 'La alternativa natural',
  subtitle: [
    'El teu naturopata a Mataró',
  ],
  section1Title: `Cuida't des de dins per a tenir més salut física i emocional`,
  section1Subtitle: `Sóc l’Anna Armengol, dietista integrativa i una gran apassionada
   de l’alimentació i la salut en totes les seves dimensions. T’ofereixo un assessorament
    nutricional individual, totalment personalitzat a les teves necessitats i objectius. 
    T’acompanyo a crear nous hàbits que et permetin retrobar l’equilibri i gaudir del 
    menjar mentre sumes salut en cada mossegada.
      ¿Comencem?`,
  section2Title: `Aprèn a escoltar el que et demana el teu cos i gaudeix de l'alimentació saludable sense dietes restrictives`,
  section2Subtitle:`Un espai de salut integrativa on cuidar l’alimentació des de l’autoestima i el respecte per al nostre cos. Tenint en compte les emocions i el context de cada individu. Treballarem conjuntament per a trobar  l’equilibri que et permeti recuperar la salut física, emocional i augmentar l’energia vital.
                    \nTot el que ens passa: dolors, estrès, insomni, males digestions, restrenyiment, mal de cap, apatia… està relacionat. Es tracta de començar  a establir canvis que, de mica en mica, retornin la salut al teu organisme. La part emocional està molt relacionada amb el sistema digestiu i el cos físic. Per tant, millorant les digestions, i la microbiota, contribuïm a equilibrar la part emocional. Perquè no som únicament un ésser que menja, sinó que el que pensem, el que sentim i la manera com mengem (el context) té un gran impacte en com digerim i absorbim els aliments. 
                     \nPotser ara et sembla difícil canviar l’alimentació, millorar la relació amb el menjar, perdre pes… o creus que l’estrenyiment, les males digestions o altres malestars conviuran amb tu per sempre. Però creu-me, és possible canviar aquesta situació, i ho aconseguiràs. Treballarem perquè el teu organisme recuperi l’equilibri i puguis gaudir del menjar mentre cuides de la teva salut. I d’aquesta manera, et sentis cada dia millor amb el teu cos. Estàs a punt per començar el canvi cap a una vida, plena de salut?`,
 btnText: 'Vull saber-ne més',
  btnIcon: <IoMdArrowForward />,

  
};

export const contactDataTest = {
  title: 'Formulari de contacte',
  subtitle: 'Escriu-me un missatge en aquest formulari si tens qualsevol dubte sobre el funcionament de la consulta o si vols comentar-me el teu cas personal.',
  info: [
    {
      title: 'Consulta a Mataro',
      subtitle:
        'Hores convingudes',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '784 Norman Street, Los Angeles',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 93 30493943',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Obtenir localització',
    },
    
      
  ],
  form: {
    name: 'Nom i cognoms*',
    email: 'Email*',
    telefon: 'Telefon*',
    message: 'Missatge',
    btnText: 'Enviar missatge',
    privacitat: 'He llegit i accepto la política de privacitat.*',
    informacio: 'Vull estar al dia de novetats, xerrades i rebre informació gratuïta per correu electrònic.'
  },
};
