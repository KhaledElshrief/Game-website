import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="text-xl  lg:text-2xl  flex gap-2 my-2">
        <h1 className="text-rose-500">Gaming</h1>
        <span>Bio</span>
      
    </Link>
  )
}

export default Logo
