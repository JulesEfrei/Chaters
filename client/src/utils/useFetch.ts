import { useEffect, useState } from "react";

interface output {
  response: any;
  error: any;
  isLoading: Boolean;
}

const useFetch: (
  url: string,
  method?: "GET" | "POST",
  body?: BodyInit
) => output = (url, method = "GET", body) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    //We create a AbortController
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        //Classic fetch method
        const req = await fetch(url, {
          signal: controller.signal,
          method,
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body,
        });

        const res = await req.json();

        setIsLoading(false);
        setResponse(res);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err);
          setIsLoading(false);
        }
      }
    };

    if (url) {
      fetchData();
    }

    //Abort fetch request when the component is unMounted
    return () => {
      controller.abort();
      setIsLoading(true);
      setError(null);
      setResponse(null);
    };
  }, [url, method, body]);

  return { response, error, isLoading };
};

export default useFetch;
