//Custome hook for calling an api

import { useEffect, useState } from "react";

const useAPI = (url ) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch(url);
        if (!responce.ok) {
          throw new Error("Network Responce Error");
        }
        const result = await responce.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      // CleanUp function
    };
  }, [url]);
  return { data, loading, error };
};
export default useAPI;
