import { useState, useEffect } from "react";

const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async (controller) => {
      try {
        const res = await fetch(url+opts, {
          signal: controller.signal
        });
        if (!res.ok) {
          setLoading(false);
          const data = await res.json();
          console.log(data);
          setError({
            text: data.status,
            status: res.status
          });
          console.log(res);          
          throw new Error('Запрос неудачный, статус '+res.status);
        }
        const data = await res.json();
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        // setLoading(false);
        // setError(null);
        console.log(error);
      }
    }
  
    fetchData(abortController);

    return () => {
      console.log('cleanup');
      return abortController.abort();
    }
  }, [opts, url]);

  return [data, loading, error];
}

export default useJsonFetch;