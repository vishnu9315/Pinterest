import Image from 'next/image'
import React from 'react'

function PinImage({pinDetails}) {

  return (
    
    <div>
    { pinDetails ? 
      <Image src={pinDetails.image}
      alt={pinDetails.title}
      width={1000}
      height={1000}
    
      className='rounded-2xl'
      />
    : null }
    </div>
  )
}

export default PinImage