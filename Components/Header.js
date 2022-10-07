import Image from 'next/image'
import React, { useState } from 'react'
import logo1 from '../public/logo1.png'
import logo2 from '../public/logo2.png'
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {

    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
                {/* left */}
                <div onClick={() => router.push('/')} className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                    <Image src={logo1} layout='fill' objectFit='contain' priority />
                </div>

                <div onClick={() => router.push('/')} className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image src={logo2} layout='fill' objectFit='contain' priority />
                </div>

                {/* middle */}
                <div className='max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md'>
                        <div className='absolute flex inset-y-0 pl-3 items-center pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black rounded-md' type="text" placeholder='Search' />
                    </div>
                </div>

                {/* right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={() => router.push('/')} className='navBtn' />
                    <MenuIcon onClick={() => setMenuOpen(!menuOpen)} className='h-10 xs:h-6 md:hidden cursor-pointer' />

                    {session ? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className='navBtn rotate-45' />
                                <div className='absolute -top-1 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
                            </div>
                            <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
                            <UserGroupIcon className='navBtn' />
                            <HeartIcon className='navBtn' />

                            <img onClick={signOut} src={session.user.image} alt="Profile pic" className='h-6 xs:h-8 sm:h-10 w-8 xs:w-8 sm:w-10 rounded-full cursor-pointer' />
                        </>
                    ) : (
                        <button onClick={signIn}>Sign In</button>
                    )
                    }
                </div>
            </div>

            {
                menuOpen && (
                    <div className='flex absolute right-2 -mt-3 bg-white md:hidden p-2'>
                        <HomeIcon className='menuBtn' onClick={() => router.push('/')} />
                        <div>
                            <PaperAirplaneIcon className='rotate-45 menuBtn' />
                            <div className='-mt-8 ml-3 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
                        </div>
                        <PlusCircleIcon className='menuBtn' onClick={() => setOpen(true)} />
                        <UserGroupIcon className='menuBtn' />
                        <HeartIcon className='menuBtn' />
                    </div>
                )
            }

        </div>
    )
}

export default Header
