"use client";

import { useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Arrow from './small/arrow';

interface Props { }

const Nav: NextPage<Props> = ({ }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }
    const linkedInUrl=process.env.NEXT_APP_LINKEDIN_PROFILE
    const githubUrl=process.env.NEXT_APP_GITHUB_REPO
    return (
        <div>
            <nav className="">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                                aria-controls="mobile-menu"
                                aria-expanded={mobileMenuOpen ? 'true' : 'false'}
                                onClick={toggleMobileMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when menu is closed */}
                                <svg
                                    className={`block ${mobileMenuOpen ? 'hidden' : 'block'} size-6`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="black"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                                {/* Icon when menu is open */}
                                <svg
                                    className={` ${mobileMenuOpen ? 'block' : 'hidden'} size-6`}
                                    fill="black"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="black"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <svg width={151} height={31} viewBox="0 0 151 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.04 2H19.04V2.76H16.84V20.04C16.84 23.64 16.0267 26.2667 14.4 27.92C12.7733 29.5467 10.3333 30.36 7.08 30.36C4.92 30.36 3.2 29.9467 1.92 29.12C0.666667 28.2933 0.04 27.1333 0.04 25.64C0.04 24.4933 0.36 23.6 1 22.96C1.64 22.2933 2.50667 21.96 3.6 21.96C4.72 21.96 5.54667 22.24 6.08 22.8C6.64 23.36 6.92 24.04 6.92 24.84C6.92 25.6133 6.77333 26.4 6.48 27.2H4.92C4.68 27.6 4.56 27.9867 4.56 28.36C4.56 28.7067 4.73333 29.0133 5.08 29.28C5.45333 29.52 5.93333 29.64 6.52 29.64C7.58667 29.64 8.26667 29.2267 8.56 28.4C8.88 27.5467 9.04 25.72 9.04 22.92V2.76H6.04V2ZM43.8734 30H34.7534L34.3134 27.08C33.8868 28.1467 33.2468 28.9733 32.3934 29.56C31.5668 30.12 30.3268 30.4 28.6734 30.4C24.5401 30.4 22.4734 28.1733 22.4734 23.72V11.68H20.2334V10.96H29.9134V24.68C29.9134 26.28 30.0201 27.3333 30.2334 27.84C30.4734 28.3467 30.9268 28.6 31.5934 28.6C32.2868 28.6 32.9001 28.1867 33.4334 27.36C33.9668 26.5333 34.2334 25.3867 34.2334 23.92V11.68H32.3934V10.96H41.6734V29.28H43.8734V30ZM45.6922 2H57.4522C61.4789 2 64.4789 2.58667 66.4522 3.76C68.4255 4.90667 69.4122 6.97333 69.4122 9.96C69.4122 13.2667 68.2122 15.5467 65.8122 16.8C63.5722 17.9467 60.4389 18.52 56.4122 18.52H56.0922V29.24H61.0922V30H45.6922V29.24H48.2922V2.76H45.6922V2ZM56.0922 2.76V17.76H56.9322C58.5322 17.76 59.6389 17.2133 60.2522 16.12C60.8655 15.0267 61.1722 13.2533 61.1722 10.8V8.88C61.1722 6.61333 60.8789 5.02667 60.2922 4.12C59.7322 3.21333 58.6922 2.76 57.1722 2.76H56.0922ZM71.4838 -2.38419e-06H81.2838V29.28H83.5238V30H71.6438V29.28H73.8438V0.719998H71.4838V-2.38419e-06ZM94.7 20.6H95.86V17.52C95.86 14.9867 95.7133 13.2933 95.42 12.44C95.1533 11.56 94.62 11.12 93.82 11.12C93.34 11.12 92.9 11.2533 92.5 11.52C92.1267 11.76 91.94 12.1067 91.94 12.56C91.94 12.9867 92.02 13.4267 92.18 13.88H93.18C93.3933 14.44 93.5 15.12 93.5 15.92C93.5 16.6933 93.1667 17.3733 92.5 17.96C91.8333 18.52 90.9933 18.8 89.98 18.8C87.6867 18.8 86.54 17.6933 86.54 15.48C86.54 12.2 89.3267 10.56 94.9 10.56C98.0733 10.56 100.26 11.1067 101.46 12.2C102.687 13.2667 103.3 15.24 103.3 18.12V26.24C103.3 27.6267 103.687 28.32 104.46 28.32C105.367 28.32 105.9 26.9467 106.06 24.2L106.66 24.24C106.553 26.5867 106.113 28.2 105.34 29.08C104.567 29.96 103.3 30.4 101.54 30.4C98.34 30.4 96.5 29.4133 96.02 27.44C95.6733 28.4533 95.1533 29.2 94.46 29.68C93.7667 30.16 92.7533 30.4 91.42 30.4C87.4733 30.4 85.5 28.7867 85.5 25.56C85.5 23.6667 86.2467 22.3733 87.74 21.68C89.26 20.96 91.58 20.6 94.7 20.6ZM93.1 25.52C93.1 26.9067 93.1667 27.8 93.3 28.2C93.46 28.6 93.74 28.8 94.14 28.8C94.5667 28.8 94.9533 28.4667 95.3 27.8C95.6733 27.1067 95.86 26.16 95.86 24.96V21.24H95.58C93.9267 21.24 93.1 22.4533 93.1 24.88V25.52ZM108.773 30.4V23.24H109.253C109.946 25.56 110.88 27.1867 112.053 28.12C113.226 29.0533 114.693 29.52 116.453 29.52C119.173 29.52 120.533 28.6533 120.533 26.92C120.533 26.1733 120.2 25.6133 119.533 25.24C118.493 24.6533 117.16 24.2 115.533 23.88C113.72 23.4 112.2 22.76 110.973 21.96C109.506 21 108.773 19.48 108.773 17.4C108.773 15.32 109.413 13.6667 110.693 12.44C111.973 11.1867 113.68 10.56 115.813 10.56C117.12 10.56 118.466 10.8667 119.853 11.48C120.36 11.6933 120.746 11.8 121.013 11.8C121.28 11.8 121.506 11.7067 121.693 11.52C121.88 11.3333 122.106 10.9867 122.373 10.48H122.813V16.6H122.333C120.973 13.1333 118.866 11.4 116.013 11.4C114.76 11.4 113.826 11.6267 113.213 12.08C112.6 12.5067 112.293 13.0533 112.293 13.72C112.293 14.12 112.386 14.44 112.573 14.68C112.76 14.8933 112.906 15.0533 113.013 15.16C113.12 15.2667 113.293 15.3867 113.533 15.52C113.773 15.6267 113.973 15.72 114.133 15.8C114.293 15.8533 114.533 15.9333 114.853 16.04C115.2 16.1467 115.453 16.2133 115.613 16.24C117.426 16.6933 118.733 17.0933 119.533 17.44C120.333 17.76 121.093 18.16 121.813 18.64C123.28 19.6533 124.013 21.2933 124.013 23.56C124.013 25.8 123.346 27.5067 122.013 28.68C120.68 29.8267 118.853 30.4 116.533 30.4C114.88 30.4 113.28 30.0133 111.733 29.24C111.413 29.0267 111.16 28.92 110.973 28.92C110.386 28.92 109.813 29.4133 109.253 30.4H108.773ZM125.997 -2.38419e-06H135.637V14.64C136.064 13.4133 136.717 12.4267 137.597 11.68C138.477 10.9333 139.81 10.56 141.597 10.56C145.73 10.56 147.797 12.7867 147.797 17.24V29.28H150.037V30H138.717V29.28H140.357V16.28C140.357 14.68 140.25 13.6533 140.037 13.2C139.824 12.72 139.437 12.48 138.877 12.48C138.024 12.48 137.264 13.04 136.597 14.16C135.957 15.28 135.637 16.64 135.637 18.24V29.28H137.357V30H125.997V29.28H128.197V0.719998H125.997V-2.38419e-06Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link href={`${githubUrl}`} target="_blank">
                                        <p className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                                            GitHub <Arrow color={'#ffffff'} />
                                        </p>
                                    </Link>
                                    <Link href={`${linkedInUrl}`} target="_blank">
                                        <p className="flex items-center  border-2 border-black text-black px-4 py-2 rounded-md hover:bg-gray-200">
                                             LinkedIn <Arrow color={'#000000'} />
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Mobile menu */}
                <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                    <div className="sm:ml-6 sm:block">
                                <div className="">
                                <Link href={`${githubUrl}`}target="_blank">
                                        <p className="flex items-center px-4 text-black py-2 rounded-md hover:bg-gray-200">
                                            GitHub <Arrow color={'#000000'} />
                                        </p>
                                    </Link>
                                    <Link href={`${linkedInUrl}`}target="_blank">
                                        <p className="flex items-center text-black px-4 py-2 rounded-md hover:bg-gray-200">
                                             LinkedIn <Arrow color={'#000000'} />
                                        </p>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
