'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { contactInfo } from '@/lib/data'

const ScrollTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <>
    <div className={` fixed bottom-32 right-5   gap-10 ${show ? 'md:flex' : 'md:hidden'}`}>
      <div className='flex flex-col gap-3 md:gap-5 text-lg md:text-2xl text-white'>
        <Link href="/" className='bg-red-500 rounded-full p-2 md:p-3 border-2 border-slate-600'>{contactInfo.emailIcon}</Link>
        <Link href="/" className='bg-blue-500 rounded-full p-2 md:p-3 border-2 border-slate-600'>{contactInfo.phoneIcon}</Link>
        <Link href="/" className='bg-[#25D366] rounded-full p-2 md:p-3 border-2 border-slate-600'>{contactInfo.whatsappIcon}</Link>
      </div>
    </div>


  {/* scroll button */}
    <div
      className={`fixed bottom-8 right-8   gap-10 ${show ? 'md:flex' : 'md:hidden'}`}
    >
      <button
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    </>
  )
}

export default ScrollTop
