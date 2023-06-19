import React from 'react'
import Image from 'next/image'
import { 
    BellIcon,
    ChatBubbleLeftIcon,
    ChevronDownIcon,
    UserGroupIcon,
     Squares2X2Icon
} from '@heroicons/react/24/solid'
import { 
    FlagIcon,
    PlayIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
} from '@heroicons/react/24/solid'


function Header() {
  return (
    <div>
        {/* Left */}
        <div>
        <Image
            src="https://links.papareact.com/5me"
            width={40}
            height={40}
            ></Image>
        </div>
        <div>
        <MagnifyingGlassIcon></MagnifyingGlassIcon>
        <input type='text' placeholder='Search Facebook'></input>
        </div>
           
        {/* Center */}
        {/* Right */}
    </div>
    
  )
}

export default Header