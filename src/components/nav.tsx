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
    const linkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_PROFILE
    const githubUrl = process.env.NEXT_PUBLIC_GITHUB_REPO
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
                                <svg width={87} height={31} viewBox="0 0 87 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.2 22.76L24.16 2.76H21.04V2H27.16V2.76H25.28L15.64 30.4H12.28L2.08 2.76H0.24V2H13.32V2.76H10.48L17.2 22.76ZM33.8769 8.2C32.4635 8.2 31.4502 7.84 30.8369 7.12C30.2502 6.4 29.9569 5.50666 29.9569 4.44C29.9569 3.37333 30.2769 2.49333 30.9169 1.8C31.5835 1.10667 32.5835 0.76 33.9169 0.76C35.2502 0.76 36.2635 1.08 36.9569 1.72C37.6502 2.33333 37.9969 3.22667 37.9969 4.4C37.9969 5.54667 37.6635 6.46667 36.9969 7.16C36.3302 7.85333 35.2902 8.2 33.8769 8.2ZM27.8369 10.96H37.6369V29.28H39.8769V30H27.9969V29.28H30.1969V11.68H27.8369V10.96ZM60.0922 10.96V11.68L50.6122 29.28H51.1322C53.3722 29.28 55.1322 28.6933 56.4122 27.52C57.6922 26.3467 58.6922 24.44 59.4122 21.8H59.9722L59.3322 30H42.5322V29.4L52.1722 11.68H51.7322C49.0389 11.68 47.1589 12.12 46.0922 13C45.0522 13.88 44.1189 15.76 43.2922 18.64H42.7722L43.2922 10.96H60.0922ZM86.0828 30H76.9628L76.5228 27.08C76.0961 28.1467 75.4561 28.9733 74.6028 29.56C73.7761 30.12 72.5361 30.4 70.8828 30.4C66.7495 30.4 64.6828 28.1733 64.6828 23.72V11.68H62.4428V10.96H72.1228V24.68C72.1228 26.28 72.2295 27.3333 72.4428 27.84C72.6828 28.3467 73.1361 28.6 73.8028 28.6C74.4961 28.6 75.1095 28.1867 75.6428 27.36C76.1761 26.5333 76.4428 25.3867 76.4428 23.92V11.68H74.6028V10.96H83.8828V29.28H86.0828V30Z" fill="black" />
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
                                <Link href={`${githubUrl}`} target="_blank">
                                    <p className="flex items-center px-4 text-black py-2 rounded-md hover:bg-gray-200">
                                        GitHub <Arrow color={'#000000'} />
                                    </p>
                                </Link>
                                <Link href={`${linkedInUrl}`} target="_blank">
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
