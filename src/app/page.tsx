"use client";

import Banner from "@/components/banner";
import Content from "@/components/content";
import { searchImages, getRandomImages } from "@/utils/unsplash";
import React, { useEffect, useState } from 'react';
import { useQuery , keepPreviousData} from '@tanstack/react-query';
import Loader from "@/components/small/loader";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [allImages, setAllImages] = useState<any[]>([]);

  const fetchImages = async ({ queryKey }: any) => {
    const [_, query, currentPage] = queryKey;
    if (query) {
      return searchImages(query, currentPage);
    }
    return getRandomImages(currentPage);
  };

  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ['images', searchQuery, page],
    queryFn: fetchImages, // No need to wrap with useCallback, React Query handles memoization
    placeholderData: keepPreviousData,
    staleTime: 0, // Ensure fresh data is always fetched
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
  const loading = isLoading || isFetching;

  useEffect(() => {
    refetch();
  }, [page]);

  const mainContent = ()=>{
    if(loading && page === 1){
    return <div className="w-full mx-auto flex justify-center my-10"><Loader /></div>
    } else if(error){
      return <div className="w-full mx-auto flex justify-center my-10 text-red-500">Error loading images. Please try again.</div>
    } else if(!loading && images.length === 0 && searchQuery){
      return <div className="w-full mx-auto flex justify-center my-10">No images found for <span className="ml-1 font-bold">{searchQuery}</span>.</div>
    }else {
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
