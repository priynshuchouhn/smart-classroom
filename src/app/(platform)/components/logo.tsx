import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <Image src={'/logo.svg'} height={100} alt='Logo of Smart Classroom' width={100}/>
      
  )
}

export default Logo
