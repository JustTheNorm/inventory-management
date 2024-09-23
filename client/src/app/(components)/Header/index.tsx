import Head from 'next/head';
import React from 'react'

type HeaderProps = {
    name: string;
}

const Header = ({name}: HeaderProps) => {
  return (
    <Head>
      <title>Np-Stock</title>
      <h1 className='text-2xl font-semibold text-gray-700'>{name}</h1>
    </Head>
    
  )
}

export default Header