import React from 'react'

export default function Footer() {
    return (
        <div className='px-10'>
            <footer className="p-4 border dark:border-dark bg-white rounded-lg  md:flex md:items-center md:justify-between md:p-6 dark:bg-bg-dark">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://.com/" className="hover:underline">Lenwoper™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    {/* <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li> */}
                </ul>
            </footer>
        </div>

    )
}
