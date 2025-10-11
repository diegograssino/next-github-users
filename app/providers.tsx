"use client";
import { SharedProvider } from "@/features/shared/contexts/shared-context";
import { FavsProvider } from "@/features/users/contexts/favs-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <SharedProvider>
      <FavsProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </FavsProvider>
    </SharedProvider>
  );
};

export default Providers;
