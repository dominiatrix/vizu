"use client";

import Banner from "@/components/banner";
import Content from "@/components/content";
import { searchImages, getRandomImages } from "@/utils/unsplash";
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery , keepPreviousData} from '@tanstack/react-query';
import Loader from "@/components/small/loader";

//import Image from "next/image";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [allImages, setAllImages] = useState<any[]>([]);

  const fetchImages = useCallback(async ({ queryKey }: any) => {
    const [_, query, currentPage] = queryKey;
    if (query) {
      return searchImages(query, currentPage);
    }
    return getRandomImages(currentPage);
  }, []);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['images', searchQuery, page],
    queryFn: () => fetchImages({ queryKey: ['images', searchQuery, page] }),
    placeholderData: keepPreviousData,
  });
  

  const handleSearch = (query: string) => {
    setAllImages([]);
    setSearchQuery(query);
    setPage(1);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  
  useEffect(() => {
    if (data) {
      setAllImages((prevImages) => [...prevImages, ...(data.results || [])]);
    }
  }, [data]);
  

  const images = searchQuery ? allImages : data || [];
  const hasMore = data?.total_pages > page ;

  useEffect(() => {
    refetch();
  }, [page]);
  console.log('it has more ',hasMore);
  const mainContent = ()=>{
    if(isLoading && page === 1){
    return <div className="w-full mx-auto flex justify-center mt-10 mb-10"><Loader /></div>
    } else if(error){
      return <div className="w-full mx-auto flex justify-center mt-10 mb-5 text-red-500">Error loading images. Please try again.</div>
    } else {
      return <Content images={images} hasMore={hasMore} loadMore={loadMore}/>
    }
  }

  return ( 
      <main className="flex flex-wrap items-center justify-center">
        <Banner onSearch={handleSearch}/>
        {/* <Content images={images} onDownload={handleDownload}/> */}
        {mainContent()}
      </main>
      
  );
}
