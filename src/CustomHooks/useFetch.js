import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      (async () => {
        try {
          setIsLoading(true);

          const res = await fetch(url);
          const { data } = await res.json();

          setData(data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      })();
    }, []);


  return { data, isLoading, error };
};
