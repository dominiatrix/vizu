"use client";
import { NextPage } from 'next'
import Image from "next/image";
import Link from 'next/link'

interface Props { }

const Footer: NextPage<Props> = ({ }) => {
  return <footer className='mb-4'>
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center mb-4">
      <p>Website built with Next.js and Tailwind.css</p>
    </div>
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={`${process.env.NEXT_PUBLIC_GITHUB_REPO}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/icons8-github.svg"
          alt="Github icon"
          width={24}
          height={24}
        />
        Github
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={`${process.env.NEXT_PUBLIC_LINKEDIN_PROFILE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/icons8-linkedin.svg"
          alt="Linkedin icon"
          width={24}
          height={24}
        />
        LinkedIn
      </Link>
    </div>
  </footer>
}

export default Footer