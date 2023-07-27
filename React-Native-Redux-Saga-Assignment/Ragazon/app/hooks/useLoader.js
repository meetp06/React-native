import { useCallback, useState } from 'react';

/*
 * Hook for managing the loading state.
 *
 * @return -  array of isLoading and toggleLoading function.
 */

const useLoader = () => {
  const [isLoading, setLoading] = useState(false);
  const toggleLoading = useCallback(() => setLoading((prev) => !prev), []);

  return [isLoading, toggleLoading];
};

export default useLoader;
