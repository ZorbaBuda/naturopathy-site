import React from 'react'
import StaggeredText from '../components/tutorials/framer/StaggeredText'
import { HeroTest } from '../components'
import TextReveal from '../components/tutorials/framer/TextReveal'
import GoogleTranslate from '../components/tutorials/GoogleTranslate'

export default function page() {
  return (
    
    <>
    <GoogleTranslate />
    <StaggeredText />
    <TextReveal text="Hello!"/>
   
        
    </>
  )
}
