import {locales} from './config';
/* eslint-disable no-unused-vars */


export type Locale = (typeof locales)[number];

declare type ContactFormParams = {
    name: string,
    phone?: string,
    email: string,
    message: string,
    date: string,
    privacyConsent: boolean,
    // newsletterCheck: boolean
}