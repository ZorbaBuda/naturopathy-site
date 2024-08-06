import React from 'react'
import Accordion from '../parts/Accordion'
import { servicesFAQ } from '@/lib/data'


export default function ServFAQSection() {
  return (
    <section className='bg-verde_claro py-20 text-verde_oscuro'>
        <div className='max-w-7xl flex flex-col lg:flex-row mx-auto px-10 md:px-[110px] lg:px-0 gap-y-5'>
        <div className='h2c tracking-tight leading-none'>{servicesFAQ.title}</div>
        <ul className='text-[18px]'>
            {servicesFAQ.items.map(item => (
                <Accordion key={item.title} title={item.title} answer={item.text} />
            ))}
        </ul>
        </div>

    </section>
  )
}
