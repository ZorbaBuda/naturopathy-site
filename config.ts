import { LocalePrefix, Pathnames } from "next-intl/routing"

export const defaultLocale = 'ca' as const;
export const locales = ["ca", "es"] as const

export type Locales = typeof locales

export const pathnames: Pathnames<Locales> = {
    "/" : 
    {
    ca: "/",
    es: "/"
    },
    "/about": {
        ca: "/sobre-mi",
        es: "/sobre-mi"
    },
    "/services": {
        ca: "/terapies",
        es: "/terapias"
    },
    "/contact": {
        ca: "/contacte",
        es: "/contacto"
    },
    "/privacy": {
        ca: "/politica-privacitat",
        es: "/politica-privacidad"
    }
}

export const localePrefix: LocalePrefix<Locales> = "as-needed"


export const port = process.env.PORT || 3001;
export const host = process.env.BASE_URL
  ? `${process.env.BASE_URL}`
  : `http://localhost:${port}`;