// src/app/api/unsplash.ts
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

interface UnsplashImage {
    id: string;
    created_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
    links: {
      self: string;
      html: string;
      download: string;
    };
    user: {
      id: string;
      username: string;
      name: string;
    };
    description: string | null;
    alt_description: string | null;
  }
  
  interface SearchResponse {
    total: number;
    total_pages: number;
    results: UnsplashImage[];
  }
  

const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const apiUrl = process.env.NEXT_PUBLIC_UNSPLASH_BACKEND_URL;

  export const searchImages = async (query: string, page: number = 1, perPage: number = 10): Promise<any> => {
    try {
      const response = await fetch(
        `${apiUrl}/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`,
        {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Unsplash API error: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error searching images:', error);
      throw error;
    }
  };
  
  export const getRandomImages = async (page: number = 1, perPage: number = 10): Promise<any[]> => {
    try {
      const response = await fetch(
        `${apiUrl}/photos?page=${page}&per_page=${perPage}&order_by=latest`,
        {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Unsplash API error: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching random images:', error);
      throw error;
    }
  };


const trackDownload = async (downloadUrl:string) => {
    const response = await axios.post(downloadUrl, null, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    return response.data;
  };
  
  export const useTrackDownload = () => {
    return useMutation({
      mutationFn: trackDownload,
    });
  };
  