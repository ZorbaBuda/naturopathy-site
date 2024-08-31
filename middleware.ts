
import createMiddleware from "next-intl/middleware"
import { NextRequest, NextResponse } from "next/server";
import {localePrefix, defaultLocale, locales, pathnames} from './config';


// export default createMiddleware({
//         locales: ['en', 'es'],
//         defaultLocale: 'es'
//     })

const nextIntlMiddleware =  createMiddleware({
    defaultLocale,
    locales,
    localePrefix,
    pathnames
    // localePrefix: "as-needed"
})

export default function(req: NextRequest): NextResponse {

    // console.log(req.headers.get('origin'))
    return nextIntlMiddleware(req)
}

export const config = {
    matcher: [
       
        // Enable a redirect to a matching locale at the root
        '/',

        // Set a cookie to remember the previous locale for
        // all requests that have a locale prefix
        '/(ca|es)/:path*',
    
        // Enable redirects that add missing locales
        // (e.g. `/pathnames` -> `/en/pathnames`)
        '/((?!api|_next|_vercel|.*\\..*).*)'
      ]
  };