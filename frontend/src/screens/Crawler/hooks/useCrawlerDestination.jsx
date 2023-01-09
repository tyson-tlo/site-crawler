import { useState } from "react";
import { toast } from "react-toastify";
import useAuthAxios from "../../../hooks/useAuthAxios";

export default function useCrawlerDestination(onResolvedData = () => {}) {
  const [loading, setLoading] = useState(false);
  const axios = useAuthAxios();
  const [data, setData] = useState({
    siteUrl: "https://agencyanalytics.com/",
    pagesDeep: 6,
  });

  const setValue = (name) => {
    return ({ target: { value } }) => {
      setData({ ...data, [name]: value });
    };
  };

  const startCrawl = () => {
    setLoading(true);
    axios
      .post("/crawl", { ...data })
      .then((response) => {
        setLoading(false);
        onResolvedData(response);
      })
      .catch(() => setLoading(false));
  };

  return {
    data,
    setValue,
    startCrawl,
    loading,
  };
}
