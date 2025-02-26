// src/app/api/unsplash.ts
import axios from 'axios';

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
  

const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || 'pouletto';
const apiUrl = process.env.NEXT_PUBLIC_UNSPLASH_BACKEND_URL || 'pouletto';
console.log('apiUrl', apiUrl, process.env);

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
  
  // Function to get random images
  export const getRandomImages = async (page: number = 1, perPage: number = 10): Promise<any[]> => {
    try {
      // For random images, we're using the /photos endpoint with ordering
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

export const fetchPhotos = async (query: string, page: number) => {
  const endpoint = query
    ? `${apiUrl}/search/photos?page=${page}&query=${query}&client_id=${accessKey}`
    : `${apiUrl}/photos?page=${page}&client_id=${accessKey}`;

  const response = await axios.get(endpoint);
  return response.data.results || response.data;
};

export const trackDownload = async (downloadLocation: string) => {
  await axios.get(`${downloadLocation}?client_id=${accessKey}`);
};
