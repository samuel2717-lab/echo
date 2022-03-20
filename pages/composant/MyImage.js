import React from 'react'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }
  
  const MyImage = (src) => {
    return (
      <Image
        loader={myLoader}
        src={src}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    )
  }
export default MyImage
