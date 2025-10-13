"use client";
import { SharedProvider } from "@/features/shared/contexts/shared-context";
import { FavsProvider } from "@/features/users/contexts/favs-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SharedProvider>
        <FavsProvider>{children}</FavsProvider>
      </SharedProvider>
    </QueryClientProvider>
  );
};

export default Providers;
