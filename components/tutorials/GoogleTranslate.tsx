// https://dev.to/valorsoftware/google-translate-customization-under-nextjs-h69
'use client'
import React from 'react'
import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
// import { LanguageSwitcher } from "./lang-switcher";

// The following cookie name is important because it's Google-predefined for the translation engine purpose
const COOKIE_NAME = "googtrans";

// We should know a predefined nickname of a language and provide its title (the name for displaying)
interface LanguageDescriptor {
  name: string;
  title: string;
}

// The following definition describes typings for JS-based declarations in public/assets/scripts/lang-config.js
declare global {
  namespace globalThis {
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

const LanguageSwitcher = () => {
    const [currentLanguage, setCurrentLanguage] = useState<string>();
    const [languageConfig, setLanguageConfig] = useState<any>();
  
    // When the component has initialized, we must activate the translation engine the following way.
    useEffect(() => {
      // 1. Read the cookie
      const cookies = parseCookies()
      const existingLanguageCookieValue = cookies[COOKIE_NAME];
  
      let languageValue;
      if (existingLanguageCookieValue) {
        // 2. If the cookie is defined, extract a language nickname from there.
        const sp = existingLanguageCookieValue.split("/");
        if (sp.length > 2) {
          languageValue = sp[2];
        }
      }
      // 3. If __GOOGLE_TRANSLATION_CONFIG__ is defined and we still not decided about languageValue, let's take a current language from the predefined defaultLanguage below.
      if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
        languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
      }
      if (languageValue) {
        // 4. Set the current language if we have a related decision.
        setCurrentLanguage(languageValue);
      }
      // 5. Set the language config.
      if (global.__GOOGLE_TRANSLATION_CONFIG__) {
        setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
      }
    }, []);
  
    // Don't display anything if current language information is unavailable.
    if (!currentLanguage || !languageConfig) {
      return null;
    }
  
    // The following function switches the current language
    const switchLanguage = (lang: string) => () => {
      // We just need to set the related cookie and reload the page
      // "/auto/" prefix is Google's definition as far as a cookie name
      setCookie(null, COOKIE_NAME, "/auto/" + lang)
      window.location.reload();
    };
  
    return (
      <div className="text-center notranslate">
        {languageConfig.languages.map((ld: LanguageDescriptor, i: number) => (
          <>
            {currentLanguage === ld.name ||
            (currentLanguage === "auto" &&
              languageConfig.defaultLanguage === ld) ? (
              <span key={`l_s_${ld}`} className="mx-3 text-orange-300">
                {ld.title}
              </span>
            ) : (
              <a
                key={`l_s_${ld}`}
                onClick={switchLanguage(ld.name)}
                className="mx-3 text-blue-300 cursor-pointer hover:underline"
              >
                {ld.title}
              </a>
            )}
          </>
        ))}
      </div>
    );
  };
  

export default function GoogleTranslate() {
    return (
        <div className="h-screen flex flex-col">
          <header className="w-full pt-4">
            <LanguageSwitcher />
          </header>
          <div className="flex flex-col flex-1 overflow-auto">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <article>
              <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
                What is Lorem Ipsum?
              </h2>
              <p className="mb-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry....
              </p>
            </article>
            // This is a part of the content. Please take the full version for the original solution!
          </div>
          <footer>
            <p className="mt-3">
              <a
                href="https://www.lipsum.com/"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Source
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </p>
          </footer>
        </div>
      );
  
  
}
