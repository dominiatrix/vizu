"use client";
import { NextPage } from 'next'

interface Props { }

const Banner: NextPage<Props> = ({ }) => {
    return <div>
        <div className=" inset-0 mt-8 flex w-full flex-col items-center justify-center p-5 text-center md:px-20 lg:space-y-10">
            <h1 className="text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl">Find beautiful & Free images from Unsplash</h1>
            <p className="text-sm text-heading lg:text-base xl:text-lg my-4">Get your favorite images at any time</p>
            <div className="w-full max-w-3xl">
                <form className="w-full">
                    <div className="relative flex w-full">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <input
                            id="search"
                            type="text"
                            autoComplete="off"
                            className="flex-grow h-12 sm:h-14 px-4 sm:px-6 text-sm sm:text-base text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
                            name="search"
                            placeholder="Search your images from here"
                        />
                        <button
                            className="flex items-center justify-center h-12 sm:h-14 px-4 sm:px-6 bg-black text-white font-medium rounded-r-md transition-all duration-200 hover:bg-gray-900 focus:outline-none"
                        >
                            <svg
                                viewBox="0 0 17.048 18"
                                className="h-5 w-5 sm:h-6 sm:w-6"
                            >
                                <path
                                    d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                                    transform="translate(-367.297 -371.285)"
                                    fill="currentColor"
                                />
                            </svg>
                            <span className="hidden sm:inline-block ml-2">Search</span>
                        </button>
                    </div>


                </form>
            </div>
        </div>

    </div>
}

export default Banner