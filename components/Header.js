import Image from "next/image"
import { SearchIcon, GlobeAltIcon, MenuIcon, UserIcon, UserCircleIcon } from '@heroicons/react/solid'


function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white  shadow-md p-5 md:px-10">
            {/* logo */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://www.izifiso.com/assets/izifiso-logo/izifiso-logo-new.png" layout="fill" objectFit="contain" objectPosition="left" />
            </div>

            {/* search */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-yellow-400 text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2 hover:shadow-xl" />
            </div>

            {/* user */}
            <div className="flex items-center space-x-4 justify-end text-gray-800">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer text-gray-600 hover:shadow-xl" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-xl ">
                    <MenuIcon className="h-6 text-gray-600 " />
                    <UserCircleIcon className="h-6 text-gray-600 " />
                </div>
            </div>
        </header>
    )
}

export default Header
