import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'

interface Props {}

const home: NextPage<Props> = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/[id]' as='/jaeseo'>
        <a>user - jaeseo</a>
      </Link>
      <br />
      <Link href='/[id]' as='/unknown'>
        <a>user - unknown?</a>
      </Link>
    </div>
  )
}

export default home
