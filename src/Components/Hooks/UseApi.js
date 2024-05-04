import { useEffect, useState } from "react";

const useAPI = (url, delay = 5000) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Introduce a delay before fetching data
        await new Promise(resolve => setTimeout(resolve, delay));

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function
    };
  }, [url, delay]);

  return { data, loading, error };
};

export default useAPI;
