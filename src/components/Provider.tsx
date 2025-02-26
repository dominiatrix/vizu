// components/Providers.jsx
"use client";

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export default function Provider({ children }: Readonly<{ children: ReactNode }>) {
  // Initialize the QueryClient in state to persist it across renders
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
