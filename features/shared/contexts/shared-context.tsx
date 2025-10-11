"use client";
import { createContext, useEffect, useMemo, useRef, useState } from "react";

interface SharedProviderProps {
  children: React.ReactNode;
}

interface SharedContextProps {
  isClient: boolean;
  isClientRef: React.RefObject<boolean>;
}

export const SharedContext = createContext<SharedContextProps>({
  isClient: false,
  isClientRef: { current: false },
});

export const SharedProvider = ({ children }: SharedProviderProps) => {
  // Use both ref and state for different use cases
  const isClientRef = useRef(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect only runs on the client side
    isClientRef.current = true;
    setIsClient(true);
  }, []);

  const contextValue = useMemo(
    () => ({
      isClient,
      isClientRef,
    }),
    [isClient]
  );

  return (
    <SharedContext.Provider value={contextValue}>
      {children}
    </SharedContext.Provider>
  );
};
