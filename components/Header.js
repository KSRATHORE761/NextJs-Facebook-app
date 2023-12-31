import React from 'react'
import Image from 'next/image'
import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  UserGroupIcon,
  Squares2X2Icon,
  HomeIcon
} from '@heroicons/react/24/solid'
import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/solid'
import HeaderIcon from './HeaderIcon'


function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white flex
    items-center p-2 lg:px-5 shadow-md'>
      {/* Left */}
      <div className='flex items-center'>
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout='fixed'
        ></Image>
      </div>
      <div className='flex items-center ml-2 rounded-full bg-gray-100 p-2'>
        <MagnifyingGlassIcon className='h-6 text-gray-600'></MagnifyingGlassIcon>
        <input type='text' className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' placeholder='Search Facebook'></input>
      </div>
      {/* Center */}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active Icon={HomeIcon}/>
          <HeaderIcon Icon={FlagIcon}/>
          <HeaderIcon Icon={PlayIcon}/>
          <HeaderIcon Icon={ShoppingCartIcon}/>
          <HeaderIcon Icon={UserGroupIcon}/>
        </div>
      </div>
      {/* Right */}
    </div>

  )
}

export default Header