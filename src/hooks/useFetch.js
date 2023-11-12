import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({ url, config }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const resp = await axios({ url, ...config });

        const data = await resp.data;

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
