"use client";
import { FavsProvider } from "@/features/users/contexts/favs-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <FavsProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </FavsProvider>
  );
};

export default Providers;
