import {MetadataRoute} from 'next';
import {locales, defaultLocale, host} from '@/config';
import {getPathname} from '@/navigation';

// https://spacejelly.dev/posts/how-to-add-a-sitemap-rss-feed-in-next-js-app-router

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    getEntry('/', locales[0]), 
    getEntry('/', locales[1]), 
    getEntry('/about', locales[0]),
    getEntry('/about', locales[1]),
    getEntry('/services', locales[0]),
    getEntry('/services', locales[1]),
   getEntry('/contact', locales[0]),
   getEntry('/contact', locales[1]),
  ];
}

type Href = Parameters<typeof getPathname>[0]['href'];



function getEntry(href: Href, locale:(typeof locales)[number]) {
  // console.log(getUrl(href, locales[0]))
  // console.log(getUrl(href, locales[1]))
  return {
    url: getUrl(href, locale),
    // alternates: {
    //   languages: Object.fromEntries(
    //     locales.map((locale) => [locale, getUrl(href, locale)]),
    //   )
    // },
    lastModified: new Date().toISOString(),
  };
}

function getUrl(href: Href, locale: (typeof locales)[number]) {
  const pathname = getPathname({locale, href});
  console.log(pathname)
  // console.log(locale === defaultLocale)
  if(locale === defaultLocale){
    return `${host}${pathname === '/' ? '' : pathname}`;
  }
  return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
}
