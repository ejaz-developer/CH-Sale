'use client';

import { useEffect } from 'react';
import useUserStore from '@/stores/userStore';

export default function StoreProvider({ children }) {
  const fetchUserData = useUserStore((state) => state.fetchUserData);

  useEffect(() => {
    // Initialize all stores here
    const initializeStores = async () => {
      // You can run these in parallel or sequentially based on dependencies
      await Promise.all([fetchUserData()]);
    };

    initializeStores();
  }, [fetchUserData]);

  return <>{children}</>;
}
