import React from 'react'
import { FizziLogo } from '@/components/FizziLogo'

type Props = object;

export default function Header({ }: Props) {
    return (
        <header className='flex justify-center py-4 -mb-28'>
            <FizziLogo  className='z-10 h-20 cursor-pointer text-sky-800'/>
        </header>
    )
}