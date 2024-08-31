
import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { getPrivacyPolicyDocument } from '@/lib/actions/privacyPolicyDoc.actions';
import parser from "html-react-parser"
import { notFound } from 'next/navigation';

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({params} : Params) {
  const locale = params.locale
  // const t = await getTranslations({locale, namespace: 'about'});
 
  return {
    // title: t('metadata.title'),
    // description: t('metadata.description')
    title: "title",
    description: "description"
  };
}


export  default async function PrivacyPolicyPage( {params: {locale}} :  {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  const document = await getPrivacyPolicyDocument(locale)
 
  if (!document) return notFound()
  return (
    <section className='w-full min-h-screen pt-[100px] text-xl  flex flex-col prose-custom subcontainerXl '>
     {parser(document.text)}

    </section>
  )
}
