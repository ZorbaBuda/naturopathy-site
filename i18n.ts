import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from "@/config"


export default getRequestConfig(async ({locale}) => {
 
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

//TODO use env
// const path = "http://localhost:3000/api/messages"


// export default getRequestConfig(async ({locale}) => {
//   // Validate that the incoming `locale` parameter is valid
//  if (!locales.includes(locale as any)) notFound();

//  const res = await fetch(`${path}/${locale}`, {next: {tags : ["messages"]}})
//  // console.log("i18n.ts")
//  const data = await res.json()
// //  console.log(data.data)
//  // console.log(data)
//  const messages = JSON.parse(data.data)
//  // console.log("😂", parsed.data)
//  // console.log("😢", typeof parsed.data)
// //  const messages = JSON.parse(parsed.data)


//  return { messages }


// });


// export default getRequestConfig(async ({locale}) => {
//    // Validate that the incoming `locale` parameter is valid
//   if (!locales.includes(locale as any)) notFound();

//   const res = await fetch(`${path}/${locale}`, {next: {tags : ["messages"]}})
//   // console.log("i18n.ts")
//   const data = await res.json()
//   // console.log(data)
//   const parsed = data.data
//   // console.log("😂", parsed.data)
//   // console.log("😢", typeof parsed.data)
//   const messages = JSON.parse(parsed.data)


//   return { messages }

 
// });

 


// export default getRequestConfig(async ({locale}) => {
 
//   // Validate that the incoming `locale` parameter is valid
//   if (!locales.includes(locale as any)) notFound();
 
//   return {
//     messages: (await import(`./messages/${locale}.json`)).default
//   };
// });