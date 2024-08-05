import React from 'react'
import { Button } from './button'
import Image from 'next/image'

interface ButtonProps {
    isLoading : boolean,
    className? : string,
    children: React.ReactNode
}

const SubmitButton = ({isLoading, className, children} : ButtonProps) => {
  return (
   <Button type="submit" disabled={isLoading} className={className ?? 
    `text-dark1 hover:text-white border border-dark1 hover:border-primary hover:bg-primary rounded-3xl
     bg-transparent px-5 py-2  transition-all  duration-300 text-lg font-semibold
     
          max-w-fit no-underline`}>
        {isLoading ? (
            <div className='flex items-center gap-4'>
                <Image
                 src="/assets/icons/loader.svg"
                 alt="loader"
                 width={24}
                 height={24}
                 className="animate-spin"
                 />
                 Loading ...
            </div>
        ): children}

   </Button>
  )
}

export default SubmitButton