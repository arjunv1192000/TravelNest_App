'use client'
import { useRouter } from "next/router"
import Image from "next/image"

const Logo = () => {
  return (
    <Image 
          alt="log"
           src="/images/logo.png"
           className="hidden md:block cursor-pointer"
           height={100}
           width={100}
              />
  
  )
}

export default Logo