import { useState, useEffect } from 'react';

import axiosInstance from '../config/axiosConfig';

const useRickMortyAPI = (queryString, initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const result = await axiosInstance.post('', { query: queryString });
        setData(result.data.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [queryString]);

  return { data, isLoading, isError };
};

export default useRickMortyAPI;
