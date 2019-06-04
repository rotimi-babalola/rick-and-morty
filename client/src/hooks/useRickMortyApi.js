import { useState, useEffect } from 'react';

import axiosInstance from '../config/axiosConfig';

const useRickMortyAPI = queryString => {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await axiosInstance.post('', { query: queryString });
        setData(response.data);
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
