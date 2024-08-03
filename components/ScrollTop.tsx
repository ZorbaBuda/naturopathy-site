'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { contactInfo } from '@/lib/data'
import { MdKeyboardArrowUp } from "react-icons/md";

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
    <div className={` fixed md:bottom-32 bottom-20 right-5   gap-10 ${show ? 'md:flex' : 'md:hidden'}`}>
      <div className='flex flex-col gap-3 md:gap-5 text-lg md:text-2xl text-white'>
        {/* <Link href="/" className='bg-red-500 rounded-full p-2 md:p-3 border-2 border-slate-600'>{contactInfo.emailIcon}</Link> */}
        <Link href={contactInfo.emailHref}  className='bg-red-500 rounded-full p-2 md:p-3 border-2 border-slate-600'  passHref>{contactInfo.emailIcon}</Link>
        <Link href={contactInfo.phoneHref}  className='bg-blue-500 rounded-full p-2 md:p-3 border-2 border-slate-600'>{contactInfo.phoneIcon}</Link>
   { /*    {legacyBehavior passHref <Link href="/" className='bg-blue-500 rounded-full p-2 md:p-3 border-2 border-slate-600'>{contactInfo.phoneIcon}</Link> */}
        <Link href={contactInfo.whatsappHref}   className='bg-[#25D366] rounded-full p-2 md:p-3 border-2 border-slate-600'>{contactInfo.whatsappIcon}</Link>
      </div>
    </div>


  {/* scroll button */}
    <div
      className={`fixed bottom-8 right-5 md:right-7   ${show ? 'md:flex' : 'md:hidden'}`}
    >
      <button
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="rounded-full bg-gray-200 text-lg p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
       <MdKeyboardArrowUp />
      </button>
    </div>
    </>
  )
}

export default ScrollTop
