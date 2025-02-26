'use client';
import Link from 'next/link'
import Masonry from "react-masonry-css";
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { motion } from 'framer-motion';


interface ImageProps {
  id: string;
  urls: {
    small: string;
    regular: string;
    raw: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  links: {
    download: string;
  };
}

interface ImageGalleryProps {
  images: ImageProps[];
  hasMore: boolean;
  loadMore: () => void;
}


const breakpointColumnsObj = {
  default: 3, // 3 columns by default
  1100: 2, // 2 columns for screens < 1100px
  700: 1, // 1 column for screens < 700px
};


const Content: React.FC<ImageGalleryProps> = ({ images, hasMore, loadMore }) => {

return (
<div>
    <div>
    <InfiniteScroll
      dataLength={images.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<></>}
      endMessage={<></>}
    >
    <section id="Images" className="w-full mx-auto flex justify-center mt-10 mb-5">
      <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-full gap-4"
      columnClassName="masonry-column"
    >
        {images.map((img:any, index:number) => (
          <motion.div
          key={'t' + index}
          className="w-fit h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-110 hover:rotate-2 hover:shadow-xl group mb-4"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            
            <div className="relative">
                <img
                  src={img?.urls?.small}
                  alt={img?.alt_description}
                  className="object-cover rounded-t-xl w-full group-hover:opacity-90 group-hover:bg-black"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-t-xl"></div>
                <a
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md cursor-pointer group"
                  
                  href={`${img?.links?.download}&force=true`}
                >
                  <svg
                    className="bg-black p-1 text-white rounded-md"
                    width="28px"
                    height="26px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 text-xs">
                  Photo by{' '}
                  <Link href={img?.user?.links?.html} className="underline text-gray-600">
                    {img?.user?.name}
                  </Link>{' '}
                  on{' '}
                  <Link href="https://unsplash.com" className="underline text-gray-600">
                    Unsplash
                  </Link>
                </span>
              </div>
          </motion.div>
        ))}
         </Masonry>
      </section>
      </InfiniteScroll>
    </div>
  </div>
);
}


export default Content